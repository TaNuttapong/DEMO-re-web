
import './App.css';
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import DetailsPage from "./pages/DetailsPage";
import Navbar from './components/Navbar';
import './input.css'

function App() {
  return (
    <div className="bg-gradient-to-b from-[#FF33FF] to-[#6495ED]" >
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/details" element={<DetailsPage />} />
      </Routes>
    </div>
  );
}
export default App;

