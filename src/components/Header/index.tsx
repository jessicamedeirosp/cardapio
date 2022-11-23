
import logoImagem from "../../assets/logo.svg";
import { IHeader } from "../../interfaces/HeaderInteface";
import { somarQuantidadeDeProdutos } from "../../utils/Utils";
import { Cabecalho, ItensCarrinho } from './styles';

export function Header({produtosNoCarrinho, abrirFecharCarrinho}: IHeader ) {
  const quantidadeDeProdutosNoCarrinho = somarQuantidadeDeProdutos(produtosNoCarrinho)
  return (
    <Cabecalho className="cabecalho">
      <div className="conteudo posicao-relativa conteudo-flexivel alinhar-centro justificar-centro">
        <img src={logoImagem} alt="jess doces" className="logo" />
        <ItensCarrinho href="#" className="itens-carrinho" onClick={abrirFecharCarrinho}>
         {quantidadeDeProdutosNoCarrinho ? quantidadeDeProdutosNoCarrinho : 0 }      
        </ItensCarrinho>
      </div>
    </Cabecalho>
  );
}
