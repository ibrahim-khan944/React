import { Link, Navigate, Route, Routes } from "react-router";
import Homenav from "./home";
import Aboutnav from "./about";
import Loginav from "./login";
import './header.css'
import PageNotFound from "./PagenotFound";
import College from "./Nested-college";
import StudentName from "./nested-Routing/student";
import DepatmentName from "./nested-Routing/department";
import CollegeDetail from "./nested-Routing/college-detail";
export default function NavBar() {
  return (
    <div>

      <div className="header">
        <div>
          <Link to={'/about'} className="link" id="logo"><h2>Logo</h2></Link>
        </div>
        <div>
          <ul>
            <li>
              <Link className="link" to='/'><h2>Home</h2></Link>
            </li>
            <li>
              <Link className="link" to='/about'><h2>About</h2></Link>
            </li>
            <li>
              <Link className="link" to='/login'><h2>Login</h2></Link>
            </li>
            <li>
              <Link className="link" to='/college'><h2>College</h2></Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="routes">
        <Routes>
          <Route path='/' element={<Homenav />} />
          <Route path='/about' element={<Aboutnav />} />
          <Route path='/login' element={<Loginav />} />
         
          <Route path='/college' element={<College />}>
            <Route path="student" element={<StudentName />} />
            <Route path="department" element={<DepatmentName />} />
            <Route path="detail" element={<CollegeDetail />} />
          </Route>

          {/* <p>code not found code</p> */}

          {/* <Route path="/*" element={<PageNotFound />} /> */}

          {/* <p>Redirect to Home</p> */}

          <Route path="/*" element={<Navigate to='/' />} />

        </Routes>
      </div>

    </div>
  )
}