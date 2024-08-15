import React from 'react'
import Header from './Header'
import luva from '../assets/luva.png'

export default function ComoUsar() {
  return (
    <div className='bg-gradient-to-tr from-bg-produto1 via-bg-produto2 to-bg-produto3'>
      <Header></Header>
        <h2 className='text-white font-bold text-2xl text-center mt-10 '><strong className='text-gradient bg-gradient-to-l from-verdinho via-roxinho to-azulzinho bg-clip-text text-transparent'>COMO UTILIZAR</strong> A LUVA ROBÓTICA TERAPÊUTICA</h2>

        <img src={luva} alt="" className='h-64 ml-[91px] mt-6 mb-6' />

        <div className='text-white text-sm w-64 ml-6 text-pretty leading-6 mb-10 '>
          <p><i>1. Vestir a Luva: Coloque a luva na mão afetada, ajustando-a para maior conforto.</i></p>
          <p> <i> 2. Ligar a Luva: Pressione o botão de ligar para ativar o dispositivo.</i></p>
          <p><i>3. Selecionar o Exercício: Utilize os botões de navegação na luva para escolher o exercício desejado na tela LCD.</i></p>
          <p><i>4. Ajustar a Intensidade: Configure a intensidade do movimento conforme a necessidade do usuário.</i></p>
          <p><i>5. Iniciar o Exercício: Pressione o botão de iniciar para começar o movimento. A luva irá executar o ciclo do exercício selecionado.</i></p>
          <p><i>6. Monitorar o Progresso: Acompanhe o tempo, repetições e intensidade na tela LCD durante o exercício.</i></p>
          <p><i>7. Finalizar o Exercício: Pressione o botão de parar para encerrar o movimento. Desligue a luva após o uso.</i></p>
        </div>


    </div>
  )
}
