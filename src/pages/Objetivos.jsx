import Header from './Header'
import Rev1 from '../assets/rev-1.svg'
import Rev2 from '../assets/rev-2.svg'
import Rev3 from '../assets/rev-3.svg'

export default function Objetivos() {
  return (
    <section className='overflow-x-hidden bg-bg-telas1 xl:h-svh'  > 
      <Header />
      <div className='xl:flex xl:items-center xl:justify-center xl:gap-7 '>
        <div className='bg-bg-ob1 h-36 mt-10 ml-4 text-white text-xs w-11/12 xl:w-96 shadow-[8px_8px_#213444]'>
          <h2 className='text-base font-bold mb-4 ml-4'>Diferenciais do Projeto</h2> 
          <ul className='list-disc pl-5 space-y-1'>
          <li>Tecnologia Avançada: Motores de passo, sensores precisos e conectividade Bluetooth.</li>
          <li>Acessível e Econômico: Baixo custo, acessível e adequado para uso doméstico.</li>
          <li>Conforto Ergonômico: Design ergonômico, ajustável e confortável.</li>
          </ul>
        </div>

        <div className='bg-shadow-ob2 h-36 mt-10 ml-4 text-white text-xs w-11/12 xl:w-96 shadow-[8px_8px_#36003A]'> 
          <h2 className='text-base font-bold mb-4 ml-4'> Objetivo</h2>
          <ul className='pl-5 space-y-1'>
            <li>Melhorar a qualidade de vida de pessoas com dificuldades motoras, proporcionando um dispositivo que facilite a realização de exercícios fisioterapêuticos em casa, promovendo autonomia e bem-estar.</li>
          </ul>
        </div>

        <div className='bg-bg-ob1 h-36 mt-10 ml-4 text-white text-xs mb-10 w-11/12 xl:w-96 xl:mb-0 shadow-[8px_8px_#213444] '>
          <h2 className='text-base font-bold mb-4 ml-4'>Público-Alvo</h2>
          <ul className='list-disc pl-5 space-y-1'>
          <li>Pacientes com paralisia cerebral.</li>
          <li>Idosos com dificuldades motoras. Indivíduos em reabilitação pós-acidente.</li>
          <li>Atletas lesionados necessitando de reabilitação motora.</li>
          <li>Pessoas com lesões temporárias nas mãos e dedos.</li>
          </ul>
        </div>
      </div>

      <div className='xl:flex xl:mt-12 xl:max-w-7xl xl:m-auto'>
        <div className='relative h-48 w-44 xl:w-10/12'>
          <img src={Rev1} alt="Mão robótica" className='absolute top-10 left-10 w-80 xl:w-56 mt-4' />
          <img src={Rev2} alt="Robô feito de metal" className='absolute top-6 ml-64 h-36 xl:w-44 ml-72 mt-4' />
          <img src={Rev3} alt="Placa de arduino" className='absolute top-48 h-36 ml-64 xl:w-36 ml-72 mt-6' />
        </div>

      <div className='block mt-44 mb-10 ml-5 xl:mr-16 xl:mt-16 flex-row   '>
      <h2 className='text-3xl text-white font-semibold '>REVOLUÇÃO NA <br/>
        <strong className='text-gradient bg-gradient-to-r  from-verdinho  via-roxinho to-azulzinho bg-clip-text text-transparent xl:ml-0'>
        REABILITAÇÃO <br />
        </strong>
        <strong className='text-gradient bg-gradient-to-r  from-verdinho  via-roxinho to-azulzinho bg-clip-text text-transparent xl:ml-0'>
        MOTORA!
        </strong>
      </h2>
      <p className='text-white mt-10 xl:w-1/2 text-justify mt-8 mb-0 mr-4 xl:text-sm'><i>A Luva Robótica Terapêutica é um dispositivo inovador que utiliza tecnologia Arduino Uno para ajudar pacientes com dificuldades motoras a realizarem exercícios fisioterapêuticos, abrindo e fechando a mão do usuário para facilitar a recuperação.</i></p>
      

        <a href="/baseamento"><button className='mb-10 mt-20 bg-transparent border-2 w-36 rounded-3xl p-1 text-white xl:mt-10 mr-[500px]'>Veja Mais</button></a>
      </div>
      </div>
    </section>
  ) 
}
