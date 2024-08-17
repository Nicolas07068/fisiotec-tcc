import Header from './Header'
import Rev1 from '../assets/rev-1.svg'
import Rev2 from '../assets/rev-2.svg'
import Rev3 from '../assets/rev-3.svg'

export default function Objetivos() {
  return (
    <section > 
      <Header />
      <div className='xl:flex xl:items-center xl:justify-center xl:gap-7'>
        <div className='bg-bg-dev h-36 mt-10 ml-4 text-white text-xs w-11/12 xl:w-96'>
          <h2 className='text-base font-bold mb-4 ml-4'>Diferenciais do Projeto</h2>
          <ul className='list-disc pl-5 space-y-1'>
          <li>Tecnologia Avançada: Motores de passo, sensores precisos e conectividade Bluetooth.</li>
          <li>Acessível e Econômico: Baixo custo, acessível e adequado para uso doméstico.</li>
          <li>Conforto Ergonômico: Design ergonômico, ajustável e confortável.</li>
          </ul>
        </div>

        <div className='bg-bg-objetivo h-36 mt-10 ml-4 text-white text-xs w-11/12 xl:w-96'>
          <h2 className='text-base font-bold mb-4 ml-4'> Objetivo</h2>
          <ul className='pl-5 space-y-1'>
            <li>Melhorar a qualidade de vida de pessoas com dificuldades motoras, proporcionando um dispositivo que facilite a realização de exercícios fisioterapêuticos em casa, promovendo autonomia e bem-estar.</li>
          </ul>
        </div>

        <div className='bg-bg-dev h-36 mt-10 ml-4 text-white text-xs mb-10 w-11/12 xl:w-96 xl:mb-0'>
          <h2 className='text-base font-bold mb-4 ml-4'>Público-Alvo</h2>
          <ul className='list-disc pl-5 space-y-1'>
          <li>Pacientes com paralisia cerebral.</li>
          <li>Idosos com dificuldades motoras. Indivíduos em reabilitação pós-acidente.</li>
          <li>Atletas lesionados necessitando de reabilitação motora.</li>
          <li>Pessoas com lesões temporárias nas mãos e dedos.</li>
          </ul>
        </div>
      </div>

      <div className='xl:flex mt-12'>
        <div className='relative h-48 w-44'>
          <img src={Rev1} alt="Mão robótica" className='absolute top-10 left-10 w-80 xl:h-[314px]' />
          <img src={Rev2} alt="Robô feito de metal" className='absolute top-6 ml-64 h-36' />
          <img src={Rev3} alt="Placa de arduino" className='absolute top-48 h-36 ml-64' />
        </div>

      <div className='block mt-44 mb-10 ml-10 xl:text-right mr-16 mt-28 flex-row   '>
      <h2 className='text-3xl text-white font-bold '>REVOLUÇÃO NA 
        <strong className='text-gradient bg-gradient-to-r  from-verdinho  via-roxinho to-azulzinho bg-clip-text text-transparent ml-2'>
        REABILITAÇÃO MOTORA!
        </strong>
      </h2>
      <p className='text-white mt-10 xl:w-1/2 text-right mt-8 mb-0 ml-0 xl:ml-[605px] xl:text-sm'><i>A Luva Robótica Terapêutica é um dispositivo inovador que utiliza tecnologia Arduino Uno para ajudar pacientes com dificuldades motoras a realizarem exercícios fisioterapêuticos, abrindo e fechando a mão do usuário para facilitar a recuperação.</i></p>
      

        <button className='mb-10 ml-8 bg-transparent border-2 w-28 rounded-3xl p-1 text-white xl:mt-10 xl:mr-96'>Veja Mais</button>
      </div>
      </div>
    </section>
  ) 
}
