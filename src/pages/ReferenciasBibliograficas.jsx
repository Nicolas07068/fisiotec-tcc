import React from 'react'
import Header from './Header'

export default function ReferenciasBibliograficas() {
  return (
    <div>
      <Header></Header>
        <h2 className='text-gradient bg-gradient-to-l  from-verdinho  via-roxinho to-azulzinho bg-clip-text text-transparent mb-10 mt-10 text-3xl font-bold text-center'>BIBLIOGRAFIA</h2>

        <div className='text-white mt-6 text-sm ml-8'>
        <p className='w-36'><i>1. SILVA, Kayque L.; MOROMI, Eduardo E.; DOMINGUES, Victor M. Desenvolvimento de um jogo sério com uso de luva eletrônica para estimulação da coordenação motora fina. 2021. Disponível em: https://dspace.mackenzie.br/handle/10899/31077. Acesso em: 21 maio 2024.</i></p>

          <p className='mt-10 w-56'><i>2. OLIVEIRA E MOTA, José Vasco Santos de. Projeto e Conceção de Dispositivos de Compensação para Apoio em Procedimentos de Reabilitação da Mão. Dissertação (Mestrado em Engenharia Mecânica na Especialidade de Produção e Projeto) - Universidade de Coimbra, 200X. Disponível em: https://dspace.mackenzie.br/items/6e8a99ef-f58f-4158-a957-3cd9ceca8789. Acesso em: 21 maio 2024.</i></p>

          <p className='mt-10 w-44'><i>3. Fisioterapia motora em pacientes adultos em terapia intensiva. Disponível em: https://www.scielo.br/j/rbti/a/kQpGBH6JxW8MkhjchxjFdvH/. Acesso em: 21 maio 2024.</i></p>
        </div>
    </div>
  )
}
