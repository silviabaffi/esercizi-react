import useCounter from "./useCounter";
import useForm from "./useForm";
import useGithubUser from "./useGithubUser";
import { useState } from "react";
import useCurrentLocation from "./useCurrentLocation";

function App() {
  const { counter, increment, decrement, reset } = useCounter(0);
  const { username, password, handleUsername, handlePassword } = useForm();
  const [search, setSearch] = useState("");
  const { user, error, loading, fetchUser } = useGithubUser();

  const { location, locationLoading, locationError, handleLocation } =
    useCurrentLocation();

  if (error || locationError) {
    return <div style={{ color: "red" }}>Error: NO POSITION FOUND</div>;
  }

  if (loading) {
    return <div>Loading GitHub user...</div>;
  }

  if (locationLoading) {
    return <div>Getting location...</div>;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchUser(search);
  };

  return (
    <div>
      <h2>Counter to {counter}</h2>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Reset</button>

      <hr />

      <div>
        <h2>Form</h2>
        <div>{username}</div>
        <div>{password}</div>
      </div>
      <div>
        <label>Username:</label>
        <input type="text" onChange={handleUsername} />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" onChange={handlePassword} />
      </div>

      <hr />

      <h2>GitHub User</h2>
      <form onSubmit={handleSubmit}>
        <label>Utente GitHub:</label>
        <input type="text" onChange={(e) => setSearch(e.target.value)} />
        <input type="submit" value="Cerca" />
      </form>
      {user && <img src={user.avatar_url} width={200} />}

      <hr />

      <h2>Location:</h2>
      <button onClick={handleLocation}>Get Location</button>
      {location && (
        <>
          <div>{location.latitude}</div>
          <div>{location.longitude}</div>
        </>
      )}
    </div>
  );
}

export default App;
