import useForm from "./useForm";

function Form() {
  const { username, password, handleChange } = useForm("");

  return (
    <>
      <form>
        <label>Username:</label>
        <input
          type="text"
          name="username"
          value={username}
          onChange={handleChange}
          placeholder="Enter your username"
        />
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          placeholder="Enter your password"
        />
        <button type="submit" onClick={handleChange}>
          Login
        </button>
      </form>
    </>
  );
}

export default Form;
