import { useEffect, useState } from "react";

function GithubUser({ username }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then((response) => response.json())
      .then((data) => setUser(data));
  }, [username]);

  if (!user) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>{user.login}</h2>
      <img src={user.avatar_url} width={100} />
    </div>
  );
}

export default GithubUser;
