
from flask import Blueprint, render_template, request, jsonify

main_routes = Blueprint('main_routes', __name__)

@main_routes.route('/')
def home():
    return render_template('index.html')

@main_routes.route('/about')
def about():
    return "about this gang"

@main_routes.route('/items', methods=['POST'])
def add_item():
    data = request.json 
    item = {"id": 1, "name": data['name']} 
    return jsonify(item), 201
