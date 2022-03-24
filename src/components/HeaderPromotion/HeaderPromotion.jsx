import './headerPromotion.css'
import AlunoPromotion from '../../assets/image/AlunoPromotion.png'
import AniversaryImage from '../../assets/image/aniversary.png';

function HeaderPromotion() {
    return (
        <div className="headerPromotion">
            <div className="text">
                <h1>Promoções</h1>
                <h2>Cursos completos com descontos especiais</h2>
                <h3>Descontos por tempo limitado. Aproveite!</h3>
        <img src={AniversaryImage} alt="Aluna com copo de café e mascara protetora contra covid-19" />
                
            </div>
            <div className="image">
        <img src={AlunoPromotion} alt="Aluna com copo de café e mascara protetora contra covid-19" />
            </div>
        </div>
    )
}

export {HeaderPromotion}