import React from 'react';
import './about.css';
const AboutEvent = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-8 py-20 bg-[#4d208d] text-center">
      <div className="max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold text-[#dfaa05] mb-6">
          About the Event
        </h1>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
          Shaasthra, the annual tech extravaganza of Model Engineering College (MEC), is more than just an event—it's a celebration of technology, innovation, and youthful energy. Nestled in the heart of Kerala's vibrant student ecosystem, Shaasthra brings together brilliant minds, cutting-edge ideas, and a passion for problem-solving, all under one dynamic platform.
        </p>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
          Every year, MEC transforms into a buzzing hive of activity, where code meets creativity and logic fuses with imagination. Shaasthra stands tall as a symbol of technological curiosity and excellence, hosting a wide spectrum of events ranging from high-octane hackathons and AI challenges to thought-provoking tech talks and interactive workshops. With themes deeply rooted in current and emerging technologies like machine learning, cybersecurity, AR/VR, robotics, and open source, Shaasthra offers participants an unmatched hands-on experience.
        </p>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
          But what truly sets Shaasthra apart is its inclusive and student-driven approach. From ideation to execution, the event is curated entirely by MEC students—future engineers and visionaries—infusing it with energy, relevance, and authenticity. The campus itself buzzes with color, creativity, and a spirit of collaboration, as tech enthusiasts from across the state and country gather to connect, compete, and create.   
        </p>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
          Adding a cultural layer to its core, Shaasthra beautifully blends Kerala’s heritage with futuristic tech themes—creating a space where tradition meets transformation. Whether you're a developer, designer, entrepreneur, or a curious learner, Shaasthra offers a space to grow, explore, and be inspired.

More than just a festival, Shaasthra is a launchpad for ideas, a network of innovators, and a celebration of the endless possibilities that technology brings. Step into MEC this season—witness the pulse of innovation and the future of tech unfold at Shaasthra.        </p>
      </div>
    </section>
  );
};

export default AboutEvent;
