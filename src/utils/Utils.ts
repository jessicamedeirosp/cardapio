export function converterPreco(preco) {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(preco)
}
export function somarCompra(produtosNoCarrinho) {
 

    const soma =  produtosNoCarrinho.reduce((acc, item) => acc += item.preco*item.quantidade, 0)
    return converterPreco(soma/100)
}