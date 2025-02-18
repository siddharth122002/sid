import React from "react";

function Navbar() {
  return (
    <div className="flex justify-between items-center">
      <p className="font-wireOne text-4xl">SID</p>
      <div className="h-3 w-14 flex justify-between items-center flex-col">
        <div className="w-full h-[1px] bg-black"></div>
        <div className="w-full h-[1px] bg-black"></div>
      </div>
    </div>
  );
}

export default Navbar;
