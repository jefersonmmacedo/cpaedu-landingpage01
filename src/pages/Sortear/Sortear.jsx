import { Footer } from "../../components/Footer/Footer"
import { HeaderDraw } from "../../components/HeaderDraw/HeaderDraw"
import { collection, getDocs, addDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import db from '../../services/firebaseConnection';
import './sortear.css'

function Sortear() {
    const [candidatos, setCandidatos] = useState([])
    const [sorteador, setSorteador] = useState([])
    const [courses, setCourses] = useState([])
    const [qtd, setQtd] = useState([])

useEffect(() => {
    async function loadCondadatos() {
        const querySnapshot = await getDocs(collection(db, "candidatos"));  
        let list = [];
        querySnapshot.forEach((doc) => {
            console.log(`${doc.id} => ${doc.data()}`);
            list.push({
                id: doc.id,
                name: doc.data().name,
                email: doc.data().email,
                phone: doc.data().phone,
                courses: doc.data().courses
            })
        });
            console.log(list)
            setCandidatos(list)

    }

    loadCondadatos()
}, [])

console.log(candidatos)



const cadidatesFilter = candidatos.filter((candidato) => (candidato.courses === courses));
console.log(cadidatesFilter)



let sorteados = []
async function sortearNomes() {
    for (let i = 0; i < qtd ; i++) {
    const selected = cadidatesFilter[~~(cadidatesFilter.length * Math.random())]

    
    const filterCandidate = sorteados.find(sorteado => sorteado.id === selected.id);

    if(filterCandidate) {
      console.log("repetido")
    } else {
      sorteados.push(selected)
      try {
          const docRef = await addDoc(collection(db, "sorteados"),selected)
          console.log("Document written with ID: ", docRef.id);
        } catch (e) {
          console.error("Error adding document: ", e);
        }
      
    }



    
    }
    
    console.log(sorteados)
    setSorteador(sorteados)
}

function handleCourses(e) {
    setCourses(e.target.value)
}
function handleQtd(e) {
    setQtd(e.target.value)
}


    return (
        <div>
            <HeaderDraw />
            {/* <div className="pageSortear">
            <h1>Candidatos Inscritos</h1>
            <h3>Total de inscritos: {candidatos.length} </h3>
            <div className="cadidato">
                {candidatos.map((candidato) => {
                    return (
                        <div className="listCandidato" key={candidato.id}>
                            <h5><b>Nome:</b> {candidato.name}</h5> 
                            <h5><b>E-mail:</b> {candidato.email}</h5>
                            <h5><b>Curso pretendido:</b> {candidato.courses}</h5>
                        </div>
                    )
                })}
            </div>
            </div>
            <hr /> */}
            <div className="pageSortear">
            <h1>Sorteador</h1>

            <select onChange={handleCourses} required>
                <option value="">Qual curso deseja ganhar uma bolsa?</option>
                <option value="Música">Música</option>
                <option value="Cursos de aperfeiçoamento profissional EAD">Cursos de aperfeiçoamento profissional EAD</option>
                <option value="Ensino médio - EJA EAD com curso de qualificação profissional em assistente administrativo">Ensino médio - EJA EAD com curso de qualificação profissional em assistente administrativo</option>
                <option value="Cursos da loja virtual">Cursos da loja virtual</option>
            </select>

            <select onChange={handleQtd} required>
                <option value="">Quantidade de bolsas</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
            </select>

                {cadidatesFilter.length === 0 ? "" :
                <h5>{cadidatesFilter.length} inscritos para {courses}</h5>
                 }
            <button onClick={sortearNomes}>Sortear</button>
           
            <div className="cadidato">
                {sorteador.map((sorteado) => {
                    return (
                        <div className="listCandidato" key={sorteado.id}>
                            <h5><b>Nome:</b> {sorteado.name}</h5> 
                            <h5><b>E-mail:</b> {sorteado.email}</h5>
                            <h5><b>Curso pretendido:</b> {sorteado.courses}</h5>
                        </div>
                    )
                })}
        {sorteador.length === 0 ? "" :
        <h3>Total de sorteados: {sorteador.length} </h3>
        }
            </div>
            </div>


            <Footer />
        </div>
    )
}

export {Sortear}
