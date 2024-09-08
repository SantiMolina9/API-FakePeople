import { useEffect, useState } from "react"
import { Person } from '../../types'
import  Persona  from '../Persona/Persona.tsx'
import './Lista.css'

export default function Lista() {
    const [lista, setLista] = useState<Person[]>([]);
    
    useEffect(() =>{
        fetch('https://retoolapi.dev/5tTIpR/fakepeople')
        .then((response) => response.json())
        .then((data: Person[]) => {
            console.log(data)
            setLista(data)})
    }, []);

    return (
        <div className="lista-container">
        {
        lista.length > 0 ?
            lista.map((persona) => (
                <li className = "persona-item">
                <Persona key = {persona.id} persona = {persona} />
                </li>
            ))
        :
            <p>No hay personas</p>
        }
        </div>
    )
    
}