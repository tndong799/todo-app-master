import React from 'react'


function TodoItem({ todos, onChangeChecked, active, deleteTodo }) {

    const handleChange = ( id) => {
        onChangeChecked(id)
    }

    const handleDelete = (id) => {
        deleteTodo(id)
    }

    return todos.map((todo, index) => (
        <div className="todo-item" key={index}>
            <input type="checkbox" className="todo-check" checked={todo.checked} onChange={ e => handleChange(todo.id) } />
            <span className="todo-name">{ todo.text }</span>

            { active === 'Complete' ? <span className="todo-delete" onClick={ e => handleDelete(todo.id) }>Delete</span> : null}
        </div>
    ))
}

export default TodoItem
