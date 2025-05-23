import { useState } from "react";

function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  function handleLogin(e) {
    e.preventDefault();
    onLogin({ username, password, remember });
  }

  function handleReset() {
    setUsername("");
    setPassword("");
    setRemember(false);
  }

  return (
    <form onSubmit={handleLogin}>
      <label className="label-username">Username:</label>
      <input
        className="input-form"
        type="text"
        name="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter your username"
      />
      <label className="label-psw">Password:</label>
      <input
        className="input-form"
        type="password"
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter your password"
      />
      <div className="remember">
        <input
          className="input-remember"
          type="checkbox"
          name="remember"
          checked={remember}
          onChange={(e) => setRemember(e.target.checked)}
        />
        <label className="label-remember">Remember me</label>
      </div>
      <button
        style={{
          color: "white",
          backgroundColor: password.length < 8 ? "red" : "green",
        }}
        type="submit"
        disabled={!username || !password}
        onClick={onLogin}
      >
        Login
      </button>
      <button onClick={handleReset}>Reset</button>
    </form>
  );
}

export default Login;
