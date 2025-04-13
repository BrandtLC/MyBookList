import sqlite3


def init_db():
    conn = sqlite3.connect('data.db')
    # conn.execute(
    #     'DROP TABLE books_read'
    # )
    conn.execute(
        'CREATE TABLE IF NOT EXISTS books_read (user_id TEXT, book_id TEXT, rate INTEGER, PRIMARY KEY (user_id, book_id))'
    )

    print('Tabelas iniciadas com sucesso')
    conn.close()

# Função para conectar ao banco de dados
def get_db_connection():
    conn = sqlite3.connect('data.db')
    conn.row_factory = sqlite3.Row
    return conn
    
init_db()