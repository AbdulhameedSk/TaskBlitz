import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Todos } from './components/Todos'
import { CreateTodo } from './components/CreateTodo'
import './App.css'

function App() {
  const [Todos, setTodos] = useState([])

  fetch("http://localhost:3000/todos").then(async function(res){
    const json=await res.json();
    setTodos(json.todos);
  })

  return (
    <div>
      HELLO THERE
      <CreateTodo></CreateTodo>
      <Todos
        Todos={Todos}
      ></Todos>
    </div>
  );
  
}

export default App
