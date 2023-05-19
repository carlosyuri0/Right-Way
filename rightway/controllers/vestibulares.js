const vestibular = require('../models/vestibular');

exports.renderizarVesti = (req, res) => {
    res.render('vestibulares/vestibulares');
};

exports.processarVesti = async (req, res) => {
    try {
        const { curso, } = req.body;
        const vestibular = new vestibular({ curso, });

        await vestibular.criar();
        res.redirect('back');
    } catch (error) {
        res.status(500).render('error', { message: 'Erro no servidor', error });
    }
};