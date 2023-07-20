from flask import Flask, jsonify, request
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from models import db, Customer, Order, Expense, Service, PaymentDetail

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI']= 'sqlite:///laundry.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS']= False
db.init_app(app)

CORS(app)

@app.route('/')
def index():
    return "<h3>Dashboard</h3>"

@app.route('/customers', methods=['GET'])
def get_customers():
    customers = Customer.query.all()
    customers_data = [{ 'id': customer.id,'name': customer.name
        }
        for customer in customers
    ]
    return jsonify(customers_data)



if __name__ =='__main__':
    app.run(port=5555)
