import Rev1 from '../assets/rev-1.svg'
import Rev2 from '../assets/rev-2.svg'
import Rev3 from '../assets/rev-3.svg'
import Header from './Header'

export default function Revolucao() {
  return (
    <div>
      <Header></Header>
        <img src={Rev1}alt="Mao robotica" />
        <img src={Rev2} alt="Robo feito de metal" />
        <img src={Rev3} alt="Placa de arduino" />

        <h2>REVOLUÇÃO NA REABILITAÇÃO MOTORA!</h2>
        <p>A Luva Robótica Terapêutica é um dispositivo inovador que utiliza tecnologia Arduino Uno para ajudar pacientes com dificuldades motoras a realizarem exercícios fisioterapêuticos, abrindo e fechando a mão do usuário para facilitar a recuperação.</p>

        <button>Veja Mais</button>
    </div>
  )
}
