import { converterPreco, somarCompra } from "../../utils/Utils";
import "./index.scss";
import { useState } from "react";
import { IProdutoNoCarrinho } from "../../interfaces/ProdutoInterface";
import CloseImagem from "../../assets/close.svg";
interface ICart {
  produtosNoCarrinho: IProdutoNoCarrinho[];
  abrirFecharCarrinho: () => void;
  carrinhoAberto: boolean;
}

export function Cart({
  produtosNoCarrinho,
  abrirFecharCarrinho,
  carrinhoAberto,
}: ICart) {
  function enviarPedido() {
    const numero: string = "5514999999999";
    const pedido: string = produtosNoCarrinho.reduce(
      (acc, { id, nome, quantidade, preco }) =>
        (acc += `${nome} - ${quantidade} Un. - ${converterPreco(
          (preco * quantidade) / 100
        )}%0A`),
      ""
    );
    window.open(`https://wa.me/${numero}?text=Pedido:%0A${pedido}`, "_blank");
  }

  return (
    <section className={`carrinho ${carrinhoAberto ? "carrinho--aberto" : ""}`}>
      <div className="carrinho__cabecalho">
        <h2 className="carrinho__titulo">
          Carrinho{" "}
          <span className="carrinho__total">
            {somarCompra(produtosNoCarrinho)}
          </span>
        </h2>
        <img
          src={CloseImagem}
          alt="fechar modal"
          className="carrinho__fechar"
          onClick={abrirFecharCarrinho}
        />
      </div>
      <div className="carrinho__produtos">
        {produtosNoCarrinho &&
          produtosNoCarrinho.map(
            ({ id, nome, quantidade, preco }: IProdutoNoCarrinho) => (
              <div
                key={id}
                className="carrinho__produto conteudo-flexivel alinhar-centro gap-1 quebra-linha espaco-fixo"
              >
                <img
                  src="bolos-no-pote.jpeg"
                  alt={nome}
                  className="carrinho__produto__imagem"
                />
                <p>
                  <b>{nome}</b> - {quantidade} Un. -{" "}
                  {converterPreco((preco * quantidade) / 100)}{" "}
                </p>
              </div>
            )
          )}
        {produtosNoCarrinho.length ? (
          <button onClick={() => enviarPedido()} className="btn btn__finalizar">
            Finalizar Pedido {somarCompra(produtosNoCarrinho)}
          </button>
        ) : null}
      </div>
    </section>
  );
}
