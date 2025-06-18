import React from "react";
import "./home.css";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="text-center px-4 py-10 sm:px-6 md:px-10">
      <motion.section
        className="min-h-[75vh] flex flex-col justify-center items-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="mb-8 max-w-full overflow-hidden">
          <svg
            className="w-[90vw] max-w-[600px] h-auto"
            viewBox="0 0 911 107"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Logo"
          >
            <path d="M12.5 87.5V75H0V62.5H25V75H62.5V50H12.5V37.5H0V12.5H12.5V0H75V12.5H87.5V25H62.5V12.5H25V37.5H75V50H87.5V75H75V87.5H12.5ZM100 87.5V0H125V37.5H162.5V0H187.5V87.5H162.5V50H125V87.5H100ZM200 87.5V25H212.5V12.5H225V0H262.5V12.5H275V25H287.5V87.5H262.5V62.5H225V87.5H200ZM225 50H262.5V25H250V12.5H237.5V25H225V50ZM300 87.5V25H312.5V12.5H325V0H362.5V12.5H375V25H387.5V87.5H362.5V62.5H325V87.5H300ZM325 50H362.5V25H350V12.5H337.5V25H325V50ZM412.5 87.5V75H400V62.5H425V75H462.5V50H412.5V37.5H400V12.5H412.5V0H475V12.5H487.5V25H462.5V12.5H425V37.5H475V50H487.5V75H475V87.5H412.5ZM537.5 87.5V12.5H512.5V0H587.5V12.5H562.5V87.5H537.5ZM600 87.5V0H625V37.5H662.5V0H687.5V87.5H662.5V50H625V87.5H600ZM700 87.5V0H775V12.5H787.5V50H762.5V62.5H775V75H787.5V87.5H750V75H737.5V62.5H725V87.5H700ZM725 50H750V37.5H762.5V12.5H725V50ZM800 87.5V25H812.5V12.5H825V0H862.5V12.5H875V25H887.5V87.5H862.5V62.5H825V87.5H800ZM825 50H862.5V25H850V12.5H837.5V25H825V50Z" fill="#DFAA05" />
          </svg>
        </h1>

        <h1 className="text-xl sm:text-2xl font-bold text-[#dfaa05] max-w-xs sm:max-w-md md:max-w-2xl pt-6 sm:pt-10">
          Govt. Model Engineering College, Thrikkakara
        </h1>

        <h1 className="text-lg sm:text-xl font-bold text-[#dfaa05] max-w-xs sm:max-w-md md:max-w-xl pt-2">
          21st January, 2025
        </h1>
      </motion.section>
    </main>
  );
}
