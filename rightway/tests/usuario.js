const Usuario = require('../models/usuario');

(async () => {
  try {
    // criar um novo usuário
    const novoUsuario = new Usuario('João Silva', 'joao@example.com', 'senha123', 'perfil.jpg');
    await novoUsuario.criar();
    console.log('Novo usuário criado:', novoUsuario);

    // listar todos os usuários
    const usuarios = await Usuario.listarTodos();
    console.log('Lista de usuários:', usuarios);

    // consultar um usuário por ID
    const idConsultado = 1;
    const usuarioConsultado = await Usuario.consultarPorId(idConsultado);
    console.log('Usuário consultado:', usuarioConsultado);

    // deletar um usuário
    const idDeletado = 1;
    const usuarioDeletado = await Usuario.consultarPorId(idDeletado);
    if (usuarioDeletado) {
      await usuarioDeletado.deletar();
      console.log('Usuário deletado:', usuarioDeletado);
    } else {
      console.log('Usuário não encontrado para deletar.');
    }
  } catch (error) {
    console.error(error);
  }
})();
