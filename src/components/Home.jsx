import Header from '../pages/Header';
import FotoHeader from '../assets/fotoHome.svg';

export default function Home() {
  return (
  
    <main className="relative bg-gradient-to-t from-bg-telas via-bghome2 to-bghome1 min-h-screen overflow-x-hidden max-w-md xl:max-w-screen-2xl">
        <Header></Header>
      <div className="px-4">
        <div className="mt-10 xl:mt-28 flex flex-col xl:flex-row xl:items-center xl:ml-20">
          <div className="xl:w-1/2">
            <h1 className="text-2xl font-bold font-inter text-white lg:text-4xl ">
              DESCUBRA A LUVA <br/>ROBÓTICA
            </h1>
            <h1 className="text-2xl font-bold font-inter text-gradient bg-gradient-to-r  from-verdinho  via-roxinho to-azulzinho bg-clip-text text-transparent lg:text-4xl">
              TERAPÊUTICA
            </h1>
            <p className="text-xs mt-6 mb-5 w-full text-white text-justify xl:w-auto xl:text-xl">
              <i>
                Uma revolução acessível na reabilitação motora, devolvendo independência e qualidade de vida. Experimente tecnologia de ponta para realizar exercícios fisioterapêuticos no conforto de sua casa.
              </i>
            </p>
            <a href="/objetivo"><button className="mt-6 bg-gradient-to-l from-verdinho via-azulzinho to-roxinho text rounded-2xl p-1 text-white w-36">
              Veja mais
            </button></a>
          </div>
          <div className="flex justify-center mt-10 lg:mt-0 lg:w-2/5  ">
            <img src={FotoHeader} alt="Imagem de um senhor" className="w-full h-auto max-w-xs lg:max-w-full " />
          </div>
        </div>
      </div>
    </main>
  );
}
