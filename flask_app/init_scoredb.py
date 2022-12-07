#!/usr/bin/env python3
#adds the score table to the database.db file
import sqlite3

connection = sqlite3.connect('database.db')
c = connection.cursor()

c.execute("CREATE TABLE score(name VARCHAR(20), time INT);")

connection.commit()
connection.close()