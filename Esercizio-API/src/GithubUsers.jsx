import { useState } from "react";
import GithubUser from "./GithubUser";

function GithubUsers() {
  const [input, setInput] = useState("");
  const [users, setUsers] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    if (input !== "") {
      setUsers(input);
      setInput("");
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter GitHub Username"
        />
        <button type="submit">Search</button>
      </form>

      <div>{users && <GithubUser username={users} />}</div>
    </div>
  );
}

export default GithubUsers;
