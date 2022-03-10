import './company.css';
import student from '../../assets/image/student.jpg';


function Company() {
    return (
        <div className="company">
            <div className="image">
                <img src={student} alt="" />
            </div>
            <div className="text">
                <h1>Quem somos</h1>
                <p>O CPA Educação foi criado para atender a todo público e levar desenvolvimento social aqueles que buscam uma oportunidade de desenvolvimento pessoal e melhoria na qualidade de vida, observando sua realidade social e financeira.<br /> 
Em 2019 instituímos a ONG AMAIVOS Assistência Social, com o objetivo de expandir os serviços de sua principal mantenedora “CPA Educação” através de projetos e serviços de assistencialismo.
<br />
<br />
Centenas de pessoas já foram beneficiadas através dos serviços totalmente gratuitos que conta com mão de obra voluntária e desenvolve projetos voltados para a educação de qualidade em tempo integral, em parceria com instituições, desenvolvendo oficinas voltadas para a educação profissional e acesso ao mundo do trabalho tanto do desempregado quanto do jovem e do adolescente em busca do primeiro emprego, promovendo o trabalho digno e o crescimento econômico, propagando as artes e a cultura da musicalidade, impulsionando atividades esportivas e ações em defesa dos ecossistemas e da biodiversidade.
</p>
            </div>
        </div>
    )
}

export {Company}