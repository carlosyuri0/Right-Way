const Contato = require('../models/contato');

(async () => {
  // criar um novo contato
  const novoContato = new Contato({
    nome: 'Fulano',
    email: 'fulano@example.com',
    assunto: 'Dúvida',
    mensagem: 'Gostaria de saber mais sobre o produto X.'
  });
  await novoContato.criar();
  console.log(`Contato criado com ID ${novoContato.id}`);

  // listar todos os contatos
  // const contatos = await Contato.listarTodos();
  // console.log(contatos);

  // // consultar um contato por ID
  // const idConsultado = 1;
  // const contatoConsultado = await Contato.consultarPorId(idConsultado);
  // console.log(contatoConsultado);

  // // deletar um contato por ID
  // const idDeletado = 1;
  // const rowsAffected = await Contato.deletar(idDeletado);
  // console.log(`${rowsAffected} contato(s) deletado(s)`);
})();
