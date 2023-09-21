import { IProdutoNoCarrinho } from './ProdutoInterface';
export interface IHeader {
    produtosNoCarrinho: IProdutoNoCarrinho[], 
    abrirFecharCarrinho: () => void
}