import sqlite3
from flask import Flask, redirect, g, url_for, request, render_template, make_response, url_for

app = Flask(__name__)

class PrefixMiddleware(object):

    def __init__(self, app, prefix=''):
        self.app = app
        self.prefix = prefix

    def __call__(self, environ, start_response):
        # set the prefix for all url to the Jupyterhub URL for my virtual machine
        # this path is set to my user [KNOX] and port [3308] 
        # (see the code at bottom to see how port is set to 3308 instead of 5000)
        environ['SCRIPT_NAME'] = "/" 
       
        # call the default processing
        return self.app(environ, start_response)

# insert our proxy setting url class as wrapper to the app
app.wsgi_app = PrefixMiddleware(app.wsgi_app)


def get_db_connection():
    conn = sqlite3.connect('database.db')
    conn.row_factory = sqlite3.Row
    return conn


@app.route('/')
def index():
    return render_template('index.html', title="Index")

@app.route('/login', methods=('GET', 'POST'))
def login():
    conn = get_db_connection()
    users = conn.execute('SELECT * FROM users').fetchall()
    # conn.close()
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']

        conn.execute('INSERT INTO users (username, pword) VALUES (?, ?)', (username, password))
        conn.commit()
        conn.close()
        return redirect(url_for('game'))
    return render_template('login.html', users = users)

@app.route('/game')
def game():
    return render_template('gameboard.html', title="Game Page")

@app.route('/about')
def about():
    return render_template('about.html', title="About")

@app.route('/leaderboard')
def leaderboard():
    #get the score values from the database file
    conn = sqlite3.connect('flask_app/test.db')
    scores = conn.execute('SELECT * FROM score ORDER BY time;').fetchall()
    conn.close
    return render_template('leaderboard.html', title="Top Scores", scores = scores)


with app.test_request_context():
    print(url_for('index'))
    print(url_for('game'))
    print(url_for('about'))
    print(url_for('leaderboard'))