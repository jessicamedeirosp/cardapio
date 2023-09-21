
import { IProduto, IProdutoList, IProdutoNoCarrinho } from "../../interfaces/ProdutoInterface";
import { converterPreco } from "../../utils/Utils";
import './index.css'

export function ProdutoList({item, setProdutosNoCarrinho, produtosNoCarrinho}: IProdutoList) {
    const {nome, descricao, preco}: IProduto = item;   

    function adicionarProdutoNoCarrinho() {
        let newItem: IProdutoNoCarrinho  = {
            ...item,
            quantidade: 1
        }
        const existeProdutoNoCarrinho: IProdutoNoCarrinho[] = produtosNoCarrinho.filter((produto: IProdutoNoCarrinho) => produto.id === item.id)
     
         if(existeProdutoNoCarrinho.length) {
             const novoProdutosNoCarrinho: IProdutoNoCarrinho[] =  produtosNoCarrinho.filter((produto) => produto.id !== item.id)
            newItem = {
                ...existeProdutoNoCarrinho[0], 
                quantidade: existeProdutoNoCarrinho[0].quantidade + 1 
            } 
            setProdutosNoCarrinho([...novoProdutosNoCarrinho,  newItem])
            return
        }
        
        setProdutosNoCarrinho([...produtosNoCarrinho,  newItem])
    }

    
    return (
    <div className="produto">
        <img src="bolos-no-pote.jpeg" alt={nome} className='produto__imagem'/>
        <div className="produto__informacoes">
          <h3 className="produto__nome">{nome}</h3>
          <p className="produto__descricao">{descricao}</p>
          <button className="btn btn__adicionar" onClick={() => adicionarProdutoNoCarrinho()}>Add ao Carrinho {converterPreco(preco/100)}</button>
        </div>
      </div>
    )
}