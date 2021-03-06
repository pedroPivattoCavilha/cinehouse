//Declaração das variáveis
let cinema = 'CineHouse';
let catalogo = [
    {
      codigo : 1,
      titulo: 'Star Wars',
      duracao: 2,
      atores: ['Mark Hamill, Harrison Ford'],
      anoDeLancamento : 1997,
      emCartaz : true 
    },
    {
      codigo : 2,
      titulo: 'Senhor dos Aneis',
      duracao: 2,
      atores: ['Sean Astin, Ian McKellen'],
      anoDeLancamento : 2001,
      emCartaz : false
    }
 ];

//Adicionar filme
function adicionarFilme(codigo, titulo, duracao, atores, anoDeLancamento, emCartaz) {
    catalogo.push(
      {
        codigo,
        titulo,
        duracao,
        atores,
        anoDeLancamento,
        emCartaz
      }
    );
}

//Buscar um filme do catálogo
function buscarFilme (codigo) {
    for (let i=0; i<catalogo.length; i++) {
        if (catalogo[i].codigo == codigo) {
            return catalogo[i];
        }
    }
    return undefined;
}

//Alterar status de um filme
function alterarStatusEmCartaz(codigo) {
    for (let i=0; i<catalogo.length; i++) {
        if (catalogo[i].codigo == codigo) {
            catalogo[i].emCartaz = !catalogo[i].emCartaz;
        }
    }
}
