import GithubUser from "./GithubUser"
import { useParams } from "react-router-dom";

function ShowGithubUser() {
    const { username } = useParams();
	return <GithubUser username={username} />
}

export default ShowGithubUser