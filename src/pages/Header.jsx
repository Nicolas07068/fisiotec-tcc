import { useState } from 'react';
import { List } from "@phosphor-icons/react";
import Logo from '../assets/logoHeader.svg';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-bg-header w-full flex flex-col md:flex-row items-center justify-between px-4 py-2 ">
      <div className="flex items-center w-full md:w-auto ">
        <button onClick={toggleMenu} className="block md:hidden text-white">
          <List size={32} />
        </button>
        <img src={Logo} alt="Logo" className="ml-4 lg:ml-2" />
        <h1 className="font-bold text-white ml-4">
          FISIO 
          <strong className="text-gradient bg-gradient-to-r from-verdinho via-azulzinho to-roxinho bg-clip-text text-transparent">
            TEC
          </strong>
        </h1>
      </div>
      <nav className={`w-full md:w-auto ${isMenuOpen ? 'block' : 'hidden'} md:flex md:space-x-2.5 mt-4 md:mt-2`}>
        <a href="/" className="block text-white py-2 px-4 ">Home</a>
        <a href="/objetivo" className="block text-white py-2 px-4">O que é?</a>
        <a href="/Baseamento" className="block text-white py-2 px-4">Ciência</a>
        <a href="/Produto" className="block text-white py-2 px-4">Produto</a>
        <a href="/Componentes" className="block text-white py-2 px-4">Componentes</a>
        <a href="/ComoUsar" className="block text-white py-2 px-4">Uso</a>
        <a href="/Desenvolvedores" className="block text-white py-2 px-4">Desenvolvedores</a>
        <a href="/ReferenciasBibliograficas" className="block text-white py-2 px-4">Referências Bibliográficas</a>
      </nav>
    </header>
  );
}
