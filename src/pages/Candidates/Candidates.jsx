import { Footer } from "../../components/Footer/Footer"
import { HeaderDraw } from "../../components/HeaderDraw/HeaderDraw"
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import db from '../../services/firebaseConnection';
import './candidates.css'

function Candidates() {
    const [candidatos, setCandidatos] = useState([])

useEffect(() => {
    async function loadCondadatos() {
        const querySnapshot = await getDocs(collection(db, "candidatos"));  
        const list = []
        querySnapshot.forEach((doc) => {
            console.log(`${doc.id} => ${doc.data()}`);
          const data = {
                id: doc.id,
                name: doc.data().name,
                age: doc.data().age,
                email: doc.data().email,
                phone: doc.data().phone,
                schooling: doc.data().schooling,
                district: doc.data().district,
                city: doc.data().city,
                courses: doc.data().courses,
                message: doc.data().message,
            }

            console.log(data)
            list.push(data)
          });
          setCandidatos(list)
    }

    loadCondadatos()
}, [candidatos])

console.log(candidatos)

    return (
        <div>
            <HeaderDraw />
            <div className="pageCandidates">
            <h1>Candidatos Inscritos</h1>
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
            <Footer />
        </div>
    )
}

export {Candidates}
