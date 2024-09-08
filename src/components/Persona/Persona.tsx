import { useState, useEffect } from 'react';
import { Person } from '../../types'
import './Persona.css'

interface Props{
    persona: Person;
}

const Persona: React.FC<Props> = ({persona}) => {
    const [per, setPer] = useState<Person | null>(null)
    const [info, setInfo] = useState<boolean>(true);
    useEffect(() =>{
        if(info){
            fetch(`https://retoolapi.dev/5tTIpR/fakepeople/${persona.id}`)
            .then((response) => response.json())
            .then((data: Person) => {
                console.log(per)
                setPer(data)})
        }
    }, [info]);

    return (
        <>
    <div className='persona-card'>
        {info && persona ? (  
        <>
            <p>Nombre: {persona.first}</p>
            <p>Apellido: {persona.last}</p>
        </>
        ) : (
            <>
            <p>ID: {persona.id}</p>
            <p>Nombre: {persona.first}</p>
            <p>Apellido: {persona.last}</p>
            <p>Mail: {persona.email}</p>
            <p>IP Adress: {persona.ipaddress}</p>
            </>
        )}
    </div>
    <div className='button-container'> 
            <button onClick = {() => setInfo(!info)} className='info-button'>
                {info ? 'Mas informacion' : 'Menos informacion'} 
            </button>
    </div>
    </>
    )
}

export default Persona;