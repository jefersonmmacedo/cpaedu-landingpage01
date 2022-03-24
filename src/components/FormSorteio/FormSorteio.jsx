import './formSorteio.css'
import {useState} from 'react'
import { toast } from 'react-toastify';
import { collection, addDoc } from "firebase/firestore";
import db from '../../services/firebaseConnection';

function FormSorteio({course}) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [age, setAge] = useState("");
    const [schooling, setSchooling] = useState("");
    const [district, setDistrict] = useState("");
    const [city, setCity] = useState("");
    const [courses, setCourses] = useState("");
    const [message, setmessage] = useState("")

       

    function handleCourses(e) {
        setCourses(e.target.value)
    }
    function handleSchooling(e) {
        setSchooling(e.target.value)
    }

    async function handleMessage(e) {
        e.preventDefault()
        try {
            const docRef = await addDoc(collection(db, "candidatos"), {
                name: name,
                email: email,
                phone: phone,
                age: age,
                schooling: schooling,
                district: district,
                city: city,
                courses: courses === "" ? course : courses,
                message: message,
            })
            console.log("Document written with ID: ", docRef.id);
                toast.info(`Parabéns. Você está participando de nosso sorteio`);
                setAge("")
                setCity("")
                setCourses("")
                setDistrict("")
                setEmail("")
                setName("")
                setPhone("")
                setSchooling("")
                setmessage("")
          } catch (e) {
            console.error("Error adding document: ", e);
          }
    }


        

    return (
        <div className="formSorteio">
        <h1>Inscreva-se no sorteio</h1>
        <form action="" onSubmit={handleMessage}>
            <input type="text" placeholder="Nome" value={name} onChange={(e) => setName(e.target.value)} required/>
            <input type="email" placeholder="E-mail" value={email} onChange={(e) =>  setEmail(e.target.value)} required/>
            <input type="text" placeholder="Telefone" value={phone} onChange={(e) =>  setPhone(e.target.value)} required/>
            <input type="text" placeholder="Idade" value={age} onChange={(e) =>  setAge(e.target.value)} required/>
            <select value={schooling} onChange={handleSchooling} required>
                <option value="">Nível de escolaridade atual?</option>
                <option value="Ensino fundamental">Ensino fundamental</option>
                <option value="Ensino médio">Ensino médio</option>
                <option value="Faculdade">Faculdade</option>
                <option value="Faculdade completo">Faculdade completo</option>
                <option value="Mestrado">Mestrado</option>
                <option value="Mestrado completo">Mestrado completo</option>
                <option value="Doutorado">Doutorado</option>
                <option value="Doutorado completo">Doutorado completo</option>
            </select>
            <input type="text" placeholder="Bairro" value={district} onChange={(e) =>  setDistrict(e.target.value)} required/>
            <input type="text" placeholder="Cidade" value={city} onChange={(e) =>  setCity(e.target.value)} required/>
            <select value={course} onChange={handleCourses} required>
                <option value="">Qual curso deseja ganhar uma bolsa?</option>
                <option value="Música">Música</option>
                <option value="Cursos de aperfeiçoamento profissional EAD">Cursos de aperfeiçoamento profissional EAD</option>
                <option value="Ensino médio - EJA EAD com curso de qualificação profissional em assistente administrativo">Ensino médio - EJA EAD com curso de qualificação profissional em assistente administrativo</option>
                <option value="Cursos da loja virtual">Cursos da loja virtual</option>
            </select>
            <textarea name="" id="" placeholder='Resuma o Projeto AMAIVOS e CPA Educação em uma palavra ou deixe sua mensagem para a direção e nossa equipe' cols="30" rows="5"
            value={message} onChange={(e) => setmessage(e.target.value)}></textarea>
            <button type='submit'>Inscrever</button>
        </form>
        </div>
    )
}

export {FormSorteio}