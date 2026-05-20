import os

class Config:
    BASE_DIR = os.path.abspath(os.path.dirname(__file__))

    # Render sets DATABASE_URL with "postgres://" prefix; SQLAlchemy requires "postgresql://"
    _db_url = os.environ.get('DATABASE_URL', f"sqlite:///{os.path.join(BASE_DIR, 'budget.db')}")
    if _db_url.startswith('postgres://'):
        _db_url = _db_url.replace('postgres://', 'postgresql://', 1)

    SQLALCHEMY_DATABASE_URI = _db_url
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    SECRET_KEY = os.environ.get('SECRET_KEY', 'choi_family_budget_secret_2026')
    PASSWORD = os.environ.get('APP_PASSWORD', 'choi')
