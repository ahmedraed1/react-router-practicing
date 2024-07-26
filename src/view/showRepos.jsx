import { useParams } from "react-router-dom";
export default function ShowRepos() {
  const { username } = useParams();
  return <div className="m-5 text-red-400">{username}</div>;
}
