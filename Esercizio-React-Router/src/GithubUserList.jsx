import { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";

function GithubUserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <>
      <div>
        <h2>List of Github Users:</h2>
        <ul>
          {users.map((user) => (
            <li key={user.login}>
              <Link to={user.login}>{user.login}</Link>
            </li>
          ))}
        </ul>
        <Outlet />
      </div>
    </>
  );
}

export default GithubUserList;
