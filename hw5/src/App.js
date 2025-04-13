import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './components/Home';
import CropsForming from "./components/CropsForming";
import Equipment from "./components/Equipment";
import Plants from "./components/Plants";
import About from "./components/About";
import Contact from "./components/Contact";
import FootballTimezones from "./components/FootballTimezones";

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/crops-farming" element={<CropsForming/>} />
      <Route path="/equipment" element={<Equipment/>}/>
      <Route path="/plants" element={<Plants/>} />
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/football" element={<FootballTimezones apiKey="25a11a4e78msh338a55741ffe21ap1bd411jsn11b88279c3c3"/>}/>
      </Routes>
    </Router>
       
       
    
  );
}

export default App;
