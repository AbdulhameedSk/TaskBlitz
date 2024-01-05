import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Todos } from "./components/Todos";
import { CreateTodo } from "./components/CreateTodo";
import "./App.css";

function App() {
  //state variable
  const [todos, setTodos] = useState([]);

  return (
    <div>
      <CreateTodo></CreateTodo>
      <Todos todos={todos}></Todos>
    </div>
  );
}

export default App;
