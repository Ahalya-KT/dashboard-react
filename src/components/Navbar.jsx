import React from "react";
import { IoIosArrowDown } from "react-icons/io";

function Navbar() {
  return (
    <div className=" lg: flex justify-between items-center bg-teal-50">
      <div className="w-32 bg-white pl-5 pt-3">
        <img
          className="w-20"
          src="https://png.pngtree.com/png-clipart/20211116/original/pngtree-letter-p-logo-design-vector-png-png-image_6943111.png"
        />
        {/* <div className="flex justify-center py-20">
          <div className="w-0 h-0 border-t-[75px] border-t-red-500 border-r-[50px] border-r-transparent"></div>
        </div> */}
      </div>

      <nav className=" lg: flex pr-10 gap-2">
        <div className=" lg: bg-slate-50 shadow-md h-10 w-44 pl-3 pt-2 rounded-md">
          <p className=" lg: font-semibold">Xyz@entrances.com</p>
        </div>
        <div className=" lg: bg-slate-50 shadow-md rounded-md h-10 w-10 flex justify-center items-center  ">
          <IoIosArrowDown />
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
