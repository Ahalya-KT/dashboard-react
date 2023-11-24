import React from "react";

function MonthlyBtn() {
  return (
    <div>
      <div className="  bg-white  py-2 px-5  rounded-xl  flex justify-between items-center">
        Monthly
        <button className="  bg-cyan-400  rounded-xl h-9">Annually</button>
      </div>
    </div>
  );
}

export default MonthlyBtn;
