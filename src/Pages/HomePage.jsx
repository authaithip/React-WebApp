import React, { useState } from "react";
import NewTask from "../Components/NewTask";
import TodoItem from "../Components/TodoItem";

function HomePage() {
  const [todos, setTodos] = useState([]);
  const addTask = (task) => {
    setTodos((prevtodos) => [...prevtodos, task]);
  };
  return (
    <>
      <NewTask addTask={addTask} />
      <ul className="bg-gray-200 rounded-md shadow-sm p-4">
        {todos.map((todo, i) => (
          <TodoItem key={i} id={i} todo={todo} />
        ))}
      </ul>
    </>
  );
}

export default HomePage;
