
import { AxiosResponse } from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import { Cart } from './components/Cart'
import { Header } from './components/Header'
import { ProdutoList } from './components/ProdutoList'
import { IProduto, IProdutoNoCarrinho } from './interfaces/ProdutoInterface'
import api from './services/api'

function App() {
  const [produtos, setProdutos] = useState<IProduto[]>([] )
  const [produtosNoCarrinho, setProdutosNoCarrinho] = useState<IProdutoNoCarrinho[]>([])
  async function carregarProdutos() {
    const resposta: AxiosResponse = await api.get('/produtos')
    setProdutos(resposta.data)
  }

  useEffect(() => {
    carregarProdutos()
  }, [])

  return (
    <>
      <Header produtosNoCarrinho={produtosNoCarrinho} />
      <main>
        <div className="conteudo conteudo-flexivel justificar-centro">
          <section className="produtos conteudo-flexivel alinhar-centro justificar-espaco-entre quebra-linha espaco-fixo">
            {produtos && produtos.map((item: IProduto) => (
              <ProdutoList key={item.id} item={item} setProdutosNoCarrinho={setProdutosNoCarrinho} produtosNoCarrinho={produtosNoCarrinho} />
            ))}
          </section>
          <Cart produtosNoCarrinho={produtosNoCarrinho} />
        </div>
      </main>
    </>
  )
}

export default App
