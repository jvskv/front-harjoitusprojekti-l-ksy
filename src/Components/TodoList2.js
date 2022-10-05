import React from "react"
import TodoTable from "./TodoTable"
import { useState } from "react"


export default function Todolist2() {

const [todo, setTodo] = useState({desc: '', date: ''})
const [todos, setTodos] = useState([])

const inputChanged = (e) => {
  setTodo({...todo, [e.target.name]: e.target.value})
}

const addTodo = (e) => {
  e.preventDefault()
  setTodos([...todos, todo])
}




return (
  <div>
    <form onSubmit={addTodo}>
      <p>Date: </p>
      <input type ='date' name ='date' value={todo.date} onChange={inputChanged}/>
      <p>Description: </p>
      <input type ='text' name ='desc' value={todo.desc} onChange={inputChanged}/>
      <input type='submit' value='Add' />
    </form>
    <TodoTable todos={todos} setTodos={setTodos}/>
  </div>
);
}