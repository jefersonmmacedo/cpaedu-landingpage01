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
       <h1>Sorteio</h1> 
<h4>Inscreva-se e participe de nosso sorteio semanal. São 100 cursos gratuitos e
bolsas com até 100% de desconto</h4>
                </div>
                <div className="itens">
                    <div className="course1">
                        <div className="text">
                            <div className="image">
                    <img src={musicImg} alt="Música" />
                                </div>
                        <h3>Música</h3>
                        <p>Realize seu sonho de aprender a tocar um instrumento musical, cantar com técnica vocal e até mesmo reger um coro.</p>
                            </div>
                        {/* <a href="https://wa.me/5522999942800?text=Olá. Gostaria de saber mais detalhes sobre os cursos de Música" target="_blank" rel="noreferrer">Participar do sorteio</a> */}
                        <a href="/sorteio" rel="noreferrer">Participar do sorteio</a>
                      </div>
                    <div className="course2">
                        <div className="text">
                            <div className="image">
                        <img src={lousaImg} alt="Mercado de trabalho" />
                                </div>
                        <h3>Cursos de aperfeiçoamento profissional EAD</h3>
                        <p>Cursos de aperfeiçoamento profissional. Formato tradicional com formação de turmas, teoria e prática com professor e estágio supervisionado. </p>
                            </div>
                        <a href="/sorteio" rel="noreferrer">Participar do sorteio</a>
                        </div>
                    <div className="course3">
                        <div className="text">
                            <div className="image">
                    <img src={tabletImg} alt="" />
                                </div>
                        <h3>Ensino Médio - EJA EAD</h3>
                        <p>Ensino Médio - EJA EAD integrado ao Curso de Qualificação Profissional em Assistente Administrativo.</p>
                            </div>
                        <a href="/sorteio" rel="noreferrer">Participar do sorteio</a>
                        </div>
                    {/* <div className="course4">
                        <div className="text">
                            <div className="image">
                    <img src={noteMessage} alt="" />
                                </div>
                        <h3>Cursos Técnicos EAD</h3>
                        <p>Acelere sua entrada no mercado de trabalho, prepare-se para lidar com uma sociedade desenvolvida tecnologicamente</p>
                            </div>
                        <a href="/sorteio" rel="noreferrer">Participar do sorteio</a>
                        </div> */}
                        </div>




                        <br /><br />




                        <div className="title">
                        <h1>Outras promoções</h1> 
                    <h4>Cursos com descontos especiais</h4>
                </div>
                <div className="itens">
                    <div className="course1">
                        <div className="text">
                            <div className="image">
                        <img src={note3Img} alt="" />
                                </div>
                        <h3>Graduação EAD</h3>
                        <p>A nossa proposta pedagógica inclui foco na área de seu interesse, por meio de estudos indicados em videoaulas, material didático em PDF e impresso.</p>
                            </div>
                          <a href="https://wa.me/5522999942800?text=Olá. Gostaria de saber mais detalhes sobre os descontos nos cursos de Graduação EAD" target="_blank" rel="noreferrer">Garantir meu desconto</a>
                          <div className="view">
                          <a href="#" target="_blank" rel="noreferrer">Ver cursos</a>
                          </div>
                        </div>
                    <div className="course2">
                        <div className="text">
                            <div className="image">
                    <img src={note2Img} alt="" />
                                </div>
                        <h3>Pós-graduação EAD</h3>
                        <p>Aprofunde seus conhecimentos, mantenha-se atualizado, adquira novas competências. Conclusão a partir de 4 meses.</p>
                            </div>
                          <a href="https://wa.me/5522999942800?text=Olá. Gostaria de saber mais detalhes sobre os descontos nos cursos de Pós-graduação EAD" target="_blank" rel="noreferrer">Garantir meu desconto</a>
                          <div className="view">
                          <a href="#" target="_blank" rel="noreferrer">Ver cursos</a>
                          </div>
                        </div>
                    <div className="course3">
                        <div className="text">
                            <div className="image">
                    <img src={noteImg} alt="" />
                                </div>
                        <h3>2º Curso Superior EAD</h3>
                        <p>Invista em seu futuro profissional e tenha mais de uma graduação em seu currículo. Conclusão a partir de 6 meses.</p>
                            </div>
                          <a href="https://wa.me/5522999942800?text=Olá. Gostaria de saber mais detalhes sobre os descontos nos cursos de 2º Curso Superior EAD" target="_blank" rel="noreferrer">Garantir meu desconto</a>
                          <div className="view">
                          <a href="#" target="_blank" rel="noreferrer">Ver cursos</a>
                          </div>
                        </div>
                    {/* <div className="course4">
                        <div className="text">
                            <div className="image">
                    <img src={smartPhoneImg} alt="" />
                                </div>
                        <h3>Acesse Nossa Loja Virtual</h3>
                        <p>Torne seu currículo mais atraente para o mercado de trabalho, invista em sua qualificação profissional.</p>
                            </div>
                          <a href="https://ead.cpaedu.com.br/loja_virtual/index.php" target="_blank" rel="noreferrer">Participar do sorteio</a>
                        </div> */}
                    </div>
            </div>
    )
}

export {Courses}