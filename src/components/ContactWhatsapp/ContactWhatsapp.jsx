import './contactWhatsapp.css'

function ContactWhatsapp() {
    return (
        <div className="whatsapp">
        <h1>Entre em conato</h1>
        <form action="">
            <input type="text" placeholder="Nome"/>
            <input type="email" placeholder="Email"/>
            <input type="text" placeholder="telefone"/>
            <select name="" id="">
                <option value="">Qual curso deseja?</option>
                <option value="Música">Música</option>
                <option value="Mercado de trabalho">Mercado de trabalho</option>
                <option value="Ensino Médio - EJA EAD">Ensino Médio - EJA EAD</option>
                <option value="Técnicos EAD">Técnicos EAD</option>
                <option value="Graduação EAD">Graduação EAD</option>
                <option value="Pós Graduação EAD">Pós Graduação EAD</option>
                <option value="2º Curso Superior EAD">2º Curso Superior EAD</option>
            </select>
            <button>Enviar mensagem</button>
        </form>
        </div>
    )
}

export {ContactWhatsapp}