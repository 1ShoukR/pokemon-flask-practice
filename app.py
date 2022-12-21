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

@app.before_request
def before_request():
    print("before request")
    print("this is session", session)
    g.user = None
    if os.path.isfile("session.json"):
        print ("File exists and is readable")
        with open('session.json', 'r') as f:
            data = json.load(f)
            g.user = User.query.filter_by(id=data["id"]).first()    




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
    user_signin = User.query.filter_by(username = content["username"], password = content["password"]).first()
    get_user_data = Pokemon.query.filter_by(user_id = user_signin.id)
    user_data_response = []
    for data in get_user_data:
        print(data)
        user_data_response.append({
            "id": data.id,
            "title": data.title,
            "description": data.description,
            "image": data.poke_image
        })
    print(user_data_response)
    response = {
        "username": user_signin.username,
        "password": user_signin.password,
        "id": user_signin.id
    }
    with open("session.json", "w") as outfile:
        outfile.write(json.dumps(response, indent=4))
    return {"id": user_signin.id,"username": user_signin.username, "password": user_signin.password, "userAccountData": user_data_response}



@app.route("/add-pokemon", methods=["POST"])
def add_pokemon():
    content = request.json
    print(f"This is content: {content}")
    enter_data = Pokemon(user_id=g.user.id, title=content["title"], description=content["description"], poke_image=content["poke_image"])
    db.session.add(enter_data)
    db.session.commit()
    query_data = Pokemon.query.filter_by(user_id = g.user.id).all()
    table_data = []
    for data in query_data:
        table_data.append({
            "title": data.title,
            "description": data.description,
            "poke_image": data.poke_image
        })
    print(table_data)
    return table_data



@app.route("/remove-pokemon", methods=["POST"])
def remove_pokemon():
    content = request.json
    print("This is content: ", content)
    return "i am hitting"






if __name__ == "__main__":
    app.run(port=5000)
