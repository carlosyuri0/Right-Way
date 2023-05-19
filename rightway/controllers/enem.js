const Enem = require('../models/enem');

exports.renderizarEnem = (req, res) => {
    res.render('enem/enem');
};

exports.processarEnem = async (req, res) => {
    try {
        const { curso, usuario, comentario } = req.body;
        const enem = new Enem({ curso, usuario, comentario });

        await enem.criar();
        res.redirect('back');
    } catch (error) {
        res.status(500).render('error', { message: 'Erro no servidor', error });
    }
};