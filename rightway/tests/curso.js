const Curso = require('../models/curso');

(async () => {
  try {
    // Criar um novo curso
    const novoCurso = new Curso(null, 'Programação em JavaScript', 'Aprenda a programar em JavaScript', 'capa1.jpg', 1);
    await novoCurso.criar();
    console.log('Novo curso criado:', novoCurso);

    // Listar todos os cursos
    const cursos = await Curso.listarTodos();
    console.log('Lista de cursos:', cursos);

    // Consultar um curso por ID
    const idConsultado = 1;
    const cursoConsultado = await Curso.consultarPorId(idConsultado);
    console.log('Curso consultado:', cursoConsultado);

    // Deletar um curso
    const idDeletado = 1;
    const cursoDeletado = await Curso.consultarPorId(idDeletado);
    if (cursoDeletado) {
      await cursoDeletado.deletar();
      console.log('Curso deletado:', cursoDeletado);
    } else {
      console.log('Curso não encontrado para deletar.');
    }
  } catch (error) {
    console.error(error);
  }
})();
