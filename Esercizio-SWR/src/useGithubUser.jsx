import useSWR from "swr";
import fetcher from "./fetcher.js";

function useGithubUser(username) {
  const { data, error, isLoading, mutate } = useSWR(
    username ? `https://api.github.com/users/${username}` : null,
    fetcher
  );

  function handleRefresh() {
    mutate();
  }

  return {
    user: data,
    error,
    isLoading,
    onRefresh: handleRefresh,
  };
}

export default useGithubUser;
