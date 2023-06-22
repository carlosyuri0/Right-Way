const Usuario = require("../models/usuario");

exports.formularioLogin = (req, res) => {
    res.render('usuario/login');
};

exports.formularioCadastro = async (req, res) => {
    res.render('usuario/cadastro');

}; 


exports.Cadastro = async (req, res) => {
    try {
        const { nome, email, senha } = req.body;

        const cad = new Usuario({nome , email, senha});
        await cad.criar();
        res.redirect('/usuarios/login');
    } catch (error) {
        res.status(500).render('error', { message: 'Erro no servidor', error });
    }
  
}; 