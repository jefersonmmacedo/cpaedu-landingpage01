import './formSorteioTeste.css'
import {useState} from 'react'
import { collection, addDoc } from "firebase/firestore";
import db from '../../services/firebaseConnection';

function FormSorteioTeste({course}) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [courses, setCourses] = useState("");

       

    function handleCourses(e) {
        setCourses(e.target.value)
    }


    async function handleMessage(e) {
        e.preventDefault()
        try {
            const docRef = await addDoc(collection(db, "users"), {
                name: name,
                email: email,
                phone: phone,
                courses: courses,
            })
            console.log("Document written with ID: ", docRef.id);
          } catch (e) {
            console.error("Error adding document: ", e);
          }
    }


        

    return (
        <div className="formSorteioTeste">
        <h1>Inscreva-se no sorteio</h1>
        <form action="" onSubmit={handleMessage}>
            <input type="text" placeholder="Nome" value={name} onChange={(e) => setName(e.target.value)} required/>
            <input type="email" placeholder="E-mail" value={email} onChange={(e) =>  setEmail(e.target.value)} required/>
            <input type="text" placeholder="Telefone" value={phone} onChange={(e) =>  setPhone(e.target.value)} required/>
            <select onChange={handleCourses} required>
                <option value="">Qual curso deseja ganhar uma bolsa?</option>
                <option value="Música">Música</option>
                <option value="Cursos de aperfeiçoamento profissional EAD">Cursos de aperfeiçoamento profissional EAD</option>
                <option value="Ensino médio - EJA EAD com curso de qualificação profissional em assistente administrativo">Ensino médio - EJA EAD com curso de qualificação profissional em assistente administrativo</option>
                <option value="Cursos da loja virtual">Cursos da loja virtual</option>
            </select>

            <button type='submit'>Inscrever</button>
        </form>
        </div>
    )
}

export {FormSorteioTeste}