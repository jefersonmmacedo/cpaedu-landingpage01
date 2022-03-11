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
                    <a className='btn-whatsapp' href="#" target="_blank">Fale conosco</a>
                    <a className='btn-loja' href="https://ead.cpaedu.com.br/loja_virtual/index.php" target="_blank">Loja virtual</a>
                </div>
                </div>
            <div className="image">
                <img src={Aluno} alt="Aluno" />
                </div>
        </div>
    )
}

export {Header}