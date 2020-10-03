// CREO IL COMPONENTE TODO PER POTER GESTIRE I SINGOLI ELEMENTI
import React from 'react'


const Todo = props => {
    console.log(props)
    return (
        <div className="todo" style={{ display: props.todo.remove ? 'none' : '' }}> {/* se remove è true cancella altrimenti non fare niente */}
            <h3 style={{ textDecoration: props.todo.complete ? 'line-through' : '' }}>{props.todo.name}</h3> {/* se complete è true inserisci una riga in mezzo al testo */}
            <div className="btn">
                <button style={{ backgroundColor: props.todo.complete ? 'rgba(244, 164, 96, 0.4)' : 'rgb(244, 164, 96)', color: props.todo.complete ? ' rgba(128, 128, 128,0.3)' : ' rgba(17, 0, 58, 0.918)' }} onClick={() => props.complete(props.index)}>FATTO</button>
                {/* al click recupero l'indice per gestire proprio quell'elemento */}
                <button onClick={() => props.remove(props.index)}>CANCELLA</button>
            </div>
        </div>
    )
}

export default Todo

