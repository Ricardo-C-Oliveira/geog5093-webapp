from flask import Flask, jsonify
from flask_cors import CORS

import json

app = Flask(__name__)
CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

@app.route("/")
def ping():
    return "<p>Welcome to the Out Camping API!</p>"

@app.route("/data")
def data():
    with open('./camping_data.geojson') as data:
        response = jsonify(json.load(data))
        # response.headers.add('Access-Control-Allow-Origin', '*')
        return response

