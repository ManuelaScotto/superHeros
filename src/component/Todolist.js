// CREO UNA TODOLIST IN CUI INSERIRE E CANCELLARE ELEMENTI PARTENDO DA UN OGGETTO (todos) SCRITTO IN MANIERA NON DINAMICA
// utilizzo gli HOOKS per poter usare lo state con le funzioni e non più con le classi  (import React, {useState})
import React, { useState } from 'react'
import Todo from './Todo';
import Form from './Form';

function TodoList() {
    // //////////////////////////////////////////////////////////////////////////////////////////////////////
    // creo la variabile 'todos' in cui inserisco i dati che voglio visualizzare per poi mappare nel return
    // creo la funzione che cambia la variabile (come il setState)
    // all'interno di useState inserisco il valore di partenza della variabile (todos), in questo caso l'oggetto da iterare
    // //////////////////////////////////////////////////////////////////////////////////////////////////////

    const [todos, setTodos] = useState([
        { name: 'Studiare React', complete: false, remove: false },
        { name: 'Fare la spesa', complete: true, remove: false }
    ])

    // //////////////////////////////////////////////////////////////////////////////////////////////////////
    //creo la funzione addTodo per aggiungere elementi inseriti nell'input del Form (dove recupero il value)
    // [...todos, {name:todo}] significa prendi tutto l'array todos e aggiungi il name del todo preso dal value del Form
    // con setTodos setto il cambiamento dello stato
    // //////////////////////////////////////////////////////////////////////////////////////////////////////

    const addTodo = todo => {
        const newTodos = [...todos, { name: todo }]
        setTodos(newTodos)
    }

    // //////////////////////////////////////////////////////////////////////////////////////////////////////
    //creo la funzione completeTodo per impostare il bottone 'FATTO' presente nel componente Todo 
    // recupero l'indice dell'elemento cliccato e imposto il secondo valore dell'oggetto 'todos' : complete. 
    // se complete è false fallo diventare true e viceversa (al click attivo e disattivo)
    // //////////////////////////////////////////////////////////////////////////////////////////////////////

    const completeTodo = index => {
        const newTodos = [...todos]
        newTodos[index].complete = newTodos[index].complete ? false : true;
        setTodos(newTodos)
    }

    // //////////////////////////////////////////////////////////////////////////////////////////////////////
    //creo la funzione removeTodo per rimuovere l'elemento al click sul bottone 'CANCELLA' presente nel componente Todo
    // in questo caso dovrò solo indicare che remove dovrà essere true per cancellarlo
    // //////////////////////////////////////////////////////////////////////////////////////////////////////

    const removeTodo = index => {
        const newTodos = [...todos]
        newTodos[index].remove = true;
        setTodos(newTodos)
    }
    return (
        <div className='container'>
            <h1 className='todoList'>TODO LIST</h1>
            <div className="wrapper">
                {todos.map((item, index) => (
                    <Todo key={index}
                        todo={item}
                        index={index}
                        complete={completeTodo}
                        remove={removeTodo} />
                ))}
                <Form submit={addTodo} />
            </div>
        </div>
    )
}

export default TodoList
