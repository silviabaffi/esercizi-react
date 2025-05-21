function UncontrolledLogin() {
  function onLogin(e) {
    e.preventDefault();
    const form = e.target.form;

    const username = form.username.value;
    const password = form.password.value;
    const remember = form.remember.checked;

    console.log("Username: ", username);
    console.log("Password: ", password);
    console.log("Remember: ", remember);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const form = e.target.form;

    const username = form.username.value;
    const password = form.password.value;
    const remember = form.remember.checked;

    console.log("Username: ", username);
    console.log("Password: ", password);
    console.log("Remember: ", remember);
  }

  function loginWithFormData(e) {
    e.preventDefault();
    const form = e.target.form;

    const formData = new FormData(form);
    const username = formData.get("username");
    const password = formData.get("password");
    const remember = formData.get("remember");

    console.log("Username: ", username);
    console.log("Password: ", password);
    console.log("Remember: ", remember);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Username:</label>
      <input
        className="input1"
        type="text"
        name="username"
        placeholder="Enter your username"
      />

      <label>Password:</label>
      <input
        className="input1"
        type="password"
        name="password"
        placeholder="Enter your password"
      />

      <div className="remember">
        <input type="checkbox" name="remember" />
        <label>Remember me</label>
      </div>

      <button type="submit" onClick={onLogin}>
        Login
      </button>
      <button type="button" onClick={loginWithFormData}>
        Login With Form Data
      </button>
    </form>
  );
}

export default UncontrolledLogin;
