import './header.css'
import logo from '../../assets/image/logo-bc.png'
import Aluno from '../../assets/image/Aluno.png'

function Header() {
    return (
        <div className="header">
            <div className="content">
                <img src={logo} alt="Logo" />
                <h2>Formando Profissionais desde 2012</h2>
                    <h4>Com mais de 3.000 alunos formados</h4>
                <div className="buttons">
                    <button className='btn-whatsapp'>Fale conosco</button>
                    <button className='btn-loja'>Loja virtual</button>
                </div>
                </div>
            <div className="image">
                <img src={Aluno} alt="Aluno" />
                </div>
        </div>
    )
}

export {Header}