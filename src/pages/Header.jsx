import { useState } from 'react';
import { List } from "@phosphor-icons/react";
import Logo from '../assets/logoHeader.svg';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className=" w-full flex flex-col md:flex-row items-center justify-between px-4 py-2 bg-bg-roxo">
      <div className="flex items-center w-full md:w-auto ">
        <button onClick={toggleMenu} className="block md:hidden text-white duration-700">
          <List size={32} />
        </button>
        <img src={Logo} alt="Logo" className="ml-4 lg:ml-8" />
        <h1 className="font-bold text-xl text-white ml-4">
          FISIO 
          <strong className="text-gradient bg-gradient-to-r from-verdinho via-azulzinho to-roxinho bg-clip-text text-transparent text-xl	">
            TEC
          </strong>
        </h1>
      </div>
      <nav className={`w-full md:w-auto ${isMenuOpen ? 'block' : 'hidden'} md:flex md:space-x-2.5 mt-4 md:mt-2`}>
        <a href="/" className="block text-white py-2 px-4 italic ">Home</a>
        <a href="/objetivo" className="block text-white py-2 px-3 italic" >O que é?</a>
        <a href="/Baseamento" className="block text-white py-2 px-3 italic">Ciência</a>
        <a href="/Produto" className="block text-white py-2 px-3 italic">Produto</a>
        <a href="/Componentes" className="block text-white py-2 px-3 italic">Componentes</a>
        <a href="/ComoUsar" className="block text-white py-2 px-3 italic">Uso</a>
        <a href="/Desenvolvedores" className="block text-white py-2 px-3 italic">Desenvolvedores</a>
        <a href="/ReferenciasBibliograficas" className="block text-white py-2 px-3 italic">Referências Bibliográficas</a>
        <a href="/nossoJogo" className="block text-white py-2 px-3 italic"> Game</a>
      </nav>
    </header>
  );
}