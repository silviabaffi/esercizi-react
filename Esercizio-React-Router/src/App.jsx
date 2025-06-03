import { Route, Routes, Link } from "react-router-dom";
import "./App.css";
import Welcome from "./Welcome";
import Counter from "./Counter";
import ShowGithubUser from "./ShowGithubUser";
import GithubUserList from "./GithubUserList";

function App() {
  return (
    <div>
      <nav>
        <ul className="ul-nav">
          <li>
            <Link to="/">Welcome</Link>
          </li>
          <li>
            <Link to="/counter">Counter</Link>
          </li>
          <li>
            <Link to="/users">Github Users</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Welcome name="Silvia" />} />
        <Route
          path="/counter"
          element={<Counter initialValue={0} changingValue={1} />}
        />
        <Route path="/users" element={<GithubUserList />}>
          <Route index element={<p>Add a user and select it</p>} />
          <Route path=":username" element={<ShowGithubUser />} />
        </Route>
        <Route path="*" element={<h2>404 - Page not found</h2>} />
      </Routes>
    </div>
  );
}

export default App;
