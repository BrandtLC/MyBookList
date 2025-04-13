from flask import Flask

from flask_cors import CORS




class Server():

    def __init__(self, ):
        self.app = Flask(__name__)
        CORS(self.app, resources={r"/*": {"origins": "*"}})

        

    def run(self, ):
        self.app.run(
          port=5000,
          debug=True,
          host = '0.0.0.0'

        )

server = Server()
