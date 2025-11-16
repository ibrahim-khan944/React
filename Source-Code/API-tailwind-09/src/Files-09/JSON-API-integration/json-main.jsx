
import { NavLink, Route, Routes } from "react-router"
import UserAdd from "./userAdd"
import UserList from "./userlist"
import UserEdit from "./editUser"
function JsonApi() {

  return (
    <>
      <h2 className="apih1">Apply API Methods</h2>
       <ul className="link-style">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to={"/add"}>Add User</NavLink>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/add" element={<UserAdd />} />
        <Route path="/edit/:id" element={<UserEdit />} />
      </Routes>
    </>
  )
}

export default JsonApi
