const Depoimento = require('../models/depoimento');

(async () => {
  try {
    // Criar um depoimento
    const novoDepoimento = new Depoimento(null, 1, 1, 'Ótimo curso, recomendo!');
    await novoDepoimento.criar();
    console.log('Novo depoimento criado:', novoDepoimento);

    // Listar todos os depoimentos
    const depoimentos = await Depoimento.listarTodos();
    console.log('Lista de depoimentos:', depoimentos);

    // Consultar um depoimento por ID
    const depoimentoConsultado = await Depoimento.consultarPorId(1);
    console.log('Depoimento consultado por ID:', depoimentoConsultado);

    // Deletar um depoimento
    await depoimentoConsultado.deletar();
    console.log('Depoimento deletado com sucesso!');
  } catch (error) {
    console.error('Erro:', error);
  }
})();
