import { useState, useEffect } from "react";

// Css
import "./css/index.css";
import "./css/app.css";

// Pages
import Home from "./pages/home/Home";
import Loader from "./components/global/Loader";
import SmoothScroll from "./components/global/SmoothScroll";

function App() {
  const [showHome, setShowHome] = useState(false);
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
      setShowHome(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <SmoothScroll>
      {showLoader && <Loader />}
      {showHome && (
        <div className="home-container">
          <Home />
        </div>
      )}
      </SmoothScroll>
    </>
  );
}

export default App;
