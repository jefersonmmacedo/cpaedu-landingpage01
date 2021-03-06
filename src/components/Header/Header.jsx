import './header.css';
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
                    <h4>1º - 21/03/2022 à 19h<br /> <a href="https://www.youtube.com/watch?v=0eSz0Ok1iEU&ab_channel=CPAEduca%C3%A7%C3%A3o" target="_blank" without rel="noreferrer">Ver último sorteio</a> </h4>
                    <h4>2º - 28/03/2022 à 19h <br /> <a href="https://www.youtube.com/channel/UCqTlej5EZmnmet98RQwYlIw" target="_blank" without rel="noreferrer">Ao vivo no Youtube</a> </h4>
                    <h4>3º - 04/04/2022 à 19h <br /> <a href="https://www.youtube.com/channel/UCqTlej5EZmnmet98RQwYlIw" target="_blank" without rel="noreferrer">Ao vivo no Youtube</a> </h4>
                    <h4>4º - 11/04/2022 à 19h <br /> <a href="https://www.youtube.com/channel/UCqTlej5EZmnmet98RQwYlIw" target="_blank" without rel="noreferrer">Ao vivo no Youtube</a> </h4>

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