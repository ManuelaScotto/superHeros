// CREO IL COMPONENTE FORM PER CREARE I NUOVI ELEMENTI 
// UTILIZZO GLI HOOKS PER GESTIRE LO STATE
import React, { useState } from 'react'

const Form = (props) => {
    const [value, setValue] = useState(); //il valore iniziale della variabile 'value' è vuoto
    const handleSubmit = (e) => {
        e.preventDefault();

        ///////////////////////////////////////////////////////////////////////////////////////////
        /* creo una condizione per evitare di inserire degli spazi vuoti e creare quindi elementi vuoti */
        ///////////////////////////////////////////////////////////////////////////////////////////

        if (value.trim() === '') {
            return
        }

        ///////////////////////////////////////////////////////////////////////////////////////////
        //recupero il valore inserito nell'input
        // setValue('') pulisco il campo dell'input
        ///////////////////////////////////////////////////////////////////////////////////////////

        props.submit(value);
        setValue('')
    }


    const onChangeText = (e) => setValue(e.target.value)
    return (
        <form onSubmit={handleSubmit}>

            {/* ////////////////////////////////////////////////////////////////////////////////////////////
            SCATENO L'EVENTO
            RECUPERO IL VALORE 
            MODIFICO IL VALORE INIZIALE che era vuoto CON QUELLO APPENA RECUPERATO
            E LO PASSO DENTRO 'value' così da passare il nuovo valore al componente TodoList 
            ///////////////////////////////////////////////////////////////////////////////////////////////*/}

            <input className='input' type="text" value={value} placeholder='Aggiungi todo list' onChange={onChangeText} />

        </form>
    )
}

export default Form
