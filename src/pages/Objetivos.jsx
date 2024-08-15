import React from 'react'
import Header from './Header'

export default function Objetivos() {
  return (
    <section>
      <Header></Header>
        <div className='bg-bg-dev w-64 h-36 mt-10 ml-8 text-white text-xs'>
            <h2 className='text-base font-bold mb-2 ml-4' >Diferenciais do Projeto</h2>
            <p><i>Tecnologia Avançada: Motores de passo, sensores precisos e conectividade Bluetooth.</i></p>
            <p><i>Acessível e Econômico: Baixo custo, acessível e adequado para uso doméstico.</i></p>
            <p><i>Conforto Ergonômico: Design ergonômico, ajustável e confortável.</i></p>
        </div>
    

        <div className='bg-bg-objetivo w-64 h-36 mt-10 ml-8 text-white text-xs'>
            <h2 className='text-base font-bold mb-2 ml-4'> Objetivo</h2>
            <p><i>Melhorar a qualidade de vida de pessoas com dificuldades motoras, proporcionando um dispositivo que facilite a realização de exercícios fisioterapêuticos em casa, promovendo autonomia e bem-estar.</i></p>
        </div>

        <div className='bg-bg-dev w-64 h-36 mt-10 ml-8 text-white text-xs mb-10'>
            <h2 className='text-base font-bold mb-2 ml-4'>Público-Alvo</h2>
            <p><i>Pacientes com paralisia cerebral.</i></p>
            <p><i>Idosos com dificuldades motoras. Indivíduos em reabilitação pós-acidente.</i></p>
            <p><i>Atletas lesionados necessitando de reabilitação motora.</i></p>
            <p><i>Pessoas com lesões temporárias nas mãos e dedos.</i></p>
        </div>
    </section>
  )
}
