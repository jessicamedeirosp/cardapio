
import logoImagem from "../../assets/logo.svg";
import './index.css';

export function Header({produtosNoCarrinho}) {
  const quantidadeDeProdutosNoCarrinho = produtosNoCarrinho.reduce((acc, item) => acc += item.quantidade, 0)
  return (
    <header className="cabecalho">
      <div className="conteudo conteudo-flexivel alinhar-centro justificar-centro">
        <img src={logoImagem} alt="jess doces" className="logo" />
        <a href="#" className="itens-carrinho">
         {quantidadeDeProdutosNoCarrinho ? quantidadeDeProdutosNoCarrinho : 0 }      
        </a>
      </div>
    </header>
  );
}
