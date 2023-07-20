from faker import Faker
import random
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from models import db, Customer, Order, Expense, Service, PaymentDetail

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///laundry.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# Initialize the db with the app
db.init_app(app)

fake = Faker()
def generate_fake_data(num_customers=100, num_orders=200, num_expenses=50, num_services=10, num_payment_details=300):
   

    # Generate fake customers
    for _ in range(num_customers):
        name = fake.name()
        customer = Customer(name=name)
        db.session.add(customer)

    # Generate fake orders
    customers = Customer.query.all()
    order_statuses = ['pending', 'processing', 'ready to deliver']

    for _ in range(num_orders):
        customer = random.choice(customers)
        status = random.choice(order_statuses)
        order = Order(customer=customer, status=status)
        db.session.add(order)

    # Generate fake expenses
    for _ in range(num_expenses):
        # You can add attributes for expenses according to your specific needs
        expense = Expense()
        db.session.add(expense)

    # Generate fake services
    for _ in range(num_services):
        name = fake.word()
        service = Service(name=name)
        db.session.add(service)

    # Generate fake payment details
    orders = Order.query.all()

    for _ in range(num_payment_details):
        order = random.choice(orders)
        is_dryer = random.choice([True, False])
        extra_care_charge = random.uniform(1.0, 10.0)
        delivery_charge = random.uniform(5.0, 20.0)
        payment_detail = PaymentDetail(order=order, is_dryer=is_dryer, extra_care_charge=extra_care_charge, delivery_charge=delivery_charge)
        db.session.add(payment_detail)

    db.session.commit()


# Usage example
if __name__ == "__main__":
    with app.app_context():
        db.create_all()

    # Generate fake data and populate the database
        generate_fake_data()

    app.run(debug=True)