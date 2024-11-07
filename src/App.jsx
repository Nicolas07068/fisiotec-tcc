import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from './components/Home.jsx'
import Objetivo from './pages/Objetivos.jsx'
import Baseamento from './pages/Baseamento.jsx'
import Produto from './pages/Produto.jsx'
import Componentes from './pages/Componentes.jsx'
import ComoUsar from './pages/ComoUsar.jsx'
import Desenvolvedores from './pages/Desenvolvedores.jsx'
import ReferenciasBibliograficas from './pages/ReferenciasBibliograficas.jsx'
import Game from './pages/Jogo.jsx'
import Projeto from './pages/Projeto.jsx'

function App() {
  return(
      <BrowserRouter>
              <Routes>
                  <Route path="/" element={<Home/>} />
                  <Route path="/objetivo" element={<Objetivo/>} />
                  <Route path="/baseamento" element={<Baseamento/>} />
                  <Route path="/produto" element={<Produto/>} />
                  <Route path="/componentes" element={<Componentes/>} />
                  <Route path="/comoUsar" element={<ComoUsar/>} />
                  <Route path="/desenvolvedores" element={<Desenvolvedores/>} />
                  <Route path="/referenciasBibliograficas" element={<ReferenciasBibliograficas/>} />
                  <Route path="/nossoJogo" element={<Game/>} />
                  <Route path="/nossoProjeto" element={<Projeto/>} />
              </Routes>
      </BrowserRouter>
   );
}
export default App;
