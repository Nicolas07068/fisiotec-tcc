import FotoMariana from '../assets/fotoMari.svg';
import FotoGuilherme from '../assets/fotoGuilherme.svg';
import FotoNicolas from '../assets/fotoNicolas.svg';
import LogoInstagram from '../assets/logoInstagram.svg';
import LogoLinkedin from '../assets/linkedinLogo.svg';
import LogoFacebook from '../assets/logoFacebook.svg';
import Header from './Header';

export default function Desenvolvedores() {
  return (
    <section className='xl:mb-10'>
      <Header />

      <h2 className='text-3xl font-bold text-center mb-12 text-gradient bg-gradient-to-l  from-verdinho  via-roxinho to-azulzinho bg-clip-text text-transparent mt-10'>DESENVOLVEDORES</h2>

      <div className='flex flex-wrap justify-center gap-8'>
        <div className='bg-bg-dev opacity-80 p-6 h-90 w-60 rounded text-center text-white'>
          <img src={FotoGuilherme} alt="Foto de Guilherme Alves" className='w-24 h-24 mx-auto mb-4 rounded-full' />
          <h3 className='text-xl font-semibold mb-2'>Guilherme Alves</h3>
          <p className='text-sm mb-4'>
            <i>Tenho 17 anos e sou apaixonado pelo novo e pela tecnologia, atualmente cursando o 3º ano do Ensino Médio com Técnico em Informática. Me dedico fielmente na parte do desenvolvimento web e robótica do projeto.</i>
          </p>
          <div className='flex justify-center gap-4'>
            <a href="#"><img src={LogoInstagram} alt="Instagram" className='w-6 h-6' /></a>
            <a href="#"><img src={LogoLinkedin} alt="LinkedIn" className='w-6 h-6' /></a>
            <a href="#"><img src={LogoFacebook} alt="Facebook" className='w-6 h-6' /></a>
          </div>
        </div>

        <div className='bg-bg-dev opacity-80 p-6 h-90 w-60 rounded text-center text-white'>
          <img src={FotoMariana} alt="Foto de Mariana Silva" className='w-24 h-24 mx-auto mb-4 rounded-full' />
          <h3 className='text-xl font-semibold mb-2'>Mariana Silva</h3>
          <p className='text-sm mb-4'>
            <i>Com apenas 17 anos e no último ano do ensino médio técnico, tenho me dedicado ao desenvolvimento web. Espero contribuir com soluções criativas para desafios digitais futuros.</i>
          </p>
          <div className='flex justify-center gap-4'>
            <a href="#"><img src={LogoInstagram} alt="Instagram" className='w-6 h-6' /></a>
            <a href="#"><img src={LogoLinkedin} alt="LinkedIn" className='w-6 h-6' /></a>
            <a href="#"><img src={LogoFacebook} alt="Facebook" className='w-6 h-6' /></a>
          </div>
        </div>

        {/* Desenvolvedor 3 */}
        <div className='bg-bg-dev opacity-80 p-6 h-90 w-60 rounded text-center mb-10 text-white'>
          <img src={FotoNicolas} alt="Foto de Nicolas Cardoso" className='w-24 h-24 mx-auto mb-4 rounded-full' />
          <h3 className='text-xl font-semibold mb-2'>Nicolas Cardoso</h3>
          <p className='text-sm mb-4'>
           <i>Tenho 17, concluindo o ensino médio com técnico em informática. Espero alcançar as expectativas com esse projeto e ajudar no futuro a sociedade.</i>
          </p>
          <div className='flex justify-center gap-4'>
            <a href="#"><img src={LogoInstagram} alt="Instagram" className='w-6 h-6' /></a>
            <a href="#"><img src={LogoLinkedin} alt="LinkedIn" className='w-6 h-6' /></a>
            <a href="#"><img src={LogoFacebook} alt="Facebook" className='w-6 h-6' /></a>
          </div>
        </div>
      </div>
    </section>
  );
}
