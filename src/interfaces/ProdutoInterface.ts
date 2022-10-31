import { Dispatch, SetStateAction } from "react"

export interface IProduto{
    id: number,
    nome: string,
    descricao: string,
    preco: number
}

export interface IProdutoNoCarrinho extends IProduto {
    quantidade: number
}

export interface IProdutoList {
    item: IProduto,
    setProdutosNoCarrinho: Dispatch<SetStateAction<IProdutoNoCarrinho[]>>
    produtosNoCarrinho: IProdutoNoCarrinho[]
}