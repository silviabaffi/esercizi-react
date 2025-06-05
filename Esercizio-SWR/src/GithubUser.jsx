import useGithubUser from "./useGithubUser";

function GithubUser({ username }) {
  const { user, error, isLoading, onRefresh } = useGithubUser(username);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p style={{ color: "red" }}>Error: No User Found</p>;
  }
  if (!user) {
    return null;
  }

  return (
    <>
      <div className="user-container">
        <h2>{user.name}</h2>
        <img src={user.avatar_url} width={200} />
        <p>
          Profilo:{" "}
          <a href={`https://www.github.com/${user.login}`}>{user.login}</a>
        </p>
        <button onClick={onRefresh}>Refetch Data</button>
      </div>
    </>
  );
}

export default GithubUser;
