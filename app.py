from flask import Flask, redirect, url_for, render_template, request, session, g
# from models import db, User, ToDO
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





# Routes

@app.route("/")
def index():
    return "I am working"















if __name__ == "__main__":
    app.run(port=5000)
