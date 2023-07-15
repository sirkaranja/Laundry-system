from flask import Flask, jsonify, request
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI']= 'sqlite:///laundry.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS']= False

@app.route('/')
def index():
    return "<h3>Dashboard</h3>"



if __name__ =='__main__':
    app.run(port=5555)
