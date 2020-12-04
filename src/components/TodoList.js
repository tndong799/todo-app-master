import React from 'react'
import TodoItem from './TodoItem'

function TodoList(props) {

    var todoFilter = props.todos
    if(props.active === 'Active'){
        todoFilter = todoFilter.filter((todo) => {
            return todo.checked !== true;
        })
    }
    if( props.active === 'Complete' ){
        todoFilter = todoFilter.filter((todo) => {
            return todo.checked !== false;
        })
    }

    return (
        <div className="todo-list">
            <TodoItem todos={ todoFilter } onChangeChecked={ props.onChangeChecked } deleteTodo={props.deleteTodo} active={props.active} />
        </div>
    )
}

export default TodoList
