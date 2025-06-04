import { useState } from "react";

function useGithubUser() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  async function fetchUser(username) {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`https://api.github.com/users/${username}`);

      if (!response.ok) {
        throw new Error("Utente non presente su GitHub");
      }

      const json = await response.json();
      setUser(json);
    } catch (error) {
      setError(error.message);
      setUser(null);
    } finally {
      setLoading(false);
    }
  }

  return { user, error, loading, fetchUser };
}

export default useGithubUser;
