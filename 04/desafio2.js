/*
Fazendo o uso de função construtora e callback, crie um
programa para incluir notas, calcular a média e informar se um
aluno foi APROVADO ou REPROVADO.
*/

class Exercicio {
    constructor(...cNotas) {
        this.notas = cNotas;
    }

    calculaMedia(callback) {
        if (this.notas.length !== 5) {
            callback("É necessário fornecer exatamente 5 notas.");
            return;
        } else if (this.notas.length > 10) {
            callback("As notas não devem passar de 10")
            return;
        }

        const soma = this.notas.reduce((total, nota) => total + nota, 0);
        const media = soma / this.notas.length;

        if (media >= 7){
            return `A média do aluno é: ${media}. APROVADO!`
        } else {
            return `A média das notas é: ${media}. REPROVADO!`
        }
        
    }
}

let aluno1 = new Exercicio(10, 10, 5, 8, 7);

console.log(aluno1.calculaMedia());

