import Image from "next/image";
import React from "react";

function About() {
  return (
    <div
      id="about"
      className="text-oranges overflow-x-hidden font-alumniSans px-[20px] md:px-[40px] pb-[30px] md:pb-[50px] pt-[30px] md:pt-[50px] min-h-screen"
    >
      {/* Heading */}
      <h1 className="uppercase font-semibold text-7xl md:text-[12vw]">About</h1>

      {/* Introduction Paragraph */}
      <div className="text-[#3c3c3c] text-3xl md:text-5xl w-full md:w-2/3">
        <p>I’m a fullstack developer from Dehradun, Uttarakhand.</p>
      </div>

      {/* Divider Line */}
      <div className="my-[20px] md:my-[40px] bg-black h-[1px] w-full"></div>

      {/* Content Section */}
      <div className="flex flex-col md:flex-row xl:ml-[50px] w-full justify-start gap-8 md:gap-16">
        {/* Image Container */}
        <div
          data-scroll
          data-scroll-speed="0.05"
          style={{
            boxShadow: "-10px 10px 0 #FF5733, -6px 6px 0 #FF5733",
          }}
          className="w-full md:w-1/3 xl:w-96 h-[30vh] md:h-[40vh] relative"
        >
          <Image src={"/sid.jpg"} fill alt="sid" className="object-cover" />
        </div>

        {/* Text Content */}
        <div className="w-full md:w-2/3">
          <p className="text-[#3c3c3c] text-3xl md:text-5xl">
            I’m a Full-Stack Developer from Dehradun, eager to apply my skills
            in building dynamic and visually appealing web applications. While
            I’m a fresher, I have a strong foundation in{" "}
            <span className="font-bold">React</span>,{" "}
            <span className="font-bold">Next.js</span>, and{" "}
            <span className="font-bold">Tailwind CSS</span>, and I’m
            continuously learning to create seamless digital experiences with
            clean, efficient code.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
