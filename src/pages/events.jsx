import React, { useState } from 'react';
import './competitions.css';
import Card from '../components/eventcard';
import NavButton from '../components/navbtn';
import ScrollingBackground from '../components/scrollingtext';

const schedule = {
  day1: [
    { name: 'Opening Ceremony', date: '2026-01-21', location: 'Main Hall', description: 'Kick-off and welcome note.' },
    { name: 'Keynote: Future of AI', date: '2026-01-21', location: 'Auditorium A', description: 'A keynote session with industry experts.' },
  ],
  day2: [
    { name: 'React Workshop', date: '2026-01-22', location: 'Lab 1', description: 'Hands-on React.js workshop.' },
    { name: 'Panel Discussion: Ethics in Tech', date: '2026-01-22', location: 'Auditorium B', description: 'Experts discuss the impact of tech on society.' },
  ],
  day3: [
    { name: 'Hackathon Demo', date: '2026-01-23', location: 'Tech Park', description: 'Teams present their hackathon projects.' },
    { name: 'Closing Ceremony', date: '2026-01-23', location: 'Main Hall', description: 'Prize distribution and closing note.' },
  ],
};

const EventSchedule = () => {
  const [activeDay, setActiveDay] = useState('day1');
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggle = (day) => setActiveDay(day);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center text-white px-4 py-10">
      <ScrollingBackground />

      <div className="w-full sm:hidden text-center mb-4">
        <button
          onClick={toggleMenu}
          className="bg-[#dfaa05] text-[#4d208d] border-[#dfaa05] font-bold px-8 py-5 text-xl rounded-lg shadow-lgS hover:bg-[#dfaa05] hover:text-[#4d208d] transition-all w-full max-w-xs"
          style={{ minWidth: '200px', fontSize: '30px', textShadow: '0 1px 2px #000' }}
        >
          Event Schedule
        </button>
        {menuOpen && (
          <div className="mt-2 bg-[#6b2bc5] p-4 rounded-lg shadow-lg text-white flex flex-col gap-1" style={{textShadow: '0 1px 1px #000' }}>
            <NavButton text="Home" href="/" className="w-full min-w-[500px]" />
            <NavButton text="Events" href="/events" className="w-full min-w-[500px]" />
            <NavButton text="Competitions" href="/competitions" className="w-full min-w-[500px]" />
            <NavButton text="Contact" href="/contact" className="w-full min-w-[500px]" />
          </div>
        )}
      </div>

      <h1
        className="hidden sm:block text-4xl font-bold text-center mb-10 text-[#dfaa05]"
        style={{ textShadow: '0 2px 8px #000' }}
      >
        Event Schedule
      </h1>

      {/* Day Toggle Buttons */}
      <div className="flex flex-wrap gap-4 mb-8 justify-center">
        <button
          className={`px-6 py-3 font-bold rounded-lg shadow-md transition-all ${activeDay === 'day1' ? 'bg-[#dfaa05] text-[#4d208d]' : 'bg-[#6b2bc5] text-white'}`}
          onClick={() => handleToggle('day1')}
        >
          Day 1
        </button>
        <button
          className={`px-6 py-3 font-bold rounded-lg shadow-md transition-all ${activeDay === 'day2' ? 'bg-[#dfaa05] text-[#4d208d]' : 'bg-[#6b2bc5] text-white'}`}
          onClick={() => handleToggle('day2')}
        >
          Day 2
        </button>
        <button
          className={`px-6 py-3 font-bold rounded-lg shadow-md transition-all ${activeDay === 'day3' ? 'bg-[#dfaa05] text-[#4d208d]' : 'bg-[#6b2bc5] text-white'}`}
          onClick={() => handleToggle('day3')}
        >
          Day 3
        </button>
      </div>

      {/* Event Cards */}
      <div className="w-full max-w-6xl grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-items-center">
        {schedule[activeDay].map((event, idx) => (
          <Card
            key={idx}
            title={event.name}
            description={event.description}
            date={event.date}
            venue={event.location}
          />
        ))}
      </div>
    </div>
  );
};

export default EventSchedule;
