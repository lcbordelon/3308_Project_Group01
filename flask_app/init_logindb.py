import sqlite3

connection = sqlite3.connect('database.db')


with open('login_schema.sql') as f:
    connection.executescript(f.read())

cur = connection.cursor()

cur.execute("INSERT INTO users (username, pword) VALUES (?, ?)",
            ('Tubby', 'fish4me')
            )

cur.execute("INSERT INTO users (username, pword) VALUES (?, ?)",
            ('Chip', 'badboi')
            )

connection.commit()
connection.close()