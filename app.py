import sqlite3
import json
from flask import Flask, redirect, g, url_for, request, render_template, make_response, jsonify, session, flash
from flask_login import LoginManager

# Create app and login manager
app = Flask(__name__)
app.secret_key = 'sadfDS53reva'
login_manager = LoginManager()
login_manager.init_app(app);

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
    return conn


@app.route('/')
def index():
    if 'username' in session:
        return render_template('index.html', title="Index")
    else:
        return redirect("/login");

@app.route('/home')
def home():
    if 'username' in session:
        return render_template('index.html', title="Index")
    else:
        return redirect("/login");

@login_manager.user_loader
@app.route('/login', methods=('GET', 'POST'))
def login():
    conn = get_db_connection()
    if request.method == 'POST':
        # Check if creating user
        create_user = request.form["create_username"].strip()
        if (create_user):
            create_password = request.form["create_password"].strip()
            conn.execute('INSERT INTO users (username, pword) VALUES (?, ?)', (create_user, create_password))
            conn.commit()
            conn.close()
            
            # Set user in session and redirect to game
            session['username'] = create_user
            return redirect(url_for('game'))
            
        else:
            # Make sure the user is in the database
            username = request.form['username'].strip()
            password = request.form['password'].strip()

            c = conn.cursor()
            user_data = c.execute(f"""
                                  SELECT * FROM users WHERE username='{username}'
                                  AND pword='{password}'""").fetchall()
            
            # Check if entry exists (username password is correct)
            if (user_data):
                # Set username in session
                session['username'] = username
                return redirect(url_for('game'))
            else:
                # Incorrect Username
                flash('Incorrect Username or Password')
                return redirect("/login")
            
    # Basic Get call
    return render_template('login.html')

@login_manager.user_loader
@app.route('/logout', methods=('GET', 'POST'))
def logout():
    # Clear session and log out
    session.pop('username', None)
    flash('Successfully Logged Out')
    return redirect(url_for("login"))

@app.route('/game')
def game():
    if 'username' in session:
        return render_template('gameboard.html', title="Game Page")
    else:
        flash('Please Login First!')
        return redirect("/login");

#route for recieving score from game
@app.route('/get_score', methods=['GET','POST'])
def get_score():
    if 'username' in session:
        score = request.data
        myscore = json.loads(score);
        #name = myscore["name"]
        name = session['username']
        time = myscore["time"]
        
        #add the score to database
        conn = sqlite3.connect('database.db')
        c = conn.cursor()
        c.execute("INSERT INTO score VALUES(?,?);", (name, time))
        conn.commit()
        conn.close()
        return redirect('/game')
    else:
        return "Error posting score to scoreboard ..."

@app.route('/about')
def about():
    return render_template('about.html', title="About")

@app.route('/leaderboard')
def leaderboard():
    #get the score values from the database file
    conn = sqlite3.connect('database.db')
    scores = conn.execute('SELECT * FROM score ORDER BY time;').fetchall()
    conn.close
    return render_template('leaderboard.html', title="Top Scores", scores = scores)

