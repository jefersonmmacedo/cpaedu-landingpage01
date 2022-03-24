import './aniversary.css';
import logo from '../../assets/image/logo-bc.png';
import AniversaryImage from '../../assets/image/aniversary.png';
import ballon from '../../assets/image/ballon.png';

function Aniversary() {
    return (
        <div className="aniversary">
            <div className="content">
                <img src={logo} alt="Logo" />
                <h2>Centro de Educação Profissional Amaivos</h2>
                <br />
                <div className="text">
                    <div className="textImage">
                <img src={ballon} alt="Logo" />
                    <h1>Estamos em festa!</h1>
                <img src={ballon} alt="Logo" />
                    </div>
                    <div className="miniText">
                    <h2><i>Mas quem ganha o presente é você</i></h2>
                    </div>
                </div>
                    <br />
                    <div className="happy">
                <img src={AniversaryImage} alt="10 Anos" />
                    </div>

                </div>
        </div>
    )
}

export {Aniversary}