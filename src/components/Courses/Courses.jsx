import "./courses.css"
import noteImg from '../../assets/image/1.png'
import note2Img from '../../assets/image/2.png'
import musicImg from '../../assets/image/3.png'
import smartPhoneImg from '../../assets/image/4.png'
import note3Img from '../../assets/image/5.png'
import noteMessage from '../../assets/image/6.png'
import tabletImg from '../../assets/image/7.png'
import lousaImg  from '../../assets/image/8.png'

function Courses() {
    return (
        <div className="couses">
            <div className="title">
       <h1>Ouse Ir Além</h1> 
<h4>Conheça nossos cursos e formações e começa a estudar hoje mesmo</h4>
                </div>
                <div className="itens">
                    <div className="course">
                    <img src={musicImg} alt="Música" />
                        <h3>Musica</h3>
                        <p>Realize seu sonho de aprender a tocar um instrumento musical, cantar com técnica vocal e até mesmo reger um coro.</p>
                        <a href="https://wa.me/5522999942800?text=Olá. Gostaria de saber mais detalhes sobre os cursos de Música">Entre em contato</a>
                      </div>
                    <div className="course">
                        <img src={lousaImg} alt="Mercado de trabalho" />
                        <h3>Mercado de trabalho</h3>
                        <p>Cursos profissionalizantes. Formato tradicional com formação de turmas, teoria e prática com professor e estágio supervisionado. </p>
                        <a href="https://wa.me/5522999942800?text=Olá. Gostaria de saber mais detalhes sobre os cursos de Mercado de trabalho">Entre em contato</a>
                        </div>
                    <div className="course">
                    <img src={tabletImg} alt="" />
                        <h3>Ensino Médio - EJA EAD</h3>
                        <p>Cursos profissionalizantes. Formato tradicional com formação de turmas, teoria e prática com professor e estágio supervisionado. </p>
                        <a href="https://wa.me/5522999942800?text=Olá. Gostaria de saber mais detalhes sobre Ensino Médio - EJA EAD">Entre em contato</a>
                        </div>
                    <div className="course">
                    <img src={noteMessage} alt="" />
                        <h3>Técnicos EAD</h3>
                        <p>Acelere sua entrada no mercado de trabalho, prepare-se para lidar com uma sociedade desenvolvida tecnologicamente</p>
                        <a href="https://wa.me/5522999942800?text=Olá. Gostaria de saber mais detalhes sobre Técnicos EAD">Entre em contato</a>
                        </div>
                    </div>
                <div className="itens">
                    <div className="course">
                        <img src={note3Img} alt="" />
                        <h3>Graduação EAD</h3>
                        <p>Aprofunde seus conhecimentos, mantenha-se atualizado, adquira novas competências. Conclusão a partir de 4 meses.</p>
                          <a href="https://wa.me/5522999942800?text=Olá. Gostaria de saber mais detalhes sobre Graduação EAD">Entre em contato</a>
                        </div>
                    <div className="course">
                    <img src={note2Img} alt="" />
                        <h3>Pós Graduação EAD</h3>
                        <p>Aprofunde seus conhecimentos, mantenha-se atualizado, adquira novas competências. Conclusão a partir de 4 meses.</p>
                          <a href="https://wa.me/5522999942800?text=Olá. Gostaria de saber mais detalhes sobre Pós Graduação EAD">Entre em contato</a>
                        </div>
                    <div className="course">
                    <img src={noteImg} alt="" />
                        <h3>2º Curso Superior EAD</h3>
                        <p>Invista em seu futuro profissional e tenha mais de uma graduação em seu currículo. Conclusão a partir de 6 meses.</p>
                          <a href="https://wa.me/5522999942800?text=Olá. Gostaria de saber mais detalhes sobre 2º Curso Superior EAD">Entre em contato</a>
                        </div>
                    <div className="course">
                    <img src={smartPhoneImg} alt="" />
                        <h3>Acesse Nossa Loja Virtual</h3>
                        <p>Conheça mais cursos e formações</p>
                          <a href="https://wa.me/5522999942800?text=Olá. Gostaria de saber mais detalhes sobre os cursos de músida">Entre em contato</a>
                        </div>
                    </div>
            </div>
    )
}

export {Courses}