export function Produto({item, setProdutosNoCarrinho, produtosNoCarrinho}) {
    const {nome, descricao, preco} = item;
    function converterPreco(preco) {
        return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(preco)
    }

    
    return (
    <div className="produto">
        <img src="bolos-no-pote.jpeg" alt={nome} className='produto__imagem'/>
        <div className="produto__informacoes">
          <h3 className="produto__nome">{nome}</h3>
          <p className="produto__descricao">{descricao}</p>
          <h4 className='produto__preco'>{converterPreco(preco/100)}</h4>
          <button className="btn__adicionar" onClick={() => setProdutosNoCarrinho([...produtosNoCarrinho, item])}>Add ao Carrinho</button>
        </div>
      </div>
    )
}