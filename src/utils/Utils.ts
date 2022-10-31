import { IProdutoNoCarrinho } from './../interfaces/ProdutoInterface';
export function converterPreco(preco: number) {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(preco)
}
export function somarCompra(produtosNoCarrinho: IProdutoNoCarrinho[]) {
    const soma =  produtosNoCarrinho.reduce((acc: number, item: IProdutoNoCarrinho) => acc += item.preco*item.quantidade, 0)
    return converterPreco(soma/100)
}
export function somarQuantidadeDeProdutos(produtosNoCarrinho: IProdutoNoCarrinho[]) {
    return produtosNoCarrinho.reduce((acc: number, item: IProdutoNoCarrinho) => acc += item.quantidade, 0)
    
}