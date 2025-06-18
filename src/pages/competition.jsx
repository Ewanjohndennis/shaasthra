import React, { useState } from 'react';
import './competitions.css';
import Card from '../components/eventcard';
import NavButton from '../components/navbtn'; // Make sure path is correct
import ScrollingBackground from '../components/scrollingtext';

const competitions = [
    { name: 'React Hackathon', date: '2026-01-21', location: 'Model Engineering College, Kochi', description: 'A 48-hour hackathon focused on building innovative React applications.', award: '1st Place' },
    { name: 'Frontend Masters Challenge', date: '2026-01-21', location: 'Model Engineering College, Kochi', description: 'A competition for frontend developers to showcase their skills.', award: 'Finalist' },
    { name: 'Competition 1', date: '2026-01-21', location: 'Model Engineering College, Kochi', description: 'Description for Competition 1' },
    { name: 'Competition 2', date: '2026-01-21', location: 'Model Engineering College, Kochi', description: 'Description for Competition 2' },
    { name: 'CodeFest Global', date: '2026-01-21', location: 'Model Engineering College, Kochi', description: 'An international coding festival with multiple tracks and workshops.', award: 'Participant' },
    { name: 'AI Innovation Cup', date: '2026-01-21', location: 'Model Engineering College, Kochi', description: 'A competition focused on AI-driven solutions for real-world problems.', award: 'Top 10' },
];


const Competition = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => setMenuOpen(!menuOpen);

    return (
        <div className="relative min-h-screen flex flex-col items-center justify-center text-white px-4 py-10">

            <ScrollingBackground />
            <div className="w-full sm:hidden text-center mb-4">
                <button
                    onClick={toggleMenu}
                    className="bg-[#dfaa05] text-[#4d208d] border-[#4d208d] font-bold px-8 py-5 text-xl rounded-lg shadow-md hover:bg-[#4d208d] hover:text-[#dfaa05] transition-all w-full max-w-xs"
                    style={{ minWidth: '200px', textShadow: '0 2px 1px #000', fontSize: '30px' }}
                >
                    Competitions
                </button>
                {menuOpen && (
                    <div className="mt-2 bg-[#6b2bc5] p-4 rounded-lg shadow-lg text-white flex flex-col gap-1" style={{textShadow: '0 1px 1px #000'}}>
                        <NavButton text="Home" href="/" className="w-full min-w-[500px]" />
                        <NavButton text="Events" href="/events" className="w-full min-w-[500px]" />
                        <NavButton text="Competitions" href="/competitions" className="w-full min-w-[500px]" />
                        <NavButton text="Contact" href="/contact" className="w-full min-w-[500px]" />
                    </div>
                )}
            </div>

            {/* DESKTOP TITLE (NO DROPDOWN) */}
            <h1
                className="hidden sm:block text-4xl font-bold text-center mb-10 text-[#dfaa05]"
                style={{ textShadow: '0 2px 8px #000' }}
            >
                Competitions
            </h1>

            {/* COMPETITION CARDS */}
            <div className="w-full max-w-6xl grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-items-center">
                {competitions.map((comp, idx) => (
                    <Card
                        key={idx}
                        title={comp.name}
                        description={comp.description}
                        date={comp.date}
                        venue={comp.location}
                    />
                ))}
            </div>
        </div>
    );
};

export default Competition;
