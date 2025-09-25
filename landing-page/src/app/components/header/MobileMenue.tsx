

import { useState } from "react";
import { Burger } from "../Icons/Icons";
import NavMobil from "./NavMobil";


const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden relative">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="cursor-pointer"
      >
        <Burger />
      </button>

      <div
        className={`absolute transition-all duration-500 ${
          isOpen ? "scale-100 translate-x-0" : "scale-0 -translate-x-[300px]"
        }`}
      >
        <NavMobil />
      </div>
    </div>
  );
};

export default MobileMenu;