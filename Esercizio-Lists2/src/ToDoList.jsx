import { useState } from "react";

function ToDoList() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  function handleAddTodos() {
    if (input !== "") {
      setTodos([...todos, input]);
      setInput("");
    }
  }

  function handleReset() {
    setTodos([]);
  }

  function handleRemove(i) {
    const newTodos = [...todos];
    newTodos.splice(i, 1);
    setTodos(newTodos);
  }

  return (
    <>
      <ul>
        {todos.map((todo, i) => (
          <li key={`toDosFirstGroup-${i}`}>
            {todo}
            <button className="btn-remove" onClick={() => handleRemove(i)}>
              Rimuovi
            </button>
          </li>
        ))}
      </ul>
      <div className="container">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="btn-add" onClick={handleAddTodos}>
          Aggiungi
        </button>
        <button className="btn-reset" onClick={handleReset}>
          Reset
        </button>
      </div>
    </>
  );
}

export default ToDoList;
