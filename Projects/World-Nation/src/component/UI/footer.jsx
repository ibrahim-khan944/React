
import footerData from "../../api/footerapi.json";
import { MdPlace } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";
import { TbMailPlus } from "react-icons/tb";

import { FaFacebookF, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";

function Footer() {
  const footericon = {
    MdPlace: <MdPlace />,
    IoCallSharp: <IoCallSharp />,
    TbMailPlus: <TbMailPlus />
  }
  return (
    <div className="footer-div">
      <footer className="footer-section">

        <div className="grid-three-cols">
          {
            footerData.map((item, index) => {
              const { icon, title, details } = item;
              return (
                <div className="footer-contact" key={index}>
                  <div className="icon"> {footericon[icon]} </div>
                  <div className="footer-contact-text">
                    <p>{title} </p>
                    <p>{details} </p>
                  </div>
                </div>
              )
            })
          }
        </div>
        <div className="footer-bottom">
          <p>© 2025 YourCompany. All rights reserved.</p>
          <div className="footer-socials">
            <a href="https://facebook.com" target="_blank" rel="noreferrer"><FaFacebookF /></a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer"><FaTwitter /></a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer"><FaInstagram /></a>
            <a href="https://github.com" target="_blank" rel="noreferrer"><FaGithub /></a>
          </div>
        </div>

      </footer>
    </div>

  );
}

export default Footer;