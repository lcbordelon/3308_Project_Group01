#adds the score table to the database.db file
import sqlite3

connection = sqlite3.connect('database.db')
c = connection.cursor()

c.exectute("CREATE TABLE score(name VARCHAR(20), time INT);")

conn.commit()
conn.close()