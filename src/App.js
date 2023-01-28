import "./App.css";
import Nav from "./components/Nav.jsx";
import Home from "./pages/Home.jsx";
import Fishes from "./pages/Fishes.jsx";
import FishDetails from "./pages/FishDetails.jsx";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fishes" element={<Fishes />} />
        <Route path="/fishes/:id" element={<FishDetails />} />

      </Routes>
    </div>
  );
}

export default App;
