const db = require('../config/db');

class Curso {
  constructor(id, nome, descricao, capa, universidade_id) {
    this.id = id;
    this.nome = nome;
    this.descricao = descricao;
    this.capa = capa;
    this.universidade_id = universidade_id;
  }

  async criar() {
    const { nome, descricao, capa, universidade_id } = this;
    const query = 'INSERT INTO curso (nome, descricao, capa, universidade_id) VALUES (?, ?, ?, ?)';
    const values = [nome, descricao, capa, universidade_id];
    const [result] = await db.execute(query, values);
    this.id = result.insertId;
    return this;
  }

  static async listarTodos() {
    const query = 'SELECT * FROM curso';
    const [rows] = await db.execute(query);
    return rows;
  }

  static async consultarPorId(id) {
    const query = 'SELECT * FROM curso WHERE id = ?';
    const values = [id];
    const [rows] = await db.execute(query, values);
    if (rows.length === 0) {
      return null;
    }
    const { nome, descricao, capa, universidade_id } = rows[0];
    return new Curso(id, nome, descricao, capa, universidade_id);
  }

  async deletar() {
    const query = 'DELETE FROM curso WHERE id = ?';
    const values = [this.id];
    await db.execute(query, values);
  }
}

module.exports = Curso;
