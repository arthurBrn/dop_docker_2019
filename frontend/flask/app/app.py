# Import flask 
from flask import Flask
app = Flask(__name__)


# Route definition
@app.route('/')
# Controller to the forward slash route
def index():
    return 'OLALALALALALALAL'


# Create the dev server 
if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')

