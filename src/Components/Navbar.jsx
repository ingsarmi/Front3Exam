import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { ContextGlobal } from "./utils/global.context";

const Navbar = () => {
  const { state, dispatch } = useContext(ContextGlobal);
  const { theme } = state;

  const toggleTheme = () => {
    dispatch({ type: "TOGGLE_THEME" });
  };

  const themeClass = theme === "dark" ? "dark" : "";

  return (
    <nav className={themeClass}>
      <div>
        <h1>Clinica Odontologica</h1>
      </div>
      <div className="link-container">
        <Link to="/">Home</Link>
        <Link to="/Contacto">Contact</Link>
        <Link to="/Favs">Favs</Link>
        <Outlet />
        <button onClick={toggleTheme}>
          Modo {theme === "light" ? "oscuro" : "claro"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
