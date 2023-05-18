const db = require('../config/db');

class Contato {
  constructor({ id, nome, email, assunto, mensagem }) {
    this.id = id;
    this.nome = nome;
    this.email = email;
    this.assunto = assunto;
    this.mensagem = mensagem;
  }

  async criar() {
    const sql = 'INSERT INTO contato (id, nome, email, assunto, mensagem) VALUES (?, ?, ?, ?, ?);'
    const values = [this.id, this.nome, this.email, this.assunto, this.mensagem];

    try {
      const [result] = await db.query(sql, values);
      this.id = result.insertId;
      return true;
    } catch (error) {
      throw error;
    }
  }

  // static async listarTodos() {
  //   const query = 'SELECT * FROM contato';
  //   const result = await db.query(query);
  //   return result;
  // }

  // static async consultarPorId(id) {
  //   const query = 'SELECT * FROM contato WHERE id = ?';
  //   const values = [id];
  //   const result = await db.query(query, values);
  //   return result[0];
  // }

  // static async deletar(id) {
  //   const query = 'DELETE FROM contato WHERE id = ?';
  //   const values = [id];
  //   const result = await db.query(query, values);
  //   return result.affectedRows;
  // }
}

module.exports = Contato;
