from flask import Flask, redirect, url_for, render_template, request, session, g
from models import db, User, Pokemon
from flask_cors import CORS, cross_origin
import json
import os
from datetime import datetime


# Flask
app = Flask(__name__)
CORS(app)
app.config['SECRET_KEY'] = '\xbb\xe7A\xe3\x9d=tg\xf6\x86).\xf8\xb1\x82L_99\x00\xc1\xc1\xf3\x95'
app.config['DEBUG'] = True
# Database
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://root:Rahmin12@localhost:3306/pokemon_api'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['DEBUG'] = True
db.init_app(app)




# Routes

@app.route("/")
def index():
    # db.create_all()
    return "database created"

@app.route("/create-account-confirm", methods=["POST"])
def create_account():
    content = request.json
    print(f"This is content: {content}")
    create_account = User(username = content["username"], password = content["password"])
    db.session.add(create_account)
    db.session.commit()
    return {"username created": create_account.username, "password created": create_account.password}



@app.route("/login-confirm", methods=["POST"])
def login_route():
    content = request.json
    print(f"This is content: {content}")
    return {"message": "Hello I am working!", "Content": content}

@app.route("/add-pokemon")
def add_pokemon():
    pass










if __name__ == "__main__":
    app.run(port=5000)
