import Link from "next/link";
import React from "react";

function Navbar({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <div className="flex fixed z-40 md:top-[50px] top-[30px] px-[20px] w-full  justify-between items-center left-0 md:px-[40px] overflow-y-hidden ">
      <a href={"/"}>
        <div className="hover:-translate-y-12 transition-all duration-500 h-[40px]">
          <p className="font-wireOne md:text-5xl text-4xl">SID</p>
          <p className="font-wireOne md:text-5xl text-4xl">SID</p>
        </div>
      </a>
      <div
        onClick={() => {
          setOpen((prev) => !prev);
        }}
        className="h-3 md:w-20 w-12  flex  items-center flex-col cursor-pointer  justify-center gap-[10px] hover:gap-0 transition-all duration-300"
      >
        <div className="w-full h-[1px] bg-black"></div>
        <div className="w-full h-[1px] bg-black"></div>
      </div>
    </div>
  );
}

export default Navbar;
