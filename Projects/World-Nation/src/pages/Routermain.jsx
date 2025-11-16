import { Link, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Country from '../pages/Country';
import Contact from "../pages/Contact";
import PageNotFound from "../pages/Pagenot";
import { Countrydetails } from "../component/layout/countrydetails";

function RouterMain() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/country" element={<Country />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/*" element={<PageNotFound />} />
        <Route path="country/:id" element={<Countrydetails />} />
      </Routes>
    
    </>
  )
}
export default RouterMain
