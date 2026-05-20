from flask_sqlalchemy import SQLAlchemy
from datetime import datetime
import json

db = SQLAlchemy()

class BudgetSnapshot(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(200), nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    data = db.Column(db.Text, nullable=False)  # JSON string

    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'created_at': self.created_at.strftime('%Y-%m-%d %H:%M'),
            'data': json.loads(self.data)
        }

    @staticmethod
    def from_dict(name, data_dict):
        snapshot = BudgetSnapshot(
            name=name,
            data=json.dumps(data_dict)
        )
        return snapshot
