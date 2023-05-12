const db = require('../config/db');

class Depoimento {
  constructor(id, curso_id, usuario_id, comentario) {
    this.id = id;
    this.curso_id = curso_id;
    this.usuario_id = usuario_id;
    this.comentario = comentario;
  }

  async criar() {
    const { curso_id, usuario_id, comentario } = this;
    const query = 'INSERT INTO depoimento (curso_id, usuario_id, comentario) VALUES (?, ?, ?)';
    const values = [curso_id, usuario_id, comentario];
    const [result] = await db.execute(query, values);
    this.id = result.insertId;
    return this;
  }

  static async listarTodos() {
    const query = 'SELECT * FROM depoimento';
    const [rows] = await db.execute(query);
    return rows;
  }

  static async consultarPorId(id) {
    const query = 'SELECT * FROM depoimento WHERE id = ?';
    const values = [id];
    const [rows] = await db.execute(query, values);
    if (rows.length === 0) {
      return null;
    }
    const { curso_id, usuario_id, comentario } = rows[0];
    return new Depoimento(id, curso_id, usuario_id, comentario);
  }

  async deletar() {
    const query = 'DELETE FROM depoimento WHERE id = ?';
    const values = [this.id];
    await db.execute(query, values);
  }
}

module.exports = Depoimento;
