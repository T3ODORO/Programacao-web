// Constructor function para criar um objeto Item
function Item(nome, preco) {
    this.nome = nome;
    this.preco = preco;
  }
  
  // Factory function para criar um carrinho de compras
  function criarCarrinho() {
    const carrinho = [];
    
    // Função para adicionar um item ao carrinho
    function adicionarItem(item) {
      carrinho.push(item);
    }
  
    // Função para calcular o valor total da compra com desconto
    function calcularTotalComDesconto(desconto, callback) {
      const subtotal = carrinho.reduce((total, item) => total + item.preco, 0);
      const descontoAplicado = subtotal * (1 - desconto / 100);
      callback(descontoAplicado.toFixed(2));
    }
  
    // Função para calcular o valor total da compra sem desconto
    function calcularTotalSemDesconto(callback) {
      const subtotal = carrinho.reduce((total, item) => total + item.preco, 0);
      callback(subtotal.toFixed(2));
    }
  
    return {
      adicionarItem,
      calcularTotalComDesconto,
      calcularTotalSemDesconto
    };
  }
  
  // Criando um carrinho de compras
  const carrinhoDeCompras = criarCarrinho();
  
  // Adicionando itens ao carrinho
  const item1 = new Item('Arroz', 5.0);
  const item2 = new Item('Feijão', 3.0);
  const item3 = new Item('Leite', 2.5);
  
  carrinhoDeCompras.adicionarItem(item1);
  carrinhoDeCompras.adicionarItem(item2);
  carrinhoDeCompras.adicionarItem(item3);
  
  // Calculando o valor total com desconto
  carrinhoDeCompras.calcularTotalComDesconto(10, (totalComDesconto) => {
    console.log(`Valor total com desconto: R$ ${totalComDesconto}`);
  });
  
  // Calculando o valor total sem desconto
  carrinhoDeCompras.calcularTotalSemDesconto((totalSemDesconto) => {
    console.log(`Valor total sem desconto: R$ ${totalSemDesconto}`);
  });
  