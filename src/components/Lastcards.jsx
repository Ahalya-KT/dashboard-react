import React from "react";
import { CiUser } from "react-icons/ci";
import { TiCloudStorageOutline } from "react-icons/ti";
import { MdOutlineMailOutline } from "react-icons/md";
import Connectbtn from "./Connectbtn";

function Lastcards({
  btn,
  title,
  subtitle,
  button,
  category,
  user,
  store,
  mail,
  about,
}) {
  return (
    <div className="flex items-center w-full justify-center px-5   h-56  bg-white shadow-md  gap-10">
      <div className="flex flex-col gap-4 w-1/2  ">
        {/* connect btn */}
        <p>{btn}</p>
        <p className="text-2xl font-semibold">{title}</p>
        <p className="text-xs">{subtitle}</p>
        <p>{button}</p>
      </div>
      <div className="flex flex-col gap-1 text-xs">
        <p>{category}</p>
        <p className="flex gap-3">
          <CiUser />
          {user}
        </p>
        <p className="flex gap-3">
          <TiCloudStorageOutline />
          {store}
        </p>
        <p className="flex gap-3">
          <MdOutlineMailOutline />
          {mail}
        </p>
        <p className="text-xs break-words ">{about}</p>
      </div>
    </div>
  );
}

export default Lastcards;
