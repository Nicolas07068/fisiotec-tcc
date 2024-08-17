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
      <Header />
      <div className='font-bold ml-7 mt-10 mb-10 text-2xl xl:flex  xl:items-center xl:justify-center'>
        <h1 className='text-white'>O QUE ESTÁ <span className="text-gradient bg-gradient-to-r from-verdinho via-azulzinho to-roxinho bg-clip-text text-transparent font-bold xl:mr-2">SENDO</span></h1>
        <h1 className="text-gradient bg-gradient-to-r from-verdinho via-azulzinho to-roxinho bg-clip-text text-transparent font-bold">USADO?</h1>
      </div>

      <div className='grid grid-cols-2 gap-5 xl:grid-cols-3 justify-items-center mt-10 ml-5 mr-5 text-sm text-center xl:text-lg'>
        <div>
          <img src={PonteH} alt="Ponte H" className='xl:h-32'/>
          <p className='bg-gradient-to-l from-verdinho via-azulzinho to-roxinho text rounded-b-md p-1 text-white'>Ponte H</p>
        </div>

        <div>
          <img src={TelaLCD} alt="Tela LCD" className='xl:h-32'/>
          <p className='bg-gradient-to-l from-verdinho via-azulzinho to-roxinho text rounded-b-md p-1 text-white'>Tela LCD</p>
        </div>

        <div>
          <img src={Arduino} alt="Arduino" className='xl:h-32' />
          <p className='bg-gradient-to-l from-verdinho via-azulzinho to-roxinho text rounded-b-md p-1 text-white'>Arduino</p>
        </div>

        <div>
          <img src={MotorDePassos} alt="Motor de Passos"className='xl:h-32' />
          <p className='bg-gradient-to-l from-verdinho via-azulzinho to-roxinho text rounded-b-md p-1 text-white'>Motor de passos</p>
        </div>

        <div>
          <img src={Leds} alt="Conjunto de leds e fios" className='xl:h-32'/>
          <p className='bg-gradient-to-l from-verdinho via-azulzinho to-roxinho text rounded-b-md p-1 text-white'>Leds, fios e bluetooth</p>
        </div>

        <div>
          <img src={Protoboard} alt="Protoboard" className='xl:h-32' />
          <p className='bg-gradient-to-l from-verdinho via-azulzinho to-roxinho text rounded-b-md p-1 text-white'>Protoboard</p>
        </div>
      </div>
    </section>
  )
}
