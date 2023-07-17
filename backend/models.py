from flask import Flask
from flask_sqlalchemy import SQLAlchemy
db= SQLAlchemy


db = SQLAlchemy()

class Customer(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    

class Order(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    customer_id = db.Column(db.Integer, db.ForeignKey('customer.id'), nullable=False)
    status = db.Column(db.String(20), nullable=False)  # 'pending', 'processing', 'ready to deliver'

class Expense(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    # Add expense-related attributes

class Service(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    # Add other service attributes as needed

class PaymentDetail(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    order_id = db.Column(db.Integer, db.ForeignKey('order.id'), nullable=False)
    is_dryer = db.Column(db.Boolean, default=False)
    extra_care_charge = db.Column(db.Float, default=0.0)
    delivery_charge = db.Column(db.Float, default=0.0)
    # Add other payment detail attributes as needed
