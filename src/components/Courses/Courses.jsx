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
                        <div className="text">
                            <div className="image">
                    <img src={musicImg} alt="Música" />
                                </div>
                        <h3>Musica</h3>
                        <p>Realize seu sonho de aprender a tocar um instrumento musical, cantar com técnica vocal e até mesmo reger um coro.</p>
                            </div>
                        <a href="https://wa.me/5522999942800?text=Olá. Gostaria de saber mais detalhes sobre os cursos de Música" target="_blank">Entre em contato</a>
                      </div>
                    <div className="course">
                        <div className="text">
                            <div className="image">
                        <img src={lousaImg} alt="Mercado de trabalho" />
                                </div>
                        <h3>Mercado de trabalho</h3>
                        <p>Cursos profissionalizantes. Formato tradicional com formação de turmas, teoria e prática com professor e estágio supervisionado. </p>
                            </div>
                        <a href="https://wa.me/5522999942800?text=Olá. Gostaria de saber mais detalhes sobre os cursos de Mercado de trabalho" target="_blank">Entre em contato</a>
                        </div>
                    <div className="course">
                        <div className="text">
                            <div className="image">
                    <img src={tabletImg} alt="" />
                                </div>
                        <h3>Ensino Médio - EJA EAD</h3>
                        <p>Cursos profissionalizantes. Formato tradicional com formação de turmas, teoria e prática com professor e estágio supervisionado. </p>
                            </div>
                        <a href="https://wa.me/5522999942800?text=Olá. Gostaria de saber mais detalhes sobre Ensino Médio - EJA EAD" target="_blank">Entre em contato</a>
                        </div>
                    <div className="course">
                        <div className="text">
                            <div className="image">
                    <img src={noteMessage} alt="" />
                                </div>
                        <h3>Técnicos EAD</h3>
                        <p>Acelere sua entrada no mercado de trabalho, prepare-se para lidar com uma sociedade desenvolvida tecnologicamente</p>
                            </div>
                        <a href="https://wa.me/5522999942800?text=Olá. Gostaria de saber mais detalhes sobre Técnicos EAD" target="_blank">Entre em contato</a>
                        </div>
                    <div className="course">
                        <div className="text">
                            <div className="image">
                        <img src={note3Img} alt="" />
                                </div>
                        <h3>Graduação EAD</h3>
                        <p>Aprofunde seus conhecimentos, mantenha-se atualizado, adquira novas competências. Conclusão a partir de 4 meses.</p>
                            </div>
                          <a href="https://wa.me/5522999942800?text=Olá. Gostaria de saber mais detalhes sobre Graduação EAD" target="_blank">Entre em contato</a>
                        </div>
                    <div className="course">
                        <div className="text">
                            <div className="image">
                    <img src={note2Img} alt="" />
                                </div>
                        <h3>Pós Graduação EAD</h3>
                        <p>Aprofunde seus conhecimentos, mantenha-se atualizado, adquira novas competências. Conclusão a partir de 4 meses.</p>
                            </div>
                          <a href="https://wa.me/5522999942800?text=Olá. Gostaria de saber mais detalhes sobre Pós Graduação EAD" target="_blank">Entre em contato</a>
                        </div>
                    <div className="course">
                        <div className="text">
                            <div className="image">
                    <img src={noteImg} alt="" />
                                </div>
                        <h3>2º Curso Superior EAD</h3>
                        <p>Invista em seu futuro profissional e tenha mais de uma graduação em seu currículo. Conclusão a partir de 6 meses.</p>
                            </div>
                          <a href="https://wa.me/5522999942800?text=Olá. Gostaria de saber mais detalhes sobre 2º Curso Superior EAD" target="_blank">Entre em contato</a>
                        </div>
                    <div className="course">
                        <div className="text">
                            <div className="image">
                    <img src={smartPhoneImg} alt="" />
                                </div>
                        <h3>Acesse Nossa Loja Virtual</h3>
                        <p>Conheça mais cursos e formações</p>
                            </div>
                          <a href="https://ead.cpaedu.com.br/loja_virtual/index.php" target="_blank">Entre em contato</a>
                        </div>
                    </div>
            </div>
    )
}

export {Courses}