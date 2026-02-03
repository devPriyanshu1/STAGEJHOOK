import { BrowserRouter, Routes, Route } from "react-router-dom";

import TopBar from "./components/common/TopBar";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import Portfolio from "./pages/Portfolio";
import Home from "./pages/Home";
import About from "./pages/About";
import ExhibitionCalendar from "./pages/ExhibitionCalendar";

function App() {
  return (
    <BrowserRouter>
      <TopBar />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/exhibition" element={<ExhibitionCalendar />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
