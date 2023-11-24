import React from "react";
import { CiUser } from "react-icons/ci";
import { TiCloudStorageOutline } from "react-icons/ti";
import { MdOutlineMailOutline } from "react-icons/md";

function Cards({
  title,
  amnt,
  amunt2,
  button,
  subtitle,
  user,
  storage,
  email,
  feature,
}) {
  return (
    <div className=" flex flex-col  items-center justify-center   bg-white shadow-md px-20 py-10 ">
      <div className="flex flex-col gap-2 ">
        <p className="font-semibold text-2xl">{title}</p>
        <p className="text-xs">{amnt}</p>
        <p className="text-xl">{amunt2}</p>
        <p>{button}</p>
      </div>
      <div className="flex flex-col gap-2">
        <p>{subtitle}</p>
        <p className="flex gap-2">
          <CiUser />
          {user}
        </p>
        <p className="flex gap-2">
          <TiCloudStorageOutline /> {storage}
        </p>
        <p className="flex gap-2">
          <MdOutlineMailOutline />
          {email}
        </p>
        <p>{feature}</p>
      </div>
    </div>
  );
}

export default Cards;
