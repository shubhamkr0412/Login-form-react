import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div style={{ margin: "20px" }}>
      <Link to="/">Homepage</Link>
      <Link to="/dashboard" style={{ margin: "10px" }}>
        Dashboard
      </Link>
      <Link to="/settings">Settings</Link>
      <Link to="/login" style={{ margin: "10px" }}>
        Login
      </Link>
    </div>
  );
};
