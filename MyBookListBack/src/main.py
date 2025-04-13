from db import *
from server.instance import server
import sqlite3 as sql
from flask import jsonify, request

app = server.app
init_db()

# Rota para obter todos os livros por user_id
@app.route('/api/read/<user_id>', methods=['GET'])
def get_all_by_user(user_id):
    with sql.connect('data.db') as con:
        con.row_factory = sql.Row 
        cur = con.cursor()
        cur.execute("SELECT * FROM books_read where user_id = ?", (user_id, ))
        
        rows = cur.fetchall()
        books = [dict(row) for row in rows]
        
        return jsonify(books)

@app.route('/api/read', methods = ['POST'])
def persist_book_read():
    print(request.json)
    user_id = request.json['user_id']
    book_id = request.json['book_id']
    rate = request.json['rate']
    
    
    if rate < 1 or rate >5 :
        raise Exception("Apenas notas de 1 a 5 são aceitas!")
    
    with sql.connect('data.db') as con:
        
        cur = con.cursor()
        cur.execute("INSERT INTO books_read (user_id, book_id, rate) VALUES (?, ?, ?)", (user_id, book_id, rate))

        return {
            "user_id": user_id,
            "book_id": book_id,
            "rate": rate
        }

@app.route('/api/read/<user_id>/<book_id>', methods = ['DELETE'])
def delete_book_read(user_id, book_id):
    
    with sql.connect('data.db') as con:
        
        cur = con.cursor()
        cur.execute("DELETE FROM books_read WHERE user_id = ? AND  book_id = ?", (user_id, book_id))

        if cur.rowcount == 0:
            raise Exception("Não existe entrada no banco de dados para os ids passados!")
        
        return ("", 200)
    
@app.route('/api/read', methods = ['PUT'])
def update_book_read():
    user_id = request.json['user_id']
    book_id = request.json['book_id']
    rate = request.json['rate']
    
    if rate < 1 or rate >5 :
        raise Exception("Apenas notas de 1 a 5 são aceitas!")
    
    with sql.connect('data.db') as con:
        
        cur = con.cursor()
        cur.execute("UPDATE books_read SET rate = ? WHERE user_id = ? AND book_id = ?", (rate, user_id, book_id))
        
        if cur.rowcount == 0:
            raise Exception("Não existe entrada no banco de dados para os ids passados!")

        return ({
            "user_id": user_id,
            "book_id": book_id,
            "rate": rate
        }, 200)
        
server.run()

