import ServoMotor from '../assets/servomotor.png'
import TelaLCD from '../assets/telaLCD.svg'
import Arduino from '../assets/arduinonano.png'
import Bateria from '../assets/bateria.png'
import Modulo from '../assets/modulobluetooth.png'
import Protoboard from '../assets/proto.png'
import Header from './Header'

export default function Componentes() {
  return (
    <section className='bg-bg-telas1 xl:h-svh'> 
      <Header /> 
      <div className='xl:max-w-7xl xl:m-auto '>
        <div className='font-bold ml-7 mt-10 mb-10 text-2xl xl:flex  xl:items-center xl:justify-center'>
          <h1 className='text-white'>O QUE ESTÁ <span className="text-gradient bg-gradient-to-r from-verdinho via-azulzinho to-roxinho bg-clip-text text-transparent font-bold xl:mr-2">SENDO</span></h1>
          <h1 className="text-gradient bg-gradient-to-r from-verdinho via-azulzinho to-roxinho bg-clip-text text-transparent font-bold">USADO?</h1>
        </div>

        <div className='grid grid-cols-2 gap-5 xl:grid-cols-3 justify-items-center mt-10 ml-5 mr-5 text-sm text-center xl:text-lg xl:ml-0 '>
          <div className='group xl:mt-4'>
            <img src={ServoMotor} alt="Ponte H" />
            <p className='bg-bg-dev text rounded-b-md p-1 text-white group-hover:hidden'>Servo Motor</p>
            <p className='group-hover:p-1 group-hover:bg-bg-dev text-white rounded-b-md opacity-0 group-hover:opacity-100 xl:text-xs text-[8px]' ><span className='xl:text-lg text-sm'>Servo Motor </span><br /> <span className='xl:text-[13px] text-[11px]  italic'>Permite o controle de motores de passos</span><br/>Valor aproximado: R$ 50,00</p>
          </div>

          <div className='group xl:mt-4'>
            <img src={TelaLCD} alt="Tela LCD" className=''/>
            <p className='bg-bg-dev text rounded-b-md p-1 text-white group-hover:hidden'>Tela LCD</p>
            <p className='group-hover:p-1 group-hover:bg-bg-dev text-white rounded-b-md opacity-0 group-hover:opacity-100 xl:text-xs text-[8px]' ><span className='xl:text-lg text-sm'>Tela LCD </span><br/> <span className='xl:text-[13px] text-[11px]  italic'>Vizualizar o estado do tratamento</span><br/>Valor aproximado: R$ 25,00 </p>
            
          </div>

          <div className='group xl:mt-4'>
            <img src={Arduino} alt="Arduino" className='rounded-t-lg' />
            <p className='bg-bg-dev text rounded-b-md p-1 text-white group-hover:hidden'>Arduino Nano</p>
            <p className='group-hover:p-1 group-hover:bg-bg-dev text-white rounded-b-md opacity-0 group-hover:opacity-100 xl:text-xs text-[8px]' ><span className='xl:text-lg text-sm'>Arduino Nano</span> <br /> <span className='xl:text-[13px] text-[11px]  italic'>Controlador principal do sistema</span><br/>Valor aproximado: R$ 40,00</p>
          </div>

          <div className='group xl:mt-4'>
            <img src={Bateria} alt="Conjunto de leds e fios" className=''/>
            <p className='bg-bg-dev text rounded-b-md p-1 text-white group-hover:hidden'>Bateria 9V</p>
            <p className='group-hover:p-1 group-hover:bg-bg-dev text-white rounded-b-md opacity-0 group-hover:opacity-100 xl:text-xs text-[8px]' ><span className='xl:text-lg text-sm'>Bateria 9V</span> <br /> <span className='xl:text-[13px] text-[11px]  italic'>Usada para alimentar o dispositivo</span><br/>Valor aproximado: R$ 40,00</p>
          </div>

          <div className='group xl:mt-4'>
            <img src={Modulo} alt="Motor de Passos"className='' />
            <p className='bg-bg-dev text rounded-b-md p-1 text-white group-hover:hidden'>Modulo Bluetooth</p>
            <p className='group-hover:p-1 group-hover:bg-bg-dev text-white rounded-b-md opacity-0 group-hover:opacity-100 xl:text-xs text-[8px]' ><span className='xl:text-lg text-sm'>Modulo Bluetooth</span> <br /> <span className='xl:text-[13px] text-[11px]  italic'>Usado para conectar o APP</span><br/>Valor aproximado: R$ 40,00</p>
          </div>

          

          <div className='group xl:mt-4'>
            <img src={Protoboard} alt="Protoboard" className='' />
            <p className='bg-bg-dev  text rounded-b-md p-1 text-white group-hover:hidden'>Protoboard</p>
            <p className='group-hover:p-1 group-hover:bg-bg-dev text-white rounded-b-md opacity-0 group-hover:opacity-100 xl:text-xs text-[8px]' ><span className='xl:text-lg text-sm'>Protoboard</span> <br /> <span className='xl:text-[13px] text-[11px]  italic'>Usado para realizar conexoes</span><br/>Valor aproximado: R$ 15,00</p>
          </div>
        </div>
      </div>
    </section>
  )
}
