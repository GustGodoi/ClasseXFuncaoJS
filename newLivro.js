// Função para criar novos livros a partir de certo parâmetros

// "Classes" são os nomes de estrutura que criam Objetos

const Livro = function(nome, editora, paginas) {
    gNome = nome,
    gEditora = editora,
    gPaginas = paginas

    this.getNome = function() {
        return gNome
    };
    this.getEditora = function() {
        return gEditora
    };
    this.getPaginas = function() {
        return gPaginas
    };
};

const GraphQL = new Livro("GraphQL", "Casa do Código", 143);

console.log(GraphQL.getNome());
console.log(GraphQL.getEditora());
console.log(GraphQL.getPaginas());
