// Classe criadora de novos Objetos.

class Livro {
    // Método de construção do novo objeto
    constructor(nome, editora, paginas) {
        this.nome = nome
        this.editora = editora
        this.paginas = paginas
    }
    // Método para buscar no novo Objeto criado
    anunciarTitulo(){
        console.log(`Titulo: ${this.nome}`)
    }
    // Método para buscar no novo Objeto criado
    descreverTitulo(){
        console.log(`${this.nome} é um livro da editora ${this.editora} e tem ${this.paginas} páginas.`)
    }
}

// const NodeJS = new Livro("Primeiros passos com NodeJS","casa do Código",195);
// NodeJS.anunciarTitulo()
// NodeJS.descreverTitulo()

// As Classes não são de tipos "Class", elas são do tipo Function, 
// Ou seja, não passam de uma function.
// Importante: Não possuem a função de Hoisted, ou seja, não podem ser
// chamadas antes de serem criadas.

// Classes possuem a Função de Herança(Herdar propriedades de outro Objeto).
// palavra chave extends faz com que as propriedades de livro sejam dadas para LivroColeção
class LivroColecao extends Livro {
    constructor(nome, nomeColecao) {
        // palavra chave "super" disponibiliza as propriedades no construtor, para que o novo objeto tenha a propriedade nome de Livro
        super(nome)
        this.nomeColecao = nomeColecao
    }

    descreverColecao() {
        console.log(`O livro ${this.nome} faz parte da coleção ${this.nomeColecao}.`)
    }
}

const LogicaDeProgramacao = new LivroColecao("Logica de Programação","Comece a Programar");
LogicaDeProgramacao.descreverColecao();