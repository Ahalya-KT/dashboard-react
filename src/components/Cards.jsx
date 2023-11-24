import React from "react";

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
    <div className=" flex flex-col  items-center justify-center  w-80 h-80 bg-white shadow-md ">
      <div className="flex flex-col gap-2">
        <p className="font-semibold text-2xl">{title}</p>
        <p className="text-xs">{amnt}</p>
        <p className="text-xl">{amunt2}</p>
        <p>{button}</p>
      </div>
      <div className="flex flex-col gap-2">
        <p>{subtitle}</p>
        <p>{user}</p>
        <p>{storage}</p>
        <p>{email}</p>
        <p>{feature}</p>
      </div>
    </div>
  );
}

export default Cards;
