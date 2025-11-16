import { Link, Outlet } from "react-router";

export default function Navbar() {
  return (
    <div>
      <div style={{
        display: "flex", justifyContent: "space-around",
        backgroundColor: "#ccc"
      }}>
        <Link to='/'><h2>Home</h2> </Link>
        <Link to={'/about'}> <h2> About</h2></Link>
        <Link to={'/user/login'}> <h2>Login</h2> </Link>
      </div>
      <Outlet />
    </div>
  )
}