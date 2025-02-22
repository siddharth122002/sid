import { useGSAP } from "@gsap/react";
import gsap, { ScrollTrigger } from "gsap/all";
import Link from "next/link";
import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";
gsap.registerPlugin(ScrollTrigger);
function Contact() {
  const handleScroll = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  useGSAP(() => {
    gsap.to(".pop", {
      scale: 1,
      duration: 1,
      scrollTrigger: {
        trigger: ".pop",
        // markers: true,
        start: "top 80%",
      },
    });
  });
  return (
    <div
      id="contact"
      className="text-oranges pt-[30px]  min-h-screen  font-alumniSans px-[20px] md:px-[40px] md:py-[50px] xl:pt-[50px] relative"
    >
      <div className="text-[#3c3c3c] text-4xl md:text-5xl w-full font-semibold">
        <p>Have a project in mind?</p>
      </div>
      <div>
        <h1
          style={{
            textShadow:
              "-6px 6px 0 #FF5733,-3px 3px 0 #FF5733,0px 0px 20px #FF5733",
          }}
          className="uppercase  font-bold pt-[80px] text-7xl md:text-[13vw] xl:text-[12vw] xl:leading-[10vw] leading-[15vw] text-center text-white font-alumniSans"
        >
          <p className="pop scale-0">Lets bring it to life!!!</p>
        </h1>
      </div>

      <div className=" w-full font-bold md:text-5xl text-4xl xl:text-8xl flex justify-between  items-center text-[#1e1e1e] md:pb-[40px] md:mt-40 mt-[60vw]">
        <h2>Socials</h2>
        <h2>Send me an email:</h2>
      </div>
      <div className="w-full xl:pb-[80px] font-semibold md:text-3xl text-2xl xl:text-5xl flex justify-between items-start text-[#3c3c3c]">
        <div>
          <p>
            <Link
              href="https://github.com/siddharth122002"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </Link>
          </p>
          <p>
            <Link
              href="https://www.linkedin.com/in/siddharth-kumar-8041921b7/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </Link>
          </p>
          <p>
            <Link
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </Link>
          </p>
        </div>
        <p>
          <a href="mailto:siddharth122002@gmail.com">
            siddharth122002@gmail.com
          </a>
        </p>
      </div>
      <div
        onClick={handleScroll}
        className="absolute bottom-[5vw] rounded-full right-[10px] md:right-[40px] bg-oranges md:h-20 md:w-20 h-16 w-16 text-white flex justify-center items-center cursor-pointer md:text-3xl"
      >
        <FaArrowUpLong />
      </div>
      <div className=" md:w-2/3 absolute bottom-[5vw] md:bottom-4 font-bold xl:text-8xl md:text-7xl text-[9vw] text-[#1e1e1e] ">
        © 2025 SIDDHARTH KUMAR
      </div>
    </div>
  );
}

export default Contact;
