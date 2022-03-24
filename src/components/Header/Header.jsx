import './header.css';
import logo from '../../assets/image/logo-bc.png';
import Aluno from '../../assets/image/Aluno.png';
import { Aniversary } from '../Aniversary/Aniversary';

function Header() {
    return (
        <div className="header">
            <Aniversary />
            <div className="blockHeader">
            <div className="content">
                <h1>Inscreva-se e ganhe prêmios</h1>
                    <h2><i>Sorteio de 100 cursos gratuitos e <br /> bolsas com até 100% de desconto</i></h2>
                    <h4>De 21/03/2022 à 11/04/2022</h4>

                    <div className="dates">
                    <h3>Data dos sorteios</h3>
                    <h4>1º - 21/03/2022 à 19h | Ao vivo</h4>
                    <h4>2º - 28/03/2022 à 19h | Ao vivo</h4>
                    <h4>3º - 04/04/2022 à 19h | Ao vivo</h4>
                    <h4>4º - 11/04/2022 à 19h | Ao vivo</h4>

                    </div>
               
                </div>
            <div className="image">
                <img src={Aluno} alt="Aluno" />
                </div>
                </div>
        </div>
    )
}

export {Header}