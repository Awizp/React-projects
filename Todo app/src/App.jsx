import { useState } from "react"

import './App.css'

function App() {

  const [inputValue, setInputValue] = useState("")
  const [todo, setTodo] = useState([])

  const generateId = () => {
    let uniqueId = ""
    let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890"
    for (let i = 0; i < 6; i++) {
      let random = Math.floor(Math.random() * letters.length)
      uniqueId += letters[random]
    }
    return uniqueId
  }

  const handleClick = () => {
    setTodo((prev) => (
      prev.concat({
        todo: inputValue,
        id: generateId()
      })
    ))
    setInputValue("")
  }

  const handleDelete = (id) => {
    setTodo((prevArr) => (prevArr.filter(todo => todo.id !== id)))
  }

  return (
    <>
      <input type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />

      <button onClick={handleClick}>Add Todo</button>

      <div>
        {todo.map((todo) => (
          <div key={todo.id} class="todo">
            <li>{todo.todo}</li>
            <button
              onClick={() => handleDelete(todo.id)}
            >X</button>
          </div>
        ))}
      </div>
    </>
  )
}

export default App
