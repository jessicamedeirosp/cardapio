
import logoImagem from "../../assets/logo.svg";
import { IHeader } from "../../interfaces/HeaderInteface";
import { somarQuantidadeDeProdutos } from "../../utils/Utils";
import './index.css';

export function Header({produtosNoCarrinho, abrirFecharCarrinho}: IHeader ) {
  const quantidadeDeProdutosNoCarrinho = somarQuantidadeDeProdutos(produtosNoCarrinho)
  return (
    <header className="cabecalho">
      <div className="conteudo posicao-relativa conteudo-flexivel alinhar-centro justificar-centro">
        <img src={logoImagem} alt="jess doces" className="logo" />
        <a href="#" className="itens-carrinho" onClick={abrirFecharCarrinho}>
         {quantidadeDeProdutosNoCarrinho ? quantidadeDeProdutosNoCarrinho : 0 }      
        </a>
      </div>
    </header>
  );
}
