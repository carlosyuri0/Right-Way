const Universidade = require('../models/universidade');

(async () => {
  try {
    // Criar uma universidade
    const universidade1 = await Universidade.criar('Universidade A', 'Cidade A', 'UA');
    console.log('Universidade criada:', universidade1);

    // Criar outra universidade
    const universidade2 = await Universidade.criar('Universidade B', 'Cidade B', 'UB');
    console.log('Universidade criada:', universidade2);

    // Listar todas as universidades
    const universidades = await Universidade.listarTodos();
    console.log('Universidades:', universidades);

    // Consultar universidade por ID
    const universidadeId = 1; // ID da universidade a ser consultada
    const universidadeConsultada = await Universidade.consultarPorId(universidadeId);
    console.log('Universidade consultada por ID:', universidadeConsultada);

    // Deletar uma universidade
    const universidadeDeletadaId = 2; // ID da universidade a ser deletada
    await Universidade.deletar(universidadeDeletadaId);
    console.log('Universidade deletada com sucesso.');

    // Listar todas as universidades novamente após a exclusão
    const universidadesAtualizadas = await Universidade.listarTodos();
    console.log('Universidades atualizadas:', universidadesAtualizadas);
  } catch (error) {
    console.error('Erro:', error.message);
  }
})();
