const Contato = require('../models/contato');

exports.renderizarFormulario = (req, res) => {
    res.render('contato/formulario');
};

exports.processarFormulario = async (req, res) => {
    try {
        const { nome, email, assunto, mensagem } = req.body;
        const contato = new Contato({ nome, email, assunto, mensagem });

        await contato.criar();
        res.redirect('back');
    } catch (error) {
        res.status(500).render('error', { message: 'Erro no servidor', error });
    }
};