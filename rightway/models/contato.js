const db = require('../config/db');

class Contato {
  constructor({ id, nome, email, assunto, mensagem }) {
    this.id = id;
    this.nome = nome;
    this.email = email;
    this.assunto = assunto;
    this.mensagem = mensagem;
  }

  static async criar({ nome, email, assunto, mensagem }) {
    const query = 'INSERT INTO contato (nome, email, assunto, mensagem) VALUES (?, ?, ?, ?)';
    const values = [nome, email, assunto, mensagem];
    const result = await db.query(query, values);
    return result.insertId;
  }

  static async listarTodos() {
    const query = 'SELECT * FROM contato';
    const result = await db.query(query);
    return result;
  }

  static async consultarPorId(id) {
    const query = 'SELECT * FROM contato WHERE id = ?';
    const values = [id];
    const result = await db.query(query, values);
    return result[0];
  }

  static async deletar(id) {
    const query = 'DELETE FROM contato WHERE id = ?';
    const values = [id];
    const result = await db.query(query, values);
    return result.affectedRows;
  }
}

module.exports = Contato;
