import React from 'react'
import { v4 } from 'uuid'
import "./Form.css"

const Form = ({input, setInput, todos, setTodos}) => {
    const inputChange = (e) => {
        setInput(e.target.value)
    }

    const formSubmit = (e) =>{
        e.preventDefault()
        setTodos([...todos, {
            task: input,
            id: v4(),
            completed: false
        }])
        setInput("")
    }

  return (
    <form onSubmit={formSubmit} className="form">
      <input type="text" placeholder='Add a Todo...' className='item-input' value={input} required onChange={inputChange}/>
      <button className='button-add' type='submit'>Add task</button>
    </form>
  )
}

export default Form
