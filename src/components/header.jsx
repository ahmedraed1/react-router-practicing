import { Outlet, Link } from "react-router-dom";
export default function Header() {
  return (
    <>
      <nav>
        <ul role="nav">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/repo/user1">Repo</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
}
