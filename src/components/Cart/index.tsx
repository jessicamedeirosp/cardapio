import { ICart } from "../../interfaces/CartInterface";
import { converterPreco, somarCompra } from "../../utils/Utils";
import './index.css'

export function Cart({produtosNoCarrinho}: ICart) {
    function enviarPedido() {
        const numero = '5514988194114'
        const pedido =  produtosNoCarrinho.reduce((acc, { id, nome, quantidade, preco }) => acc += `${nome} - ${quantidade} Un. - ${converterPreco((preco*quantidade)/100)}%0A`, '')
        window.open(`https://wa.me/${numero}?text=Pedido:%0A${pedido}`,'_blank')
    }

    return (
        <section className="carrinho">
        <h2 className='carrinho__titulo'>Carrinho <span className='carrinho__total'>{somarCompra(produtosNoCarrinho)}</span></h2>
        <div className="carrinho__produtos">
          {produtosNoCarrinho && produtosNoCarrinho.map(({ id, nome, quantidade, preco }) => (
            <div key={id} className="carrinho__produto conteudo-flexivel alinhar-centro gap-1 quebra-linha espaco-fixo">
              <img src="bolos-no-pote.jpeg" alt={nome} className='carrinho__produto__imagem' />
              <p><b>{nome}</b> - {quantidade} Un. - {converterPreco((preco*quantidade)/100)} </p>
            </div>
          ))}
          {produtosNoCarrinho.length ?
            <button onClick={() => enviarPedido()} className='btn btn__finalizar'>Finalizar Pedido {somarCompra(produtosNoCarrinho)}</button>: null
          }
        </div>
      </section>
    );
  }
  