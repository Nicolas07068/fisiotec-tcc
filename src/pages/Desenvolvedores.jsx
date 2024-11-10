import FotoMariana from '../assets/fotoMari.svg';
import FotoGuilherme from '../assets/fotoGuilherme.svg';
import FotoNicolas from '../assets/fotoNicolas.svg';
import LogoInstagram from '../assets/logoInstagram.svg';
import LogoLinkedin from '../assets/linkedinLogo.svg';
import LogoFacebook from '../assets/logoFacebook.svg';
import Header from './Header';

export default function Desenvolvedores() {
  return (
    <section className=' bg-bg-telas1 xl:h-svh'> 
      <Header />
        <div className='xl:max-w-7xl xl:m-auto'>
        <h2 className='text-3xl font-bold text-center mb-12 text-gradient bg-gradient-to-r from-verdinho via-roxinho to-azulzinho bg-clip-text text-transparent mt-10'>DESENVOLVEDORES</h2>

        <div className='xl:flex xl:flex-wrap xl:justify-center xl:gap-8  grid grid-cols-2  gap-6 mx-4 xl:mx-0 '>
          <div className='bg-bg-dev opacity-80 p-6 xl:h-96 xl:w-60 rounded text-center text-white w-48 h-90 '> 
            <img src={FotoGuilherme} alt="Foto de Guilherme Alves" className='w-36 h-36 mx-auto mb-4 rounded-full' />
            <h3 className='text-lg font-semibold mb-2'>Guilherme Alves</h3>
            <p className='text-xs mb-2 text-justify'>
              <i>Tenho 17 anos e sou apaixonado pelo novo e pela tecnologia, atualmente cursando o 3º ano do Ensino Médio com Técnico em Informática. Me dedico fielmente na parte do desenvolvimento web e robótica do projeto.</i>
            </p>
            <div className='flex justify-center gap-4'>
              <a href="https://www.instagram.com/gui_alves2712?igsh=YnJ4ZnBoaGN2Mmln" target="_blank"><img src={LogoInstagram} alt="Instagram" className='w-6 h-6' /></a>
              <a href="https://www.linkedin.com/in/guilherme-alves-lopes-0061952b1?
" target="_blank"><img src={LogoLinkedin} alt="LinkedIn" className='w-6 h-6'  /></a>
            </div>
          </div>

          <div className='bg-bg-dev bg-opacity-50 opacity-80 p-6 xl:h-96 xl:w-60  rounded text-center text-white w-48 h-90 mr-2'>
            <img src={FotoMariana} alt="Foto de Mariana Silva" className='w-36 h-36 mx-auto mb-4 rounded-full' />
            <h3 className='text-lg font-semibold mb-2'>Mariana Silva</h3>
            <p className='text-xs mb-4 text-justify'>
              <i>Com apenas 17 anos e no último ano do ensino médio técnico, tenho me dedicado ao desenvolvimento web. Espero contribuir com soluções criativas para desafios digitais futuros.</i>
            </p>
            <div className='flex justify-center gap-4 '>
              <a href="https://www.instagram.com/marir_silva?igsh=MXVqZnpnMGlpZmc4eA==" target="_blank" ><img src={LogoInstagram} alt="Instagram" className='w-6 h-6'/></a>
              <a href="https://www.linkedin.com/in/mariana-silva-oliveira-4186b92b3/
" target="_blank"><img src={LogoLinkedin} alt="LinkedIn" className='w-6 h-6' /></a>
            </div>
          </div>

          {/* Desenvolvedor 3 */}
          <div className='bg-bg-dev ml-[99px] w-48 h-96 opacity-80 p-6 xl:h-96 xl:w-60 xl:ml-0 rounded text-center mb-10 text-white lg:-mb-0'>
            <img src={FotoNicolas} alt="Foto de Nicolas Cardoso" className='w-36 h-36 mx-auto mb-4 rounded-full' />
            <h3 className='text-lg font-semibold mb-2'>Nicolas Cardoso</h3>
            <p className='text-xs mb-4 text-justify'>
            <i>Tenho 17, concluindo o ensino médio com técnico em informática. Espero alcançar as expectativas com esse projeto e ajudar no futuro a sociedade.</i>
            </p>
            <div className='flex justify-center gap-4 '>
              <a href="https://www.instagram.com/n1colas_zs/profilecard/?igsh=bjRwZ3liYzcxcnNj" target="_blank"><img src={LogoInstagram} alt="Instagram" className='w-6 h-6' /></a>
              <a href="https://br.linkedin.com/in/nicolas-cardoso-aba4102ba
" target="_blank"><img src={LogoLinkedin} alt="LinkedIn" className='w-6 h-6' /></a>
            </div>
          </div>
        </div>
        </div>
    </section>
  );
}
