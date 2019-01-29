from flask import Flask, request, jsonify
import os.path

app = Flask(__name__)


@app.route('/user/<username>', methods=['GET'])
def get_user(username):
    fileName = './data/' + username + '.txt'

    with open(fileName) as data_file:
        data = data_file.readline();
        return data


@app.route('/user/<username>', methods=['POST'])
def post_user(username):
    fileName = './data/' + username + '.txt'
    print(request.data)
    with open(fileName, 'w') as data_file:
        data_file.write(request.data.decode("utf-8"))

    return '201'


