import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import NotFound from "./pages/NotFound/NotFound";
import Landing from "./pages/Landing/Landing";
import Busqueda from "./pages/Busqueda/Busqueda";
function App() {
  return (
    <div className="App text-center font-body">
      <Routes>
        {/* <Redirect from="/" to="/home" /> */}
        <Route path="/" element={<Landing />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Busqueda" element={<Busqueda />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
