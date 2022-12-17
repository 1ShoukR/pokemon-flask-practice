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
    return "I am working"




@app.route("/add-pokemon")
def add_pokemon():
    pass










if __name__ == "__main__":
    app.run(port=5000)
