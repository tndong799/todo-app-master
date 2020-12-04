import React, {useState, useEffect } from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState([])
  const [active, setActive] = useState('All')
  
  useEffect(() => {
    if(localStorage && localStorage.getItem('todos')){
      var todos = JSON.parse(localStorage.getItem('todos'));
      setTodos(todos);
    }
  }, []);

  const addTodo = todo => {
    if(!todo.text || /^\s*$/.test(todo.text)){
      return
    }
    const newTodos = [todo,...todos]
    localStorage.setItem('todos', JSON.stringify(newTodos));
    setTodos(newTodos);
  }

  const onChangeChecked = (id) =>{
    let updateTodos = todos.map((todo) => {
      if(todo.id === id){
        todo.checked = !todo.checked
      }
      return todo
    })
    localStorage.setItem('todos', JSON.stringify(updateTodos));
    setTodos(updateTodos);
  }

  const deleteTodo = (id) => {
    let updateTodos = todos.filter((todo) => {
      return todo.id !== id
    })
    localStorage.setItem('todos', JSON.stringify(updateTodos));
    setTodos(updateTodos);
  }

  const deleteAllTodoComplete = () =>{
    let updateTodos = todos.filter((todo) => {
      return todo.checked !== true
    })
    localStorage.setItem('todos', JSON.stringify(updateTodos));
    setTodos(updateTodos);
  }


  return (
    <div className="wrapper todo-app">
      <div className="btn-wrapper">
        <button className={ active === 'All' ? 'btn btn-active' : 'btn' } onClick={ () => setActive('All') }>All</button>
        <button className={ active === 'Active' ? 'btn btn-active' : 'btn' } onClick={ () => setActive('Active') }>Active</button>
        <button className={ active === 'Complete' ? 'btn btn-active' : 'btn' } onClick={ () => setActive('Complete') }>Complete</button>
      </div>
      { active === 'Complete' ? null :  <TodoForm onSubmit={ addTodo } />}

      <TodoList todos={ todos } onChangeChecked = {onChangeChecked} active= { active } deleteTodo={ deleteTodo }/>

      { active ==='Complete' ? <button className='btn btn-delete-all ml-50' onClick={ deleteAllTodoComplete } >Delete all</button> : null}
    </div>
  );
}

export default App;
