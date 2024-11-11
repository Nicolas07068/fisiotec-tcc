import Header from './Header'

export default function ReferenciasBibliograficas() {
  return (
    <div className="h-svh bg-bg-telas1  bg-[url('./assets/VetorMob.png')] xl:bg-[url('./assets/Vetorr.png')] bg-[length:100%_85%] bg-no-repeat bg-bottom">
      <Header />
      <div className='xl:max-w-7xl xl:m-auto '>
        <h2 className='text-gradient bg-gradient-to-r  from-verdinho  via-azulzinho to-roxinho bg-clip-text text-transparent mb-10 mt-48 text-3xl font-bold text-center'>BIBLIOGRAFIA</h2>
        <section className="w-11/12 xl:w-full">
          <div className='text-white mt-6 text-sm ml-8 text-justify '>
          <p className=''>1. SILVA, Kayque L.; MOROMI, Eduardo E.; DOMINGUES, Victor M. Desenvolvimento de um jogo sério com uso de luva eletrônica para estimulação da coordenação motora fina. 2021. <a className='underline' href="https://dspace.mackenzie.br/handle/10899/31077" target="_blank" >Clique aqui</a> para acessar. Acesso em: 21 maio 2024.</p>

            <p className='mt-10'>2. OLIVEIRA E MOTA, José Vasco Santos de. Projeto e Conceção de Dispositivos de Compensação para Apoio em Procedimentos de Reabilitação da Mão. Dissertação (Mestrado em Engenharia Mecânica na Especialidade de Produção e Projeto) - Universidade de Coimbra, 200X. <a className='underline' href="https://dspace.mackenzie.br/items/6e8a99ef-f58f-4158-a957-3cd9ceca8789" target="_blank" >Clique aqui</a> para acessar. Acesso em: 21 maio 2024.</p>

            <p className='mt-10'>3. Fisioterapia motora em pacientes adultos em terapia intensiva. <a className='underline' href="https://www.scielo.br/j/rbti/a/kQpGBH6JxW8MkhjchxjFdvH/"  target="_blank">Clique aqui</a> para acessar. Acesso em: 21 maio 2024.</p>
          </div>
        </section>
    </div>
    </div>
  )
}

