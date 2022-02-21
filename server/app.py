from flask import Flask
from flask_cors import CORS

import json

app = Flask(__name__)
CORS(app)

@app.route("/")
def ping():
    return "<p>Welcome to the Out Camping API!</p>"

@app.route("/data")
def data():
    with open('./camping_data.geojson') as data:
        return json.load(data)

if __name__ == '__main__':
    app.run(host='0.0.0.0', debug = False)