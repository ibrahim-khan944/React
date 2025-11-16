import { Link, NavLink, Route, Routes } from "react-router";
import UserList from "./userList";
import UserDetail from "./userdetail";

export default function DynamicRout() {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Dynamic Routing</h1>

      <NavLink to={'/user'}
        style={({ isActive }) => ({ color: isActive ? "red" : "blue" })}
      >Users</NavLink>
       <span> ........ </span>
      <Link to={'/user/list'}>Users</Link>

      <Routes>
        {/* static optional segment */}
        <Route path="/user/list?" element={<UserList />} />
        {/*   dynamic optinal segment*/}
        <Route path="/user/:id/:name?" element={<UserDetail />} />
      </Routes>
    </div>
  )
}