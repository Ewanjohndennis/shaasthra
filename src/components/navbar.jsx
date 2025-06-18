import { useLocation } from "react-router-dom";
import NavButton from "./navbtn";
import { useState, useEffect } from "react";

export default function Navbar() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  const isHome = location.pathname === "/";

  // ✅ Update screen size state on window resize
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // ✅ Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  // ✅ Decide when to show hamburger
  const showHamburger = (isHome && !isDesktop) || (!isHome && isDesktop);

  return (
    <div className="relative w-full z-50 overflow-x-hidden">
      {/* ✅ Topbar for HOME only */}
      {isHome && (
        <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 max-w-5xl w-[90%] px-6 py-4 flex justify-between items-center text-[#4d208d] border-b-2 border-[#8f5f13] rounded-xl shadow-2xl bg-[#6b2bc5] backdrop-blur-lg z-40">
          <h1 className="text-xl text-[#DFAA05] font-bold">SHAASTRA 2025</h1>
          <div className="hidden md:flex space-x-4" style={{textShadow: '0 1px 1px #000'}}>
            <NavButton text="Home" href="/" />
            <NavButton text="Events" href="/events" />
            <NavButton text="Competitions" href="/competitions" />
            <NavButton text="Contact" href="/contact" />
          </div>
        </nav>
      )}

      {/* ✅ Hamburger only on Home (Mobile) or Other Pages (Desktop) */}
      {showHamburger && (
        <button
          onClick={toggleMenu}
          className={`fixed top-5.5 ${
            isHome ? "right-10" : "left-4"
          } z-50 text-white bg-[#dfaa05] p-3 rounded-lg shadow-md hover:bg-[#5823a3] transition-all`}
        >
          ☰
        </button>
      )}

      {/* ✅ Dropdown Menu only if hamburger is visible */}
      {showHamburger && (
        <div
          className={`fixed top-0 ${
            isHome ? "right-0" : "left-0"
          } h-full w-64 bg-[#6b2bc5] text-white p-6 shadow-2xl transform transition-transform duration-300 z-40 ${
            menuOpen
              ? "translate-x-0"
              : isHome
              ? "translate-x-full"
              : "-translate-x-full"
          }`}
        >
          <div className="flex flex-col gap-4 mt-16" style={{textShadow: '0 1px 1px #000'}}>
            <NavButton text="Home" href="/" />
            <NavButton text="Events" href="/events" />
            <NavButton text="Competitions" href="/competitions" />
            <NavButton text="Contact" href="/contact" />
          </div>
        </div>
      )}
    </div>
  );
}
