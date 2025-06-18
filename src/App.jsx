import { motion } from "framer-motion";
import Home from "./pages/home";
import Navbar from './components/navbar';
import Footer from './components/footer';
import LoadingScreen from './components/loader';
import AboutEvent from "./pages/about";
import Contact from "./pages/contact";
import Gallery from "./pages/gallery";
import BackButton from './components/backbutton';
import ScrollingBackground from "./components/scrollingtext";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import './App.css';
import Competition from "./pages/competition";
import EventSchedule from "./pages/events";

const LayoutWrapper = ({ children }) => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <>
      {!isHome && <BackButton />}

      {isHome && <ScrollingBackground word="SHAASTRA" />}

      <main className={isHome ? "pt-32" : "p-6"}>
        {children}
      </main>
    </>
  );
};

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000);
  }, []);
  const location = window.location;
  if (loading) return <LoadingScreen />;

  return (
    <Router>
      {location.pathname === "/" && <ScrollingBackground word="SHAASTRA" />}
      <Navbar />

      <LayoutWrapper>
        <Routes>
          <Route path="/" element={
            <>
              <Home />
              <AboutEvent />
              <Gallery />
            </>
          } />
          <Route path="/events" element={<EventSchedule />} />
          <Route path="/competitions" element={<Competition />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </LayoutWrapper>

      <Footer />
    </Router>
  );
}

export default App;
