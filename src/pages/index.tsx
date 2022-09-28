import { useState } from 'react'
import Botao from '../components/Botao'
import Formulario from '../components/Formulario'
import Layout from '../components/Layout'
import Tabela from '../components/Tabela'
import Cliente from '../core/Cliente'

export default function Home() {
  const [cliente, setCliente] = useState<Cliente>(Cliente.vazio())
  const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela')

  const clientes = [
    new Cliente('Ana', 24, '1'),
    new Cliente('Pedro', 33, '2'),
    new Cliente('Joao', 27, '3'),
    new Cliente('Maria', 54, '4'),
  ]

  function clienteSelecionado(cliente: Cliente) {
    console.log(cliente.nome)
  }

  function clienteExcluido(cliente: Cliente) {
    console.log(cliente.nome)
  }

  function salvarCliente(cliente: Cliente){
    console.log(cliente)
    setVisivel('tabela')
  }

  return (
    <div className="flex h-screen items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500 text-white">
      <Layout titulo='Cadastro Simples'>
        {visivel === 'tabela' ? (
          <>
            <div className='flex justify-end'>
              <Botao
              onClick={() => setVisivel('form')}
                cor='blue'
                className='mb-4'>
                Novo Cliente
              </Botao>
            </div>
            <Tabela 
            cliente={clientes} 
            clienteSelecionado={clienteSelecionado} 
            clienteExcluido={clienteExcluido}></Tabela>
          </>
        ) : (
          <Formulario 
          cliente={cliente}
          clienteMudou={salvarCliente}
          cancelado={() => setVisivel('tabela')}
          />
        )}
      </Layout>
    </div>
  )
}
