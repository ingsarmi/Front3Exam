import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Routes/Home";
import Detail from "./Routes/Detail";
import Favs from "./Routes/Favs";
import Contact from "./Routes/Contact";
import { ContextGlobal } from "./Components/utils/global.context";
import { useContext } from "react";

function App() {
  const { state } = useContext(ContextGlobal);

  const { theme } = state;
  return (
    <div className={`App ${theme === "dark" ? "dark" : ""}`}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="dentist/:id" element={<Detail />} />
        <Route path="favs" element={<Favs />} />
        <Route path="contacto" element={<Contact />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
