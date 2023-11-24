import React from "react";

function Connectbtn({ color, title }) {
  return (
    <div>
      <button className={"px-5 py-1  rounded-xl  text-sm " + color}>
        
        {title}
      </button>
    </div>
  );
}

export default Connectbtn;
