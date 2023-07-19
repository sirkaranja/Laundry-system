from flask import Flask
from flask_sqlalchemy import SQLAlchemy



db = SQLAlchemy()

class Customer(db.Model):
    __tablename__='customers'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    

class Order(db.Model):
    __tablename__='orders'
    id = db.Column(db.Integer, primary_key=True)
    customer_id = db.Column(db.Integer, db.ForeignKey('customer.id'), nullable=False)
    status = db.Column(db.String(20), nullable=False)  # 'pending', 'processing', 'ready to deliver'

class Expense(db.Model):
    __tablename__='expenses'
    id = db.Column(db.Integer, primary_key=True)


class Service(db.Model):
    __tablename__='services'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)


class PaymentDetail(db.Model):
    __tablename__='paymentdetails'
    id = db.Column(db.Integer, primary_key=True)
    order_id = db.Column(db.Integer, db.ForeignKey('order.id'), nullable=False)
    is_dryer = db.Column(db.Boolean, default=False)
    extra_care_charge = db.Column(db.Float, default=0.0)
    delivery_charge = db.Column(db.Float, default=0.0)

