from flask import Flask, render_template, request, redirect, url_for, session, jsonify
from flask_login import LoginManager, login_user, logout_user, login_required, UserMixin
from config import Config
from models import db, Budget, Debt

app = Flask(__name__)
app.config.from_object(Config)

db.init_app(app)
login_manager = LoginManager()
login_manager.init_app(app)
login_manager.login_view = 'login'

# Create tables on first request — safe for both development and Gunicorn/Render
_tables_created = False

@app.before_request
def create_tables():
    global _tables_created
    if not _tables_created:
        db.create_all()
        _tables_created = True


class User(UserMixin):
    def __init__(self):
        self.id = 1

@login_manager.user_loader
def load_user(user_id):
    return User()


@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        password = request.form.get('password')
        if password == Config.PASSWORD:
            user = User()
            login_user(user)
            session['authenticated'] = True
            return redirect(url_for('dashboard'))
        else:
            return render_template('login.html', error='Wrong password')
    return render_template('login.html')


@app.route('/logout')
def logout():
    logout_user()
    session.clear()
    return redirect(url_for('login'))


@app.route('/')
@login_required
def dashboard():
    return render_template('dashboard.html')


@app.route('/api/load')
@login_required
def api_load():
    """Return the single family budget + all debts as JSON."""
    budget = Budget.query.first()
    if budget is None:
        return jsonify({'budget': None, 'debts': []})
    return jsonify({
        'budget': budget.to_dict(),
        'debts': [d.to_dict() for d in budget.debts]
    })


@app.route('/api/save', methods=['POST'])
@login_required
def api_save():
    """
    Upsert the single family budget row and replace all debt rows.

    Expected JSON body:
    {
      "budget": { "dad_income": 4500, "other_income": 0, "rent": 1800, ... },
      "debts": [
        { "sort_order": 0, "type": "credit", "name": "Chase Card",
          "balance": 5000, "min": 150, "paid_off": false },
        ...
      ]
    }
    """
    data = request.get_json()
    if not data:
        return jsonify({'error': 'No JSON body'}), 400

    budget_data = data.get('budget', {})
    debts_data = data.get('debts', [])

    # Upsert: get the existing row or create a new one
    budget = Budget.query.first()
    if budget is None:
        budget = Budget()
        db.session.add(budget)

    # Update budget fields
    budget.dad_income    = float(budget_data.get('dad_income', 0))
    budget.other_income  = float(budget_data.get('other_income', 0))
    budget.rent          = float(budget_data.get('rent', 0))
    budget.utilities     = float(budget_data.get('utilities', 0))
    budget.insurance     = float(budget_data.get('insurance', 0))
    budget.phone         = float(budget_data.get('phone', 0))
    budget.mom_allowance = float(budget_data.get('mom_allowance', 0))
    budget.misc          = float(budget_data.get('misc', 0))

    # Replace all debts — cascade='all, delete-orphan' handles deletion
    budget.debts = [
        Debt(
            sort_order=int(d.get('sort_order', i)),
            type=str(d.get('type', 'credit')),
            name=str(d.get('name', '')),
            balance=float(d.get('balance', 0)),
            min=float(d.get('min', 0)),
            paid_off=bool(d.get('paid_off', False))
        )
        for i, d in enumerate(debts_data)
    ]

    db.session.commit()
    return jsonify({'status': 'ok'})


if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run(debug=True, port=5000)
