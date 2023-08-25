import { Route, Routes } from "react-router-dom";
import { useState } from "react";

import Home from "@pages/Home";
import Details from "@pages/Details";
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div className={isDarkMode ? "app dark-theme" : "app"}>
      <Navbar setIsDarkMode={setIsDarkMode} isDarkMode={isDarkMode} />
      <div className="allPages">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details" element={<Details />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
