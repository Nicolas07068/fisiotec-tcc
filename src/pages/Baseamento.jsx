import Bas1 from '../assets/bas-1.svg'
import Header from './Header'

export default function Baseamento() {
  return (
    <div>
        <Header></Header>
        <div className='font-bold ml-7 text-3xl text-white'>
          <h2 className=' text-whit mt-10'>BASEAMENTO </h2>
          <h2 className=' text-gradient bg-gradient-to-l  from-verdinho  via-roxinho to-azulzinho bg-clip-text text-transparent mb-10'>CIENTÍFICO</h2>
        </div>

        <p className='ml-7 mb-10 text-white w-60'><i>Segundo a ciência existem condições médicas que afetam significamente o controle muscular e a mobilidade das ações um exemplo é a paralisia cerebral, que atinge cerca de150 mil pessoas por ano. Idosos também possuem alta prevalência de dificuldades motoras. Visto isso, torno essencial desenvolver um dispositivo que melhore a qualidade de vida e que reintegre essas pessoas na sociedade.</i> 
        </p>
        <p className='ml-7 text-white w-60'><i>Independentemente do que tenha resultado na perda na mobilidade das mãos, essa condição compromete a independência para realizar tarefas, tendo impacto mental e emocional, tais como ansiedade e depressão. Além disso, a realização de exercícios fisioterapêuticos com sessões repetitivas para o fortalecimento, apresenta resultados significativos na recuperação de um indivíduo, sendo essencial para realizar tarefas diárias e recuperar sua autonomia.</i></p>

        <button className='mt-6 bg-gradient-to-l  from-verdinho via-azulzinho to-roxinho text rounded-3xl p-1 text-white ml-7 mb-10'>Veja Mais</button>
        <div className='flex items-center justify-center'>
        <img src={Bas1} alt="Mulher surpresa olhando para cima " />
        </div>
    </div>
  )
}
