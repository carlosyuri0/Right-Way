const db = require('../config/db');

class Usuario {
  constructor({nome, email, senha, id }) {
    this.id = id;
    this.nome = nome;
    this.email = email;
    this.senha = senha;
  }

  async criar() {
    const query = 'INSERT INTO usuario (nome, email, senha) VALUES (?, ?, ?);';
    const values = [this.nome, this.email, this.senha];

    try {
      const [rows] = await db.query(query, values);
      this.id = rows.insertId;
      return this;
    } catch (error) {
      console.error(error);
      throw new Error('Erro ao criar usuário no banco de dados.');
    }
  }

  static async listarTodos() {
    const query = 'SELECT * FROM usuario';

    try {
      const [rows] = await db.execute(query);
      return rows.map(row => new Usuario(row.nome, row.email, row.senha, row.foto_perfil, row.id));
    } catch (error) {
      console.error(error);
      throw new Error('Erro ao listar usuários do banco de dados.');
    }
  }

  static async consultarPorId(id) {
    const query = 'SELECT * FROM usuario WHERE id = ?';
    const values = [id];

    try {
      const [rows] = await db.execute(query, values);

      if (rows.length === 0) {
        return null;
      }

      const { nome, email, senha } = rows[0];
      return new Usuario(nome, email, senha, id);
    } catch (error) {
      console.error(error);
      throw new Error('Erro ao consultar usuário no banco de dados.');
    }
  }

  static async consultarPorEmail(email) {
    const query = 'SELECT * FROM usuario WHERE email = ?';
    const values = [email];

    try {
      const [rows] = await db.execute(query, values);

      if (rows.length === 0) {
        return null;
      }

      return rows[0];      
    } catch (error) {
      console.error(error);
      throw new Error('Erro ao consultar usuário no banco de dados.');
    }
  }

  async deletar() {
    if (!this.id) {
      throw new Error('Não é possível deletar um usuário sem ID.');
    }

    const query = 'DELETE FROM usuario WHERE id = ?';
    const values = [this.id];

    try {
      await db.execute(query, values);
    } catch (error) {
      console.error(error);
      throw new Error('Erro ao deletar usuário do banco de dados.');
    }
  }
}

module.exports = Usuario;
