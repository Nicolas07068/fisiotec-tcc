import IdosaImg from '../assets/idosa-removebg-preview 2.svg'
import CerebroImg from '../assets/cerebro-removebg-preview (1) 2.svg'
import MaoLampadaImg from '../assets/maolampada-removebg-preview 2.svg'
import CirculoImg from '../assets/alv-removebg-preview 2.svg'
import MaoRoboticaImg from '../assets/luva-removebg-preview 2.svg'
import Header from './Header'


export default function Produto() {
  return (
    <section>
        <Header></Header>
        <div className='text-3xl font-bold ml-7 xl:text-4xl '>
        <h2 className=' text-whit mt-10 text-white'>ENTENDA O </h2>
        <h2 className=' text-gradient bg-gradient-to-r  from-verdinho  via-azulzinho to-roxinho bg-clip-text text-transparent mb-10'>PRODUTO</h2>
        </div>
        <p className='ml-7 text-white h-44  xl:text-sm'><i>A Luva Robótica Terapêutica visa melhorar a qualidade de vida e promover a autonomia de pessoas com dificuldades motoras, facilitando a reabilitação em casa.</i></p>

        <div className='flex items-center justify-center  mt-10 text-white text-[12px] gap-3'>
            <div>
                <img src={IdosaImg} alt="" className='xl:ml-56 ml-7'/>
                <p className='xl:h-44 xl:w-56 w-32 '><i>O produto visa aumentar a autonomia dos pacientes, melhorar sua qualidade de vida e promover sua inclusão social, permitindo a realização de exercícios em casa.</i></p>
            </div>

            <div className='ml-3'>
                <img src={CerebroImg} alt="" className='xl:ml-56 ml-12 h-16 mb-2' />
                <p className='xl:h-44 xl:w-56 w-32'><i>Destinada a pacientes com paralisia cerebral, idosos com dificuldades motoras e pessoas com lesões nas mãos, a luva atende a uma ampla gama de indivíduos que necessitam de reabilitação.</i></p>
            </div>

            </div>
            <div className='flex items-center justify-center  mt-10 text-white text-[12px]  '>
                    <div>
                    <img src={MaoLampadaImg} alt="" className='xl:ml-56 ml-7'/>
                    <p className='xl:h-44 xl:w-56 w-32'><i>A luva destaca-se pela tecnologia inovadora do Arduino, foco na reabilitação, acessibilidade financeira e facilidade de uso, garantindo eficácia e inclusão para usuários de diferentes perfis.</i></p>
                     </div>

                    <div className='ml-3'>
                    <img src={CirculoImg} alt="" className='xl:ml-56 ' />
                    <p className='xl:h-44 xl:w-56 w-32'><i>Nosso objetivo é melhorar a qualidade de vida de pessoas com dificuldades motoras, promovendo sua independência e autoestima através de uma ferramenta eficaz para exercícios fisioterapêuticos.</i></p>
                     </div>
            </div>

            <div className='flex flex-col items-center mt-10 mb-10'>
                <img src={MaoRoboticaImg} alt="" className='mb-4' />
                <p className='text-white text-[12px] text-center w-44'>
                    <i>A Luva Robótica Terapêutica é um dispositivo inovador que utiliza tecnologia Arduino Uno para ajudar pacientes com dificuldades motoras a realizarem exercícios fisioterapêuticos, abrindo e fechando a mão do usuário para facilitar a recuperação.</i>
                </p>
            </div>

    </section>
  )
}
