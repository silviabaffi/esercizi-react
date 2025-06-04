import { useState } from "react";
import useGithubUser from "./useGithubUser";

function GithubUserSearch() {
  const [username, setUsername] = useState("");
  const { user, error, loading, fetchUser } = useGithubUser();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username !== "") {
      fetchUser(username);
    }
  };

  return (
    <div>
      <h3>Cerca utente GitHub</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Inserisci username"
        />
        <button type="submit">Cerca</button>
      </form>

      {user && (
        <div>
          <h2>{user.name}</h2>
          <p>Username: {user.login}</p>
          <img src={user.avatar_url} alt="" />
        </div>
      )}
    </div>
  );
}

export default GithubUserSearch;
