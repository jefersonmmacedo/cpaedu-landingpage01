import './headerDraw2.css'
import mulherSorteio from '../../assets/image/mulherSorteio.png'
import AniversaryImage from '../../assets/image/aniversary.png';

function HeaderDraw2() {
    return (
        <div className="headerDraw2">
            <div className="text">
                <h1>SORTEIO</h1>
                <h2>100 cursos gratuitos <br />e bolsas com até 100% de desconto</h2>
                <h3>De 21/03/2022 à 11/04/2022</h3>
        <img src={AniversaryImage} alt="Aluna com copo de café e mascara protetora contra covid-19" />
                

            </div>
            <div className="image">
        <img src={mulherSorteio} alt="Aluna com copo de café e mascara protetora contra covid-19" />
            </div>
        </div>
    )
}

export {HeaderDraw2}