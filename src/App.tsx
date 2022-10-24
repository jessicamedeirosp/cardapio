
import { useEffect, useState } from 'react'
import './App.css'
import { Header } from './components/Header'
import { Produto } from './components/Produto'
import api from './services/api'

function App() {
  const [produtos, setProdutos] = useState([])
  const [produtosNoCarrinho, setProdutosNoCarrinho] = useState([])
  async function carregarProdutos() {
    const resposta = await api.get('/produtos')
    setProdutos(resposta.data)
  }
  useEffect(() => {
    carregarProdutos()
  },[])

  return (
    <>
      <Header produtosNoCarrinho={produtosNoCarrinho}/>
      <main>
        <div className="conteudo">         
          <section className="produtos conteudo-flexivel alinhar-centro justificar-espaco-entre quebra-linha espaco-fixo">
            {produtos && produtos.map(item => (
              <Produto key={item.id} item={item} setProdutosNoCarrinho={setProdutosNoCarrinho} produtosNoCarrinho={produtosNoCarrinho}/>
            ))}
          </section>
        </div>
      </main>
    </>
  )
}

export default App
