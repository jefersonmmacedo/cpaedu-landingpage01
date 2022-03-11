import { ContactForm } from '../ContactForm/ContactForm';
import { ContactWhatsapp } from '../ContactWhatsapp/ContactWhatsapp';
import './footer.css';

function Footer() {
    const date = new Date().getFullYear()
    return (
        <div className="footer">
            <div className="components">
                <ContactForm />
                <ContactWhatsapp />
                </div>
                <div className="copy">
                    <div className="companyName">
                   <p> &#169; CPA Educação - Todos os direitos reservados {date}</p>
                        </div>
                        <div className="devs">
                            <p>Feito por: Coding.It & Like Marketing Digital</p>
                        </div>
                </div>
        </div>
    )
}

export {Footer}