from flask_sqlalchemy import SQLAlchemy
from datetime import datetime

db = SQLAlchemy()


class Budget(db.Model):
    __tablename__ = 'budget'

    id = db.Column(db.Integer, primary_key=True)
    dad_income = db.Column(db.Float, default=0.0)
    other_income = db.Column(db.Float, default=0.0)
    rent = db.Column(db.Float, default=0.0)
    utilities = db.Column(db.Float, default=0.0)
    insurance = db.Column(db.Float, default=0.0)
    phone = db.Column(db.Float, default=0.0)
    mom_allowance = db.Column(db.Float, default=0.0)
    misc = db.Column(db.Float, default=0.0)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

    debts = db.relationship('Debt', backref='budget', lazy=True,
                            cascade='all, delete-orphan', order_by='Debt.sort_order')

    def to_dict(self):
        return {
            'dad_income': self.dad_income,
            'other_income': self.other_income,
            'rent': self.rent,
            'utilities': self.utilities,
            'insurance': self.insurance,
            'phone': self.phone,
            'mom_allowance': self.mom_allowance,
            'misc': self.misc,
        }


class Debt(db.Model):
    __tablename__ = 'debt'

    id = db.Column(db.Integer, primary_key=True)
    budget_id = db.Column(db.Integer, db.ForeignKey('budget.id'), nullable=False)
    sort_order = db.Column(db.Integer, default=0)
    type = db.Column(db.String(50), default='credit')
    name = db.Column(db.String(200), default='')
    balance = db.Column(db.Float, default=0.0)
    min = db.Column(db.Float, default=0.0)
    paid_off = db.Column(db.Boolean, default=False)

    def to_dict(self):
        return {
            'id': self.id,
            'sort_order': self.sort_order,
            'type': self.type,
            'name': self.name,
            'balance': self.balance,
            'min': self.min,
            'paid_off': self.paid_off,
        }
