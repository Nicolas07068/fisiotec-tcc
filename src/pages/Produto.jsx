import IdosaImg from '../assets/idosa-removebg-preview 2.svg'
import CerebroImg from '../assets/cerebro-removebg-preview (1) 2.svg'
import MaoLampadaImg from '../assets/maolampada-removebg-preview 2.svg'
import CirculoImg from '../assets/alv-removebg-preview 2.svg'
import MaoRoboticaImg from '../assets/luva-removebg-preview 2.svg'
import Blue from '../assets/bluetooth.png'
import Header from './Header'


export default function Produto() {
  return (
    <section className="bg-bg-telas1 xl:h-svh xl:bg-[url('./assets/EllipseProduto.png')] bg-[length:59%_100%] bg-no-repeat bg-left">
        <Header></Header>
       <div className="xl:max-w-7xl xl:m-auto text-justify ">
            <div className='text-3xl font-semibold ml-7 xl:text-3xl xl:flex xl:items-center xl:justify-center '>
                <h2 className=' text-whit mt-10 text-white'>ENTENDA O </h2>
                <h2 className=' text-gradient bg-gradient-to-r  from-verdinho  via-azulzinho to-roxinho bg-clip-text text-transparent mb-10 xl:mb-0 xl:mt-10 xl:ml-2 text-4xl'>PRODUTO</h2>
            </div>

                <p className='m-6 text-white xl:text-sm  xl:h-16 xl:flex xl:items-center xl:justify-center text-justify '><i>A Luva Robótica Terapêutica visa melhorar a qualidade de vida e promover a autonomia de pessoas com dificuldades motoras, facilitando a reabilitação em casa.</i></p>
                
                <div className='flex items-center justify-center mt-10 text-white text-[12px] gap-[40px] xl:flex-col xl:-ml-[650px]'>
                         <div className='items-center mb-10 xl:mb-0'>
                            <img src={MaoRoboticaImg} alt="" className='mb-6 ml-12 xl:ml-16 xl:  ' />
                            <p className='text-white text-[12px] text-center w-36 text-justify xl:w-48 '>
                                <i>A Luva Robótica Terapêutica é um dispositivo inovador que utiliza tecnologia Arduino Uno para ajudar pacientes com dificuldades motoras a realizarem exercícios fisioterapêuticos, abrindo e fechando a mão do usuário para facilitar a recuperação.</i>
                            </p>
                        </div>
                    
                        <div className='mb-[80px] xl:mb-0'>
                            <img src={MaoLampadaImg} alt="" className='xl:ml-20 ml-9 mb-10 xl:mb-6 '/>
                            <p className=' xl:w-48 w-32 text-justify text-[12px]'><i>A luva destaca-se pela tecnologia inovadora do Arduino, foco na reabilitação, acessibilidade financeira e facilidade de uso, garantindo eficácia e inclusão para usuários de diferentes perfis.</i></p>
                        </div>                    
                    </div>

                    <div className=' flex items-center justify-center mt-10 text-white text-[12px] gap-7 xl:flex-col xl:-mt-[498px]'>
                        <div className='ml-3'>
                            <img src={Blue} alt="celular" className='xl:ml-20 ml-10 h-16 mb-2 xl:mb-6' />
                            <p className='xl:h-44 xl:w-48 w-32 text-justify'><i>A conectividade Bluetooth possibilita o controle remoto das funções através de um aplicativo móvel, ampliando a conveniência. Com uma interface intuitiva, a luva oferece navegação simples por meio de uma tela LCD e dois botões</i></p>
                        </div>
                        <div className='ml-3 mb-[50px] xl:mb-0'>
                            <img src={CerebroImg} alt="" className='xl:ml-20 ml-10 h-16 mb-2 xl:mb-5' />
                            <p className='xl:h-44 xl:w-56 w-32 text-justify '><i>Destinada a pacientes com paralisia cerebral, idosos com dificuldades motoras e pessoas com lesões nas mãos, a luva atende a uma ampla gama de indivíduos que necessitam de reabilitação.</i></p>
                        </div>
                       
                    </div>

                    <div className=' flex items-center justify-center  mt-10 text-white gap-7 text-[12px] xl:flex-col xl:-mr-[650px] xl:-mt-[552px]'>
                        <div>
                            <img src={IdosaImg} alt="" className='xl:ml-20 xl:mb-6 ml-7 mb-2'/>
                            <p className='xl:h-44 xl:w-56 w-32 xl:text-justify'><i>O produto visa aumentar a autonomia dos pacientes, melhorar sua qualidade de vida e promover sua inclusão social, permitindo a realização de exercícios em casa.</i></p>
                        </div>
                        <div className='ml-3 xl:ml-0 xl:-mt-[20px]'>
                            <img src={CirculoImg} alt="" className='xl:ml-20 xl:mb-6 ml-8 mb-4 ' />
                            <p className='xl:h-44 xl:w-56 w-32 text-justify'><i>Nosso objetivo é melhorar a qualidade de vida de pessoas com dificuldades motoras, promovendo sua independência e autoestima através de uma ferramenta eficaz para exercícios fisioterapêuticos.</i></p>
                        </div>
                    </div>

       </div>
    </section>
  )
}
