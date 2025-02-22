import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";
import React, { useEffect } from "react";

function Menu({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  useGSAP(
    () => {
      if (open) {
        gsap.to(".menu", {
          translateX: "0%",
          duration: 1,
          ease: "power4.inOut",
        });
      } else {
        gsap.to(".menu", {
          translateX: "100%",
          duration: 1,
          ease: "power4.inOut",
        });
      }
    },
    { dependencies: [open] }
  );
  return (
    <>
      <div
        className={`menu bg-oranges h-[100vh] fixed top-0 left-0 z-[999] translate-x-[100%] w-full overflow-hidden`}
      >
        <div
          onClick={() => {
            setOpen((prev) => !prev);
          }}
          className="h-3 w-14 flex absolute top-[64px] right-[40px] justify-between items-center flex-col hover:cursor-pointer"
        >
          <div className="absolute top-1/2 left-1/2 w-full h-[1px] bg-white transform -translate-x-1/2 -translate-y-1/2 rotate-45"></div>
          <div className="absolute top-1/2 left-1/2 w-full h-[1px] bg-white transform -translate-x-1/2 -translate-y-1/2 -rotate-45"></div>
        </div>
        <ul
          style={{
            textShadow: "-3px 3px 0 #FF5733",
          }}
          className="uppercase text-white  font-alumniSans md:text-9xl text-7xl  h-full flex flex-col  justify-center pl-[10vw]"
        >
          <Link
            className="relative w-48 md:w-fit  md:mb-8 md:h-28 overflow-hidden "
            href={"#home"}
          >
            <li
              onClick={() => {
                setOpen((prev) => !prev);
              }}
            >
              <div className="flex -translate-x-6 hover:translate-x-0 transition-all duration-500">
                <p>.</p>
                <p className="translate-x-3">Home</p>
              </div>
            </li>
          </Link>
          <Link
            className="relative w-56 md:w-fit  md:mb-8 md:h-28 overflow-hidden "
            href={"#services"}
          >
            <li
              onClick={() => {
                setOpen((prev) => !prev);
              }}
            >
              <div className="flex -translate-x-6 hover:translate-x-0 transition-all duration-500">
                <p>.</p>
                <p className="translate-x-3">services</p>
              </div>
            </li>
          </Link>
          <Link
            className="relative w-56 md:w-fit  md:mb-8 md:h-28 overflow-hidden "
            href={"#projects"}
          >
            <li
              onClick={() => {
                setOpen((prev) => !prev);
              }}
            >
              <div className="flex -translate-x-6 hover:translate-x-0 transition-all duration-500">
                <p>.</p>
                <p className="translate-x-3">projects</p>
              </div>
            </li>
          </Link>
          <Link
            className="relative w-56 md:w-fit  md:mb-8 md:h-28 overflow-hidden "
            href={"#about"}
          >
            <li
              onClick={() => {
                setOpen((prev) => !prev);
              }}
            >
              <div className="flex -translate-x-6 hover:translate-x-0 transition-all duration-500">
                <p>.</p>
                <p className="translate-x-3">about</p>
              </div>
            </li>
          </Link>
          <Link
            className="relative w-56 md:w-fit  md:mb-8 md:h-28 overflow-hidden "
            href={"#contact"}
          >
            <li
              onClick={() => {
                setOpen((prev) => !prev);
              }}
            >
              <div className="flex -translate-x-6 hover:translate-x-0 transition-all duration-500">
                <p>.</p>
                <p className="translate-x-3">contact</p>
              </div>
            </li>
          </Link>
        </ul>
        <div
          style={{ clipPath: "ellipse(42% 49% at 46% 49%)" }}
          className="absolute bg-[#FFE5BC] w-[80vh] h-[80vh] rotate-45 -bottom-40 -right-[200px] z-[-1]"
        ></div>
        <div
          style={{ clipPath: "circle(50% at 50% 50%)" }}
          className="absolute md:top-32 top-[30vh] md:right-[24vw] right-10 bg-[#FFF1DA] md:w-[30vh] w-[10vh] z-[-1] h-[10vh] md:h-[30vh]"
        ></div>
      </div>
    </>
  );
}

export default Menu;
