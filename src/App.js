import React, { useEffect, useState } from "react";
import Form from "./components/Form";
import Header from "./components/Header";
import "./App.css";
import TodosList from "./components/TodosList";

function App() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [editTodo, setEditTodo] = useState(null);
  const [currTodo, setCurrTodo] = useState(1);

  return (
    <div className="container">
      <div className="app-wrapper">
        <Header />
        <Form
          input={input}
          setInput={setInput}
          todos={todos}
          setTodos={setTodos}
          editTodo={editTodo}
          setEditTodo={setEditTodo}
        />
        <TodosList
          todos={todos}
          setTodos={setTodos}
          setEditTodo={setEditTodo}
        />
      </div>
    </div>
  );
}

export default App;
