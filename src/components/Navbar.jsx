import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";

function Navbar({ toggleNavbar }) {
  return (
    <div className=" lg: flex justify-between items-center bg-teal-50  ">
      <div className="w-32 bg-white pl-5 pt-3 flex items-center">
        <GiHamburgerMenu className="lg:hidden" onClick={toggleNavbar} />

        <div className="w-10 lg:w-20">
          <img
            className="w-full h-full object-contain"
            src="https://png.pngtree.com/png-clipart/20211116/original/pngtree-letter-p-logo-design-vector-png-png-image_6943111.png"
          />
        </div>

        {/* <div className="flex justify-center py-20">
          <div className="w-0 h-0 border-t-[75px] border-t-red-500 border-r-[50px] border-r-transparent"></div>
        </div> */}
      </div>

      <nav className=" flex flex-row pr-10 gap-2">
        <div className="  bg-slate-50 shadow-md h-10 w-44 pl-3 pt-2 rounded-md">
          <p className="  font-semibold">Xyz@entrances.com</p>
        </div>
        <div className="  bg-slate-50 shadow-md rounded-md h-10 w-10 flex justify-center items-center  ">
          <IoIosArrowDown />
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
