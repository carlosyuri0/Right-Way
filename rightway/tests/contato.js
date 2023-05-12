const Contato = require('../models/contato');

(async () => {
  // criar um novo contato
  const novoContato = {
    nome: 'Fulano',
    email: 'fulano@example.com',
    assunto: 'Dúvida',
    mensagem: 'Gostaria de saber mais sobre o produto X.'
  };
  const idCriado = await Contato.criar(novoContato);
  console.log(`Contato criado com ID ${idCriado}`);

  // listar todos os contatos
  const contatos = await Contato.listarTodos();
  console.log(contatos);

  // consultar um contato por ID
  const idConsultado = 1;
  const contatoConsultado = await Contato.consultarPorId(idConsultado);
  console.log(contatoConsultado);

  // deletar um contato por ID
  const idDeletado = 1;
  const rowsAffected = await Contato.deletar(idDeletado);
  console.log(`${rowsAffected} contato(s) deletado(s)`);
})();
