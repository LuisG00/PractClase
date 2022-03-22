import React from 'react'

export default function Greetings(props){
    const {grupoInf, funcion} = props
    const {grupo='Invitado', day} = grupoInf
    console.log(props)
    console.log(grupoInf)
    console.log(grupo)
    console.log(day)
    return(
        <div>
            <button onClick={() => funcion(day, grupo)}>Greetings</button>
        </div>
    )
}

export function Bye(){
    return(
        <div>
            <h3>Bonito fin de semana</h3>
        </div>
    )
}