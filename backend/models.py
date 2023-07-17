from flask import Flask
from flask_sqlalchemy import SQLAlchemy
db= SQLAlchemy

class Customer(db.Model):
    __tablename__= 'customers.db'
    id = db.Column(db.Integer, primary_key=True)
    contact_details=db.Column(db.String(100))
    address= db.Column(db.String(100))


class Order(db.Model):
    id= db.Column(db.Integer, primary_key=True)
    order_date= db.Column(db.Date)
    