import React, { useState } from 'react'

function TodoForm(props) {
    const [input, setInput] = useState('')


    const handleChange = e => {
        setInput(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input,
            checked: false
        })

        setInput('');
    }

    return (
        <form className="todo-form" onSubmit={ handleSubmit } >
            <input className="todo-input" type="text" placeholder="Add detail.."  onChange={ handleChange } value= {input} />
            <button className="btn btn-submit">Add</button>
        </form>
    )
}

export default TodoForm
