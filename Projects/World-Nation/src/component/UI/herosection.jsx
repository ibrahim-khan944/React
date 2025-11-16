import { FaArrowRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";

function Herosection() {
  return (
    <main className="hero-section main">
      <div className="container grid grid-two-cols">
        <div className="hero-content">
          <h1 className="heading-xl">
            Explore The World, One Country at a Time .
          </h1>
          <p className="paragraph">
            Discover the History, Culture, and beauty of Every
            Nation . Search and Filter Through Countries to Find the Details.
          </p>
          <NavLink to={"/about"}>
          <button>Start Exploring <FaArrowRight /></button>
        </NavLink>
        </div>
        <div className="hero-image">
          <img src="/images/world.jpg" alt="world beauty" />
        </div>
      </div>
    </main>
  )
}
export default Herosection;