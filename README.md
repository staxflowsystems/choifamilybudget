# Choi Family Budget

A bilingual (EN/KO) Flask web app for family financial planning using Dave Ramsey's debt snowball method.

## Features

- **Login gate** — Password: `choi`
- **5 main tabs**: Budget, Debts, Snowball, Savings, Invest
- **Memory Bank** — Save/restore budget snapshots over time
- **Month-by-month payoff schedule** — Detailed breakdown of debt payoff
- **Bilingual** — Toggle between English and Korean
- **Dark modern UI** — Clean, responsive design

## Setup & Run Locally

### 1. Install dependencies

```bash
cd ~/choifamilybudget
pip3 install -r requirements.txt
```

### 2. Run the app

```bash
python3 app.py
```

You should see:
```
 * Running on http://127.0.0.1:5000
```

### 3. Open in browser

Go to: **http://localhost:5000**

Login with password: `choi`

## Database

SQLite database is auto-created at `~/choifamilybudget/budget.db` on first run.

## Files

- `app.py` — Flask app, routes, API endpoints
- `models.py` — SQLAlchemy models (BudgetSnapshot)
- `config.py` — Configuration (password, database)
- `templates/` — HTML templates
  - `login.html` — Login page
  - `dashboard.html` — Main app interface
- `static/` — CSS & JavaScript
  - `style.css` — All styling
  - `app.js` — Frontend logic, calculations, API calls

## To Deploy to PythonAnywhere

Once you're happy with the local version:

1. Create account at pythonanywhere.com
2. Upload project folder
3. Create web app with Flask + Python 3.10
4. Point WSGI file to app.py
5. Set password in config.py
6. Reload web app

Will give you a live URL like: `choifamilybudget.pythonanywhere.com`

## Features Explained

### Budget Tab
Enter monthly income and expenses, see leftover money available for debt payoff.

### Debts Tab
Add all debts (credit cards, loans, medical bills, etc.). Tracks total debt and minimum payments.

### Snowball Tab
Shows debts sorted smallest-to-largest balance. Calculates total payoff time and interest paid. **View Month-by-Month Schedule** button shows detailed breakdown.

### Savings Tab
Dave Ramsey's Baby Steps 1-5 with savings calculator.

### Invest Tab
VOO (Vanguard S&P 500 ETF) education and investment calculator.

### Memory Bank Tab
Save snapshots of your budget at any time, load previous versions to track progress.

## Customization

Edit `config.py` to change:
- Password: `PASSWORD = "choi"`
- Database location
- App secret key

Edit language strings in `static/app.js` in the `T` object (translations).
