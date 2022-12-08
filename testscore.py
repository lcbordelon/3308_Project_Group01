#!/usr/bin/env python3


import sqlite3

conn = sqlite3.connect('test.db')
c = conn.cursor()
c.execute('CREATE TABLE score(name VARCHAR(45), time int);')

c.execute("INSERT INTO score VALUES('Frank', 60);")
c.execute("INSERT INTO score VALUES('Jack', 75);")
c.execute("INSERT INTO score VALUES('Jim', 45);")
c.execute("INSERT INTO score VALUES('Karen', 15);")
c.execute("INSERT INTO score VALUES('James', 30);")

conn.commit()
conn.close()