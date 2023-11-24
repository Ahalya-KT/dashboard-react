import React from "react";

function SidebarBtn({ title, icons }) {
  return (
    <div className="flex gap-3 px-5 items-center border-r border-t border-b h-16 rounded-md hover:bg-sky-300 hover:ring-sky-300">
      <p>{icons}</p>
      <p className="text-xl font-semibold py-3">{title}</p>
    </div>
  );
}

export default SidebarBtn;
