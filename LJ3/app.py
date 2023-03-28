from flask import Flask, request
import oceanscript
from flask.helpers import send_file

app = Flask(__name__, static_url_path='/', static_folder='/')

@app.route('/')
def index():
    return send_file('index.html')

@app.route('/encode', methods=['POST'])
def get_post_javascript_data():
    data = request.form['input']
    data = oceanscript.encode(data)
    return data