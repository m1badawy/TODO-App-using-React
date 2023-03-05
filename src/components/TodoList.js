import React from 'react'
import "./TodoList.css"

const TodoList = ({todos, setTodos}) => {

    const del = ({id}) => {
        setTodos(todos.filter((todo) => todo.id !== id))
    }

    const complete = ({id}) => {
      setTodos(todos.map((todo) => {
        if (todo.id === id) {
          return {...todo, completed: !todo.completed}
        } 
        return todo
      }))
  }


  const edit = ({id}) =>{
    let newTask = prompt()
    setTodos(todos.map((todo) =>{
      if (todo.id === id) {
        return {...todo, task: newTask}
      }
      return todo
    }))
  }


    console.log(todos)
  return (
    <div className='task-list'>
      {todos.map((todo) =>(
        <li className='task' key={todo.id}>
          <div className='task-details'>
            <input className='checkbox' type='checkbox' onChange={() => complete(todo)}/>
            <span className='task-text'>{todo.task}</span>
          </div>

          <div className='ctrl-btns'>
                <button className='edit' onClick={() => edit(todo)}>Edit</button>
                <button className='del' onClick={() => del(todo)}>Delete</button>
          </div>
        </li>
      ))}
    </div>
  )
}

export default TodoList
