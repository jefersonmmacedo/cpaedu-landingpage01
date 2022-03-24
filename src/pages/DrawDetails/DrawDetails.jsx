import { HeaderDraw } from '../../components/HeaderDraw/HeaderDraw'
import { FormSorteio } from '../../components/FormSorteio/FormSorteio'
import { Footer } from '../../components/Footer/Footer'
import './drawDetails.css'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { IoHourglassOutline, IoCheckboxOutline, IoLogoYoutube} from 'react-icons/io5'

function DrawDetails() {
    const {course} = useParams();


    const [view, setView] = useState(false);

    function handleViewCourses() {
        if(view === false) {
            setView(true)
        } else {
            setView(false)
        }
    }
    return (
        <div>
            <HeaderDraw />
            <div className="details">
            <h2>Detalhes do sorteio</h2>
            <div className="sort">
           <h4> Datas de sorteios: 21/03 <IoCheckboxOutline /> | 28/03 <IoHourglassOutline /> | 04/04 <IoHourglassOutline /> | 11/04 <IoHourglassOutline /></h4>
            </div>
            <div className="listCourses">
              
                <div className="iten">
                <h3>Cursos de aperfeiçoamento profissional</h3>
                <h5>Total de 5 bolsas por sorteio <br /> 1 bolsa de 100% | 1 bolsa de 70% | 3 bolsas de 50%</h5>
               <p> Agente de Portaria</p>
               <p> Alfabetização e Letramento</p>
               <p> Atendente de Farmácia</p>
               <p> Atendimento Educacional Especializado</p>
              <p>  Autismo e suas Características</p>
              <p>  AutoCad 2D e 3D</p>
              <p>  Auxiliar Administração</p>
              <p>  Auxiliar de Almoxarifado</p>
               <p> Auxiliar de Contabilidade</p>
               <p> Auxiliar de Necrópsia</p>
               <p> Auxiliar de Veterinário</p>
               <p> Auxiliar em Radiologia</p>
               <p> Biologia</p>
               <p> Bitcoin</p>
               <p> Como ser um Youtuber</p>
               <p> Corel Draw X8</p>
               <p> Cuidador de Idoso</p>
               {view === true ? "" : 
               <button onClick={handleViewCourses}>Ver mais</button>
            }
               {view === false ? "" : 
               <div className="hidden">
               <p>  Deficiência Auditiva e Surdez</p>
                <p>Deficiência Física e suas Características</p>
               <p> Departamento Pessoal</p>
               <p> Designer de Cílios & Sobrancelha</p>
               <p> Edição de Vìdeo Premiere</p>
               <p> Educação Ambiental</p>
               <p> Elaboração de Currículo</p>
               <p> Eletricista</p>
               <p> Empreendedorismo</p>
               <p> Excel Básico e Avançado</p>
                <p>Física</p>
               <p> Frentista</p>
               <p> Geografia</p>
               <p> Gestão em RH</p>
               <p> Google Adwords</p>
               <p> Google Drive</p>
               <p> História</p>
               <p> Illustrator CS6</p>
              <p>  Inclusão de Alunos com Deficiência Visual</p>
               <p> InDesign 2017</p>
               <p> Inglês do Zero a Fluência</p>
               <p> Instagram para Vendas</p>
               <p> Introdução a Informática</p>
               <p> Linux</p>
               <p> Literatura e Linguagem Infantil</p>
               <p> Lógica de Programação</p>
               <p> Logística 4.0</p>
               <p> Ludicidade, Psicomotricidade e o Imaginário Infantil</p>
               <p> Manutenção de Celular Básico ao Avançado</p>
              <p>  Maquiagem</p>
              <p>  Marketing Digital</p>
              <p>  Massagem Modeladora</p>
              <p>  Matemática para Enem</p>
               <p> Metodologia das Atividades Físicas na Educação Infantil</p>
               <p> Microsoft Word</p>
               <p> Mídias Sociais</p>
               <p> Montagem e Manutenção de PC</p>
               <p> NR-10</p>
               <p> Operador de Caixa</p>
               <p> PhotoShop CC</p>
               <p> Português</p>
               <p> Power Point</p>
               <p> Programação de sites Wordpress</p>
               <p> Química</p>
               <p> Reciclagem de Empilhadeira</p>
               <p> Sala de Recursos Multifuncionais</p>
               <p> Segurança na Internet</p>
               <p> SketchUp</p>
               <p> Socorrista APH</p>
               <p> Supervisão Pedagógica</p>
               <p> Técnicas de Redação</p>
               <p> Técnicas de Vendas</p>
               <p> Telemarketing</p>
               <p> Transtornos Globais de Desenvolvimento/Altas Habilidades</p>
               <p> Windows 10</p>
               </div>
                }

                {view === false ? "" : 
               <button onClick={handleViewCourses}>Ver menos</button>
            }
                </div>

                <div className="block2">
                <div className="iten">
               <h3>Música</h3> 
               <h5>Total de 5 bolsas por sorteio <br />1 bolsa de 100% | 1 bolsa de 70% | 3 bolsas de 50%</h5>
               <p> Bateria</p>
                <p> Canto</p>
                <p>Contrabaixo</p>
                <p>Teclado</p>
                <p>Violão</p>
                </div>
                <div className="iten">
                <h3>Ensino Médio - EJA EAD</h3>
                <h5>Total de 5 bolsas por sorteio <br /> 1 bolsa de 100% | 1 bolsa de 70% | 3 bolsas de 50%</h5>
                <p>Ensino Médio - EJA integrado ao Curso de Qualificação Profissional em Assistente Administrativo</p> 
                </div>
                <div className="iten">
                <h3>Loja Virtual</h3>
                <h5>Total de 10 bolsas por sorteio <br /> 2 bolsas de 100% | 2 bolsas de 70% | 6 bolsas de 50%</h5>
                <p>Todos os cursos da loja virtual</p> 
                </div>
                </div>
            </div>


            <div className="youtube">
           <h3>Acompanhe os sorteios em nosso canal no youtube: </h3>
           <h3> <a href="https://www.youtube.com/channel/UCqTlej5EZmnmet98RQwYlIw"> ir para youtube <IoLogoYoutube /></a> </h3>
            </div>

            </div>
            
            <FormSorteio course={course} />
            <Footer />
        </div>
    )
}

export {DrawDetails}





{/* <h3>Cursos Profissionalizantes</h3> 
AEE (Atendimento Educacional Especializado)
Auxiliar Administrativo
Auxiliar de Farmácia
Barbeiro
Conserto de Celular e Tablet
Corte, Costura e Modelagem
Crochê
Cuidador de Idosos
Desenho Artístico
Design Gráfico
Eletricista Instalador Predial
Fotografia
Informática
Libras
Manicure e Pedicure
PAED (Profissional de Apoio ao Estudante com Deficiência)
Práticas Pedagógicas na Educação Infantil
Recursos Tecnológicos para a Prática Pedagógica */}