import React from "react";

function Lastcards({
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
    <div className="flex items-center justify-center px-6  bg-white shadow-md  gap-5">
      <div className="flex flex-col gap-2 w-1/2">
        <p className="text-2xl font-semibold">{title}</p>
        <p className="w-56">{subtitle}</p>
        <p>{button}</p>
      </div>
      <div className="flex flex-col gap-1">
        <p>{category}</p>
        <p>{user}</p>
        <p>{store}</p>
        <p>{mail}</p>
        <p className="w-96">{about}</p>
      </div>
    </div>
  );
}

export default Lastcards;
