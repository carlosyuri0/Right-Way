const Usuario = require("../models/usuario");

exports.formularioLogin = (req, res) => {
    res.render('usuario/login');
};

exports.formularioCadastro = async (req, res) => {
    res.render('usuario/cadastro');

}; 

exports.Login = async (req, res) => {
    try {
        const { email, senha } = req.body;

        const usuario = await Usuario.consultarPorEmail(email);

        console.log(usuario);

        if (usuario === null) {
            return res.redirect('/usuarios/login');
        }

        if (senha == usuario.senha) {
            req.session.usuario = usuario;
            return res.redirect('/');
        } else {
            return res.redirect('/usuarios/login');
        }
    } catch (error) {
        console.error(error);
        throw new Error('Ocorreu um erro ao buscar o usuário por nome de usuário ou email.');
    }
}

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