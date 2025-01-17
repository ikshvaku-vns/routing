import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <div>
      <nav>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/login">
          <li>Login</li>
        </Link>
        <Link to="/SignUp">
          <li>SignUp</li>
        </Link>
      </nav>
    </div>
  );
}
