/*
Utilizando o prompt, implemente uma função recursiva que
receba 5 números, separados por vírgula, e printe-os no
console.
O critério de saída da função recursiva, será a correta execução
do programa. Enquanto os 5 valores inseridos não forem
numéricos, ou houverem menos/mais números e posições. É
importante mostrar quais destes valores inseridos não são
numéricos.
*/
function lerCincoNumeros() {
    const texto = ('Digite 5 números separados por vírgula: ', (entrada) => {
    const numeros = entrada.split(',');

    if (numeros.length !== 5) {
      console.log('Por favor, insira exatamente 5 números válidos separados por vírgula.');
      lerCincoNumeros(); 
    } else {
      console.log('Números inseridos:');
      numeros.forEach(num => {
        console.log(num.trim());
      });
      
    }
  });
}

lerCincoNumeros();
