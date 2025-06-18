// src/components/NavButton.jsx
import { Link } from "react-router-dom";
function NavButton({ text, href="#" }) {
  return (
    <a
      href={href}
      className="inline-flex items-center px-6 py-3 text-black bg-[#dfaa05] rounded-md hover:bg-[#4d208d]/70 hover:text-[#dfaa05] transition-colors duration-200 cursor-pointer"
    >
      {text}
    </a>
  );
}

export default NavButton;
