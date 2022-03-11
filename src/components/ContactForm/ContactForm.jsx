import './contactForm.css'
import logoImg from '../../assets/image/logo-bc.png'
import {FiFacebook, FiInstagram} from 'react-icons/fi'

function ContactForm() {
    return (
        <div className="contact">
            <img src={logoImg} alt="" />
            <div className="infos">
                <p><b>Endereço:</b> Avenida Saquarema, nº 5070 - Bacaxá <br /> (Em frente ao Banco do Brasil)</p>
                <p><b>E-mail:</b> contato@cpaedu.com.br</p>
                <p><b>Telefone:</b> (22) 2161-0101</p>
                <p><b>Whatsapp:</b> (22) 99994-2800</p>
            </div>
            <div className="icons">
                <p><FiFacebook /></p>
                <p><FiInstagram /></p>
            </div>
        </div>
    )
}

export {ContactForm}