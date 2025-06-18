import React, { useState } from 'react';
import ContactCard from '../components/contactcard';
import NavButton from '../components/navbtn';
import ScrollingBackground from '../components/scrollingtext';

const Contact = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center text-white px-4 py-10">

      <ScrollingBackground text="SHAASTRA" />
      <div className="w-full sm:hidden text-center mb-4">
        <button
          onClick={toggleMenu}
          className="bg-[#dfaa05] text-[#4d208d] border-[#4d208d] font-bold px-8 py-5 text-xl rounded-lg shadow-md hover:bg-[#4d208d] hover:text-[#dfaa05] transition-all w-full max-w-xs"
          style={{ minWidth: '200px', fontSize: '25px', textShadow: '0 1px 2px #000' margin-top:'-10px' }}
        >
          Contact Us ☰
        </button>
        {menuOpen && (
          <div className="mt-2 bg-[#6b2bc5] p-4 rounded-lg shadow-lg text-white flex flex-col gap-1" style={{ textShadow: '0 1px 1px #000' }}>
            <NavButton text="Home" href="/" className="w-full min-w-[500px]" />
            <NavButton text="Events" href="/events" className="w-full min-w-[500px]" />
            <NavButton text="Competitions" href="/competitions" className="w-full min-w-[500px]" />
            <NavButton text="Contact" href="/contact" className="w-full min-w-[500px]" />
          </div>
        )}
        <p className="mt-3 text-[#dfaa05] text-base px-4" style={{ textShadow: '0 1px 4px #000' }}>
          Reach out to us for any queries, suggestions or collaboration opportunities.
        </p>
      </div>
      <h1
        className="hidden sm:block text-4xl font-bold text-center mb-2 text-[#dfaa05]"
        style={{ textShadow: '0 2px 8px #000' }}
      >
        Contact Us
      </h1>
      <p className="hidden sm:block text-center text-[#dfaa05] mb-8 text-lg max-w-2xl" style={{ textShadow: '0 1px 6px #000' }}>
        Reach out to us for any queries, suggestions or collaboration opportunities.
      </p>
      <div className="flex justify-center items-center">
        <ContactCard />
      </div>
    </div>
  );
};

export default Contact;
