import { Link } from "react-router";
import { Route, Routes } from "react-router";
import Home from "./homepage";
import About from "./Aboutpage";
import Loginpage from "./Loginpage";
import Navbar from "./Navbar";

function Routers() {
  return (
    <div style={{ textAlign: "center" }}>

      {/* <Navbar /> */}

      <Routes>
               {/* lay out route */}
        <Route element={<Navbar />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Route>
                 {/* Route prefix  */}
        {/* <Route path="user"> */}
        <Route path="/user/login" element={<Loginpage />} />
        {/* </Route> */}

      </Routes>

    </div>
  )
}
export default Routers;