import Bas1 from '../assets/bas4.png'
import Header from './Header'

export default function Baseamento() {
  return (
    <div className='bg-bg-telas1 xl:h-svh' >
        <Header></Header>
        <div className='xl:flex xl:max-w-7xl xl:m-auto'>
          <div className='xl:flex-row xl:w-1/2 xl:ml-10 xl:mt-10 '>
          <div className='font-bold ml-7 text-3xl text-white '>
            <h2 className=' text-whit mt-10'>BASEAMENTO </h2>
            <h2 className=' text-gradient bg-gradient-to-r  from-verdinho  via-roxinho to-azulzinho bg-clip-text text-transparent mb-10 xl:mb-6'>CIENTÍFICO</h2>
          </div>

            <p className='ml-5 mb-10 text-white w-11/12 xl:mb-6 w-11/12 text-justify '><i>Segundo a ciência existem condições médicas que afetam significamente o controle muscular e a mobilidade das ações um exemplo é a paralisia cerebral, que atinge cerca de150 mil pessoas por ano. Idosos também possuem alta prevalência de dificuldades motoras. Visto isso, torno essencial desenvolver um dispositivo que melhore a qualidade de vida e que reintegre essas pessoas na sociedade.</i> 
            </p>
            <p className='ml-5 text-white w-11/12 text-justify'><i>Independentemente do que tenha resultado na perda na mobilidade das mãos, essa condição compromete a independência para realizar tarefas, tendo impacto mental e emocional, tais como ansiedade e depressão. Além disso, a realização de exercícios fisioterapêuticos com sessões repetitivas para o fortalecimento, apresenta resultados significativos na recuperação de um indivíduo, sendo essencial para realizar tarefas diárias e recuperar sua autonomia.</i></p>
          

          <a href="/produto"><button className='mt-10 bg-gradient-to-l  from-verdinho via-azulzinho to-roxinho text rounded-3xl p-1 text-white ml-6  mb-10 w-36 xl:mb-0'>Veja Mais</button></a>
          </div>
          <div className='flex items-center justify-center xl:w-1/2 xl:ml-20 xl:mt-32'>
          <img className='w-[310px] h-[310px] xl:w-10/12 xl:h-5/6' src={Bas1} alt="Mulher surpresa olhando para cima " />
          </div>
        </div>
    </div>                                                                              
  )
}