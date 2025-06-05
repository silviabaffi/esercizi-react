import "./App.css";
import { useState } from "react";
import GithubUser from "./GithubUser";

function App() {
  const [input, setInput] = useState("");
  const [search, setSearch] = useState(null);

  function handleChange(e) {
    setInput(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSearch(input);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={handleChange}
          placeholder="Enter username"
        />
        <button onClick={handleSubmit}>Search</button>
      </form>
      <GithubUser username={search} />
    </>
  );
}

export default App;
