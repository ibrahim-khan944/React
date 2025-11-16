import { NavLink, Outlet } from "react-router";

export default function College() {
  return (
    <div>
      <h1>College Page</h1>
      <div>
        <NavLink className='nested' to='student'>Student</NavLink>
        <NavLink className='nested' to='department'>Department</NavLink>
        <NavLink className='nested' to='detail'>College Detail</NavLink>
      <Outlet />
      </div>
      <div>

      </div>
    </div>
  )
}