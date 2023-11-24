import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import SidebarBtn from "./SidebarBtn";
import { MdDashboard } from "react-icons/md";
import { PiPottedPlantDuotone } from "react-icons/pi";
import { MdContactSupport } from "react-icons/md";
import { RiQuestionnaireFill } from "react-icons/ri";
import { AiOutlineSlackSquare } from "react-icons/ai";
import { IoIosLogOut } from "react-icons/io";

function Sidebar() {
  return (
    <div className="py-1 w-56 ">
      {/* profile */}
      <div className="bg-white shadow-md w-52 h-44 px-5 py-5 ">
        <div className="pl-9">
          <img
            className="rounded-full w-16 h-16"
            src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          />
          <div className="flex">
            <p className="font-semibold">Ram Mohan</p>
            <IoIosArrowForward size={25} className="pt-2 text-teal-300" />
          </div>
        </div>
        <div>
          <p>rammohan2@gmail.com</p>
        </div>
      </div>

      {/* profile items */}
      <div className=" flex flex-col gap-5 py-5 w-52 rounded-md">
        <div className="border-r border-t border-b h-16 rounded-md hover:bg-sky-500 hover:ring-sky-500">
          <SidebarBtn
            title="Dashboard"
            icons={<MdDashboard size={30} className="text-cyan-500 pt-2" />}
          />
        </div>

        <div className="pr-14 border-r border-t border-b h-14 rounded-md hover:bg-sky-500 hover:ring-sky-500">
          <SidebarBtn
            title="Perk"
            icons={
              <PiPottedPlantDuotone size={30} className="text-cyan-500 pt-2" />
            }
          />
        </div>

        <div className="pr-9 border-r border-t border-b h-14 rounded-md hover:bg-sky-500 hover:ring-sky-500">
          <SidebarBtn
            title="Addons"
            icons={
              <AiOutlineSlackSquare size={30} className="text-cyan-500 pt-2" />
            }
          />
        </div>

        <div className="pr-14 border-r border-t border-b h-14 rounded-md hover:bg-sky-500 hover:ring-sky-500">
          <SidebarBtn
            title="FAQ"
            icons={
              <RiQuestionnaireFill size={30} className="text-cyan-500 pt-2" />
            }
          />
        </div>

        <div className="pr-8 border-r border-t border-b h-14 rounded-md hover:bg-sky-500 hover:ring-sky-500 ">
          <SidebarBtn
            title="Support"
            icons={
              <MdContactSupport size={30} className="text-cyan-500 pt-2" />
            }
          />
        </div>

        <div className=" bg-white shadow-md flex items-center justify-center gap-3 font-medium py-10">
          <p>LOG OUT</p>
          <IoIosLogOut size={30} className="text-cyan-500 " />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
