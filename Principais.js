class Livro{
    constructor(pNome){
        this.nome = pNome
    }

    get Nome(){return this.nome}
    set Nome(pNome) {this.Nome = pNome}

}

var obj_livro1 = new Livro("Use a cabeça: Java");
console.log("Nome do livro: " + obj_livro1.Nome);
