import React from "react";

function SidebarBtn({ title, icons }) {
  return (
    <div className="flex gap-3 justify-center items-center ">
      <p>{icons}</p>
      <p className="text-xl font-semibold py-3">{title}</p>
    </div>
  );
}

export default SidebarBtn;
