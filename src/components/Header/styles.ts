import styled from "styled-components";

export const Cabecalho = styled.header`
    background-color: var(--rosa-500);
    color: var(--rosa-100);
    padding: 1rem 0;
    margin-bottom: 2rem;
    text-align: center;
    border-bottom: 3px dashed var(--marron-500);
`
export const ItensCarrinho = styled.a`
   background: var(--marron-500);
    color: var(--rosa-100);
    padding: 0.6rem 1rem;
    border-radius: 50%;
    position: absolute;
    right: 1.6rem;

    @media(max-width: 768px) {  
        padding: 1rem 2rem;    
        font-size: 1.6rem;   
    }
`