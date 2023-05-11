const db = require('../config/db');

class Universidade {
    constructor(id, nome, cidade, sigla) {
        this.id = id;
        this.nome = nome;
        this.cidade = cidade;
        this.sigla = sigla;
    }

    static async criar(nome, cidade, sigla) {
        try {
            const connection = await db.getConnection();
            const query = 'INSERT INTO universidade (nome, cidade, sigla) VALUES (?, ?, ?)';
            const [result] = await connection.execute(query, [nome, cidade, sigla]);
            connection.release();
            const id = result.insertId;
            return new Universidade(id, nome, cidade, sigla);
        } catch (error) {
            throw new Error(`Erro ao criar universidade: ${error.message}`);
        }
    }

    static async listarTodos() {
        try {
            const connection = await db.getConnection();
            const query = 'SELECT * FROM universidade';
            const [rows] = await connection.execute(query);
            connection.release();
            return rows.map(row => new Universidade(row.id, row.nome, row.cidade, row.sigla));
        } catch (error) {
            throw new Error(`Erro ao listar universidades: ${error.message}`);
        }
    }

    static async consultarPorId(id) {
        try {
            const connection = await db.getConnection();
            const query = 'SELECT * FROM universidade WHERE id = ?';
            const [rows] = await connection.execute(query, [id]);
            connection.release();
            if (rows.length === 0) {
                throw new Error('Universidade não encontrada');
            }
            const { nome, cidade, sigla } = rows[0];
            return new Universidade(id, nome, cidade, sigla);
        } catch (error) {
            throw new Error(`Erro ao consultar universidade por ID: ${error.message}`);
        }
    }

    static async deletar(id) {
        try {
            const connection = await db.getConnection();
            const query = 'DELETE FROM universidade WHERE id = ?';
            const [result] = await connection.execute(query, [id]);
            connection.release();
            if (result.affectedRows === 0) {
                throw new Error('Universidade não encontrada');
            }
        } catch (error) {
            throw new Error(`Erro ao deletar universidade: ${error.message}`);
        }
    }
}

module.exports = Universidade;
