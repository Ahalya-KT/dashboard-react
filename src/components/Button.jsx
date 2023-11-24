import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
function Button({ color }) {
  return (
    <div>
      <button
        className={
          " text-white w-32 h-8 rounded-md text-xs font-semibold flex items-center justify-center gap-6  " +
          color
        }
      >
        Get Started
        <FaLongArrowAltRight size={30} />
      </button>
    </div>
  );
}

export default Button;
