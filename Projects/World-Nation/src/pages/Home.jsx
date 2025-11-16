import Footer from "../component/UI/footer";
import Header from "../component/UI/header";
import Herosection from "../component/UI/herosection";
import About from "./About";
import Contact from "./Contact";
import Country from "./Country";

function Home() {
  return (
    <>
    
      <Herosection />
      <About />
      <Country />
      <Contact />
      <Footer />

    </>
  )
}
export default Home;