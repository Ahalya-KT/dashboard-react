import React from "react";

function Connectbtn({ color }) {
  return (
    <div>
      <button
        className={"px-2 py-1  rounded-md  text-sm bg-slate-500" + color}
      ></button>
    </div>
  );
}

export default Connectbtn;
