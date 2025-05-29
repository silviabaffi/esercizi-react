import { useEffect, useState } from "react";

function GithubUser({ username }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        setUser(json);
      });
  }, [username]);

  return (
    <div className="user-container">
      {user && (
        <div>
          <img src={user.avatar_url} alt="user-avatar" />
        </div>
      )}
      {user && (
        <div className="name">
          <strong>{user.name}</strong>
        </div>
      )}
      {user && (
        <div className="username">
          <small>{user.login}</small>
        </div>
      )}
    </div>
  );
}

export default GithubUser;
