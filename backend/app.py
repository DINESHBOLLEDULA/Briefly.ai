from flask import Flask,jsonify


app=Flask(__name__)

@app.route('/')
def index():
    return "hello"

@app.route('/api')
def data():
    return jsonify("hello")


if __name__ == "__main__":
    app.run(debug=True)