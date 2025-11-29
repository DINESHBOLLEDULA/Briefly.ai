from flask import Flask,jsonify,request
from flask_cors import CORS


app=Flask(__name__)
CORS(app)

@app.route('/')
def index():
    return "HOME PAGE"
@app.route('/api/hello',methods=['GET'])
def hello():
    return jsonify({'message':'hello from Flask!'})


@app.route('/api/echo',methods=['POST'])
def echo():
    data=request.json
    print(data)
    return jsonify({'you sent':data})


if __name__=='__main__':
    app.run(debug=True)