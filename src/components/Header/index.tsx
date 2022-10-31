
import logoImagem from "../../assets/logo.svg";
import { IHeader } from "../../interfaces/HeaderInteface";
import { somarQuantidadeDeProdutos } from "../../utils/Utils";
import './index.css';

export function Header({produtosNoCarrinho}: IHeader ) {
  const quantidadeDeProdutosNoCarrinho = somarQuantidadeDeProdutos(produtosNoCarrinho)
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
