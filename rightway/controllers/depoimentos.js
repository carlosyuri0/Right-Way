const Depoimento = require('../models/depoimento');

exports.renderizarDepoi = (req, res) => {
    res.render('depoimentos/depoimento');
};

exports.processarDepoi = async (req, res) => {
    try {
        const { curso, usuario, comentario } = req.body;
        const depoimento = new Depoimento({ curso, usuario, comentario });

        await depoimento.criar();
        res.redirect('back');
    } catch (error) {
        res.status(500).render('error', { message: 'Erro no servidor', error });
    }
};