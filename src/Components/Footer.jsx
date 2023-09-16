import React, { useContext } from "react";
import { ContextGlobal } from "./utils/global.context";

const Footer = () => {
  const { state } = useContext(ContextGlobal);
  const { theme } = state;

  return (
    <footer className={theme === "dark" ? "dark" : ""}>
      <div>
        <p>Powered by</p>
        <img src="../../public/images/DH.png" alt="DH-logo" />
      </div>
      <div>
        <ul className="social-icons">
          <li>
            <i className="fa-brands fa-facebook"></i>
          </li>
          <li>
            <i className="fa-brands fa-instagram"></i>
          </li>
          <li>
            <i className="fa-brands fa-tiktok"></i>
          </li>
          <li>
            <i className="fa-brands fa-whatsapp"></i>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
