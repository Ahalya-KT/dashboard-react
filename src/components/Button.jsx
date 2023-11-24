import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
function Button() {
  return (
    <div>
      <button className=" bg-red-300 text-white w-32 h-8 rounded-md flex items-center justify-center gap-6 text-xl">
        title
        <FaLongArrowAltRight size={30} />
      </button>
    </div>
  );
}

export default Button;
