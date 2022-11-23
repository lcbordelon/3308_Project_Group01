from flask import Flask, redirect, g, url_for, request, render_template, make_response
#from flask import Flask

app = Flask(__name__)

class PrefixMiddleware(object):

    def __init__(self, app, prefix=''):
        self.app = app
        self.prefix = prefix

    def __call__(self, environ, start_response):
        # set the prefix for all url to the Jupyterhub URL for my virtual machine
        # this path is set to my user [KNOX] and port [3308] 
        # (see the code at bottom to see how port is set to 3308 instead of 5000)
        environ['SCRIPT_NAME'] = "/user/nadr7654/proxy/5000/" 
       
        # call the default processing
        return self.app(environ, start_response)

# insert our proxy setting url class as wrapper to the app
app.wsgi_app = PrefixMiddleware(app.wsgi_app)


@app.route('/')
def index():
    return '<h1>Hello Group 01!</h1>'

@app.route('/game')
def game():
    return render_template('gameboard.html')


with app.test_request_context():
    print(url_for('index'))
    print(url_for('game'))
