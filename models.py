from flask import Flask
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///book.sqlite'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)


class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=True)
    password = db.Column(db.String(120), nullable=True)
class Pokemon(db.Model):
    id = db.Column(db.Integer, primary_key=True) # can make foreign key
    user_id = db.Column(db.Integer, nullable=False)
    title = db.Column(db.String(120), nullable=False)
    description = db.Column(db.Text(), nullable=True)
    poke_image = db.Column(db.Text(), nullable=True)