import PonteH from '../assets/ponteH.svg.svg'
import TelaLCD from '../assets/telaLCD.svg.svg'
import Arduino from '../assets/arduino.svg.svg'
import MotorDePassos from '../assets/motordePassos.svg.svg'
import Leds from '../assets/leds.svg.svg'
import Protoboard from '../assets/proboard.svg.svg'
import Header from './Header'

export default function Componentes() {
  return (
    <section>
        <Header></Header>
        <div className='font-bold ml-7 mt-10 mb-10 text-2xl'>
            <h1 className=' text-white'>O QUE ESTÁ <strong  className="text-gradient bg-gradient-to-l  from-verdinho  via-roxinho to-azulzinho bg-clip-text text-transparent">SENDO</strong></h1>
            <h1  className="text-gradient bg-gradient-to-l  from-verdinho  via-roxinho to-azulzinho bg-clip-text text-transparent">USADO?</h1>
        </div>
        <div className='flex items-center justify-center mt-10 ml-5 mr-5'>
            <div>
                
                <img src={PonteH} alt="Ponte H" />
                <p className='bg-gradient-to-l from-verdinho via-azulzinho to-roxinho text rounded-b-md p-1 text-white'>Ponte H</p>
            </div>

            <div className='ml-5'>
                <img src={TelaLCD} alt="Tela LCD"  />
                <p className='bg-gradient-to-l from-verdinho via-azulzinho to-roxinho text rounded-b-md p-1 text-white'>Tela LCD</p>
            </div>
        </div>



        <div className='flex items-center justify-center mt-10 ml-5 mr-5'>
            <div>
                <img src={Arduino} alt="Arduino" />
                <p className='bg-gradient-to-l from-verdinho via-azulzinho to-roxinho text rounded-b-md p-1 text-white'>Arduino</p>
            </div>

            <div className='ml-5'>
                <img src={MotorDePassos} alt="Motor de Passos" />
                <p className='bg-gradient-to-l from-verdinho via-azulzinho to-roxinho text rounded-b-md p-1 text-white'>Motor de passos</p>
            </div>

        </div>


        <div className='flex items-center justify-center mt-10 ml-5 mr-5 mb-10'>
            <div>
                    <img src={Leds} alt="Conjunto de leds e fios" />
                    <p className='bg-gradient-to-l from-verdinho via-azulzinho to-roxinho text rounded-b-md p-1 text-white'>Leds,fios e bluetooth</p>
                </div>
                
                <div className='ml-5'>
                    <img src={Protoboard} alt="Protoboard" />
                    <p className='bg-gradient-to-l from-verdinho via-azulzinho to-roxinho text rounded-b-md p-1 text-white'>Protoboard</p>
                </div>
        </div>
    </section>
  )
}
