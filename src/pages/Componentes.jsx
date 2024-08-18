import PonteH from '../assets/ponteH.svg'
import TelaLCD from '../assets/telaLCD.svg'
import Arduino from '../assets/arduino(1).svg'
import MotorDePassos from '../assets/motordepassos.svg'
import Leds from '../assets/leds.svg'
import Protoboard from '../assets/protoboard(1).svg'
import Header from './Header'

export default function Componentes() {
  return (
    <section>
      <Header />
      <div className='font-bold ml-7 mt-10 mb-10 text-2xl xl:flex  xl:items-center xl:justify-center'>
        <h1 className='text-white'>O QUE ESTÁ <span className="text-gradient bg-gradient-to-r from-verdinho via-azulzinho to-roxinho bg-clip-text text-transparent font-bold xl:mr-2">SENDO</span></h1>
        <h1 className="text-gradient bg-gradient-to-r from-verdinho via-azulzinho to-roxinho bg-clip-text text-transparent font-bold">USADO?</h1>
      </div>

      <div className='grid grid-cols-2 gap-5 xl:grid-cols-3 justify-items-center mt-10 ml-5 mr-5 text-sm text-center xl:text-lg xl:ml-0 xl:mb-2'>
        <div className='xl:h-48 xl:w-64'>
          <img src={PonteH} alt="Ponte H" />
          <p className='bg-gradient-to-l from-verdinho via-azulzinho to-roxinho text rounded-b-md p-1 text-white'>Ponte H</p>
        </div>

        <div className='xl:h-30 xl:w-64 xl:mb-4'>
          <img src={TelaLCD} alt="Tela LCD" className=''/>
          <p className='bg-gradient-to-l from-verdinho via-azulzinho to-roxinho text rounded-b-md p-1 text-white'>Tela LCD</p>
        </div>

        <div className='xl:h-32 xl:w-64'>
          <img src={Arduino} alt="Arduino" className='' />
          <p className='bg-gradient-to-l from-verdinho via-azulzinho to-roxinho text rounded-b-md p-1 text-white'>Arduino</p>
        </div>

        <div className='xl:h-32 xl:w-64'>
          <img src={MotorDePassos} alt="Motor de Passos"className='' />
          <p className='bg-gradient-to-l from-verdinho via-azulzinho to-roxinho text rounded-b-md p-1 text-white'>Motor de passos</p>
        </div>

        <div className='xl:h-32 xl:w-64'>
          <img src={Leds} alt="Conjunto de leds e fios" className=''/>
          <p className='bg-gradient-to-l from-verdinho via-azulzinho to-roxinho text rounded-b-md p-1 text-white'>Leds, fios e bluetooth</p>
        </div>

        <div className='xl:h-32 xl:w-64'>
          <img src={Protoboard} alt="Protoboard" className='' />
          <p className='bg-gradient-to-l from-verdinho via-azulzinho to-roxinho text rounded-b-md p-1 text-white'>Protoboard</p>
        </div>
      </div>
    </section>
  )
}
