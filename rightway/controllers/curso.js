const Contato = require('../models/curso');

exports.renderizarCurso = (req, res) => {
    res.render('curso/curso');
};

exports.processarCurso = async (req, res) => {
    try {
        const { nome, email, assunto, mensagem } = req.body;
        const contato = new Curso({ nome, email, assunto, mensagem });

        await curso.criar();
        res.redirect('back');
    } catch (error) {
        res.status(500).render('error', { message: 'Erro no servidor', error });
    }
};