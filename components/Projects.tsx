import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Image from "next/image";
import React, { useRef, useState } from "react";
gsap.registerPlugin(ScrollTrigger);
function Projects() {
  const [num, setNum] = useState<number>(1);

  const numRef = useRef<HTMLDivElement | null>(null);
  const secondRef = useRef<HTMLImageElement | null>(null);
  const thirdRef = useRef<HTMLImageElement | null>(null);
  const textRef = useRef<HTMLDivElement | null>(null);
  useGSAP(
    () => {
      gsap.to(".pin", {
        scrollTrigger: {
          trigger: ".pin",
          pin: true,
          pinSpacing: false,
          // markers: true,
          end: "top -200%",
        },
      });
      gsap.to(".second-img", {
        scrollTrigger: {
          trigger: ".second-img",
          // markers: true,
          start: "top 60%",
          scrub: true,
          onEnter: () => {
            if (numRef.current && textRef.current && secondRef.current) {
              setNum(2);
              (secondRef.current.style.opacity = "1"),
                (numRef.current.innerHTML = "02."),
                (textRef.current.innerHTML = "NARUTO CHATBOT");
            }
          },
          onLeaveBack: () => {
            if (numRef.current && textRef.current && secondRef.current) {
              setNum(1);
              (secondRef.current.style.opacity = "0"),
                (numRef.current.innerHTML = "01.");
              textRef.current.innerHTML = "Evently";
            }
          },
        },
      });
      gsap.to(".third-img", {
        scrollTrigger: {
          trigger: ".third-img",
          // markers: true,
          start: "top 60%",
          scrub: true,
          onEnter: () => {
            if (numRef.current && textRef.current && thirdRef.current) {
              setNum(3);
              (thirdRef.current.style.opacity = "1"),
                (numRef.current.innerHTML = "03.");
              textRef.current.innerHTML = "GALAXY";
            }
          },
          onLeaveBack: () => {
            if (numRef.current && textRef.current && thirdRef.current) {
              setNum(2);
              (thirdRef.current.style.opacity = "0"),
                (numRef.current.innerHTML = "02.");
              textRef.current.innerHTML = "NARUTO CHATBOT";
            }
          },
        },
      });
    },
    { dependencies: [], revertOnUpdate: false }
  );
  return (
    <div
      id="projects"
      className="text-oranges font-alumniSans pt-[230px] md:pt-[100px] px-[20px] md:px-[40px] "
    >
      <h1 className="uppercase font-semibold text-7xl md:text-[12vw]">
        projects
      </h1>
      <div className="text-[#3c3c3c] text-3xl md:text-5xl md:w-2/3 ">
        <p>
          A collection of projects, each crafted with a unique design. These
          projects highlight my expertise in frontend aesthetics, backend
          efficiency, and full-stack problem-solving.
        </p>
      </div>
      <div className="mt-[40px] bg-black h-[1px] w-full"></div>
      {/* mobile view */}
      <div className="mt-[30px] md:hidden">
        <div>
          <div className="w-full h-96 bg-red-800 flex justify-center items-center relative rounded-md overflow-hidden">
            <Image
              src={`/laptop.jpg`}
              className="object-cover "
              fill
              alt="laptop"
            />
            <div
              data-scroll
              data-scroll-speed="0.1"
              className="w-80 h-56 rounded-md overflow-hidden relative"
            >
              <video
                src="/evently-port.mp4"
                autoPlay
                muted
                loop
                className="object-cover  h-full w-full"
              />
            </div>
          </div>
          <h1 className="text-6xl my-[30px] uppercase font-bold text-[#1E1E1E]">
            01. Evently
          </h1>
        </div>
        <div>
          <div className="w-full h-96 bg-red-800 flex justify-center items-center relative rounded-md overflow-hidden">
            <Image
              src={`/naruto.jpg`}
              className="object-cover "
              fill
              alt="laptop"
            />
            <div
              data-scroll
              data-scroll-speed="0.1"
              className="w-80 h-56 rounded-md overflow-hidden relative"
            >
              <video
                src="/naruto-port.mp4"
                autoPlay
                muted
                loop
                className="object-cover  h-full w-full"
              />
            </div>
          </div>
          <h1 className="text-6xl my-[30px] uppercase font-bold text-[#1E1E1E]">
            02. Naruto Chatbot
          </h1>
        </div>
        <div>
          <div className="w-full h-96 bg-red-800 flex justify-center items-center relative rounded-md overflow-hidden">
            <Image
              src={`/galaxy.jpg`}
              className="object-cover "
              fill
              alt="laptop"
            />
            <div
              data-scroll
              data-scroll-speed="0.1"
              className="w-80 h-56 rounded-md overflow-hidden relative"
            >
              <video
                src="/galaxy-port.mp4"
                autoPlay
                muted
                loop
                className="object-cover  h-full w-full"
              />
            </div>
          </div>
          <h1 className="text-6xl my-[30px] uppercase font-bold text-[#1E1E1E]">
            03. Galaxy
          </h1>
        </div>
      </div>

      {/* desktop */}
      {/* pin this */}
      <div className="pin hidden md:flex h-screen  w-full  relative ">
        <div className="w-1/2">
          <div className="flex justify-between items-center">
            <p ref={numRef} className="text-9xl  font-bold text-[#1E1E1E]">
              01.
            </p>
            <div className="text-xl text-black mr-8 text-right ">
              <p
                className={`transition-all duration-1000 ${
                  num === 1 && "text-oranges"
                }`}
              >
                Evently
              </p>
              <p
                className={`transition-all duration-1000 ${
                  num === 2 && "text-oranges"
                }`}
              >
                Naruto Chatbot
              </p>
              <p
                className={`transition-all duration-1000 ${
                  num === 3 && "text-oranges"
                }`}
              >
                Galaxy
              </p>
            </div>
          </div>
          <div
            ref={textRef}
            className="absolute bottom-0 text-7xl xl:text-9xl font-bold text-[#1E1E1E]"
          >
            EVENTLY
          </div>
        </div>
        {/* right images */}
        <div className="w-1/2 text-white relative bg-green-500 ">
          <div className="relative w-full h-full transition-all duration-1000">
            <Image
              src={`/laptop.jpg`}
              className="object-cover transition-all duration-1000 bg-red-800 saturate-0"
              fill
              alt="laptop"
            />
            <Image
              ref={secondRef}
              src={`/naruto.jpg`}
              className="opacity-0 object-cover transition-all duration-1000 bg-red-800 saturate-0"
              fill
              alt="naruto"
            />
            <Image
              ref={thirdRef}
              src={`/galaxy.jpg`}
              className="opacity-0 object-cover transition-all duration-1000 bg-red-800 saturate-0"
              fill
              alt="galaxy"
            />
          </div>
        </div>
      </div>

      <div className="hidden md:flex  text-white w-full relative z-10 h-[200vh] -translate-y-[100vh]">
        {/* left side which is invisible */}
        <div className="w-1/2  h-[300vh]"></div>

        {/* right side images */}
        <div className="w-1/2  h-[300vh]">
          {/* evently */}
          <div className="h-screen w-full flex justify-center items-center ">
            <div className="relative w-96 bg-red-800 h-56 xl:w-[40vw] xl:h-[22.5vw] overflow-hidden rounded-md">
              <video
                src="/evently-port.mp4"
                autoPlay
                muted
                loop
                className="object-cover h-full w-full"
              />
            </div>
          </div>
          <div className="h-screen w-full flex justify-center items-center ">
            <div className="second-img relative w-96 bg-red-800 h-56 xl:w-[40vw] xl:h-[22.5vw] overflow-hidden rounded-md">
              <video
                src="/naruto-port.mp4"
                autoPlay
                muted
                loop
                className="object-cover h-full w-full"
              />
            </div>
          </div>
          <div className="h-screen w-full flex justify-center items-center ">
            <div className="third-img relative w-96 bg-red-800 h-56 xl:w-[40vw] xl:h-[22.5vw] overflow-hidden rounded-md">
              <video
                src="/galaxy-port.mp4"
                autoPlay
                muted
                loop
                className="object-cover h-full w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
