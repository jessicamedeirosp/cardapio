import { IProdutoNoCarrinho } from "./ProdutoInterface";

export interface ICart {
    produtosNoCarrinho: IProdutoNoCarrinho[],
    abrirFecharCarrinho: () => void,
    carrinhoAberto: boolean
}