from faker import Faker
import random

fake = Faker()

# Generate fake customers
def generate_customers(num_customers):
    customers = []
    for _ in range(num_customers):
        customer = {
            'name': fake.name(),
            # Add other customer attributes as needed
        }
        customers.append(customer)
    return customers

# Generate fake orders
def generate_orders(num_orders, customers):
    order_statuses = ['pending', 'processing', 'ready to deliver']
    orders = []
    for _ in range(num_orders):
        order = {
            'customer_id': random.choice(customers)['id'],
            'status': random.choice(order_statuses),
            # Add other order attributes as needed
        }
        orders.append(order)
    return orders

# Generate fake expenses
def generate_expenses(num_expenses):
    expenses = []
    for _ in range(num_expenses):
        expense = {
            # Add expense-related attributes
        }
        expenses.append(expense)
    return expenses

# Generate fake services
def generate_services(num_services):
    services = []
    for _ in range(num_services):
        service = {
            'name': fake.word(),
            # Add other service attributes as needed
        }
        services.append(service)
    return services

# Generate fake payment details
def generate_payment_details(num_payment_details, orders):
    payment_methods = ['ATM', 'MPesa', 'cash']
    payment_details = []
    for _ in range(num_payment_details):
        order = random.choice(orders)
        payment_detail = {
            'order_id': order['id'],
            'payment_method': random.choice(payment_methods),
            # Add other payment detail attributes as needed
        }
        payment_details.append(payment_detail)
    return payment_details

