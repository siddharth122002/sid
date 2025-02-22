import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";

function Services() {
  useGSAP(
    () => {
      let mm = gsap.matchMedia();

      mm.add("(min-width: 1280px)", () => {
        // XL screens
        gsap.to(".pin-web", {
          scrollTrigger: {
            trigger: ".pin-web",
            pin: true,
            // markers: true,
            start: "center center",
            end: "top -60%",
            pinSpacing: false,
          },
        });
        gsap.to(".pin-design", {
          scrollTrigger: {
            trigger: ".pin-design",
            pin: true,
            // markers: true,
            start: "start 33%",
            end: "top 29%",
            pinSpacing: false,
          },
        });
      });

      mm.add("(min-width: 768px) and (max-width: 1279px)", () => {
        // Medium
        gsap.to(".pin-web", {
          scrollTrigger: {
            trigger: ".pin-web",
            pin: true,
            // markers: true,
            start: "top 0%",
            end: "top -100%",
            pinSpacing: false,
          },
        });
        gsap.to(".pin-design", {
          scrollTrigger: {
            trigger: ".pin-design",
            pin: true,
            // markers: true,
            start: "start 20%",
            end: "top 7%",
            pinSpacing: false,
          },
        });
      });
      mm.add("(max-width: 767px)", () => {
        // small
        gsap.to(".pin-web", {
          scrollTrigger: {
            trigger: ".pin-web",
            pin: true,
            // markers: true,
            start: "top top",
            end: "bottom top",
            pinSpacing: false,
            scroller: "body",
          },
        });
      });
    },
    { dependencies: [], revertOnUpdate: true }
  );
  return (
    <div
      id="services"
      className="text-oranges relative z-10 bg-white font-alumniSans  md:px-[40px] px-[20px] py-[50px] border-t-[1px] border-black rounded-t-[40px]"
    >
      <h1 className="uppercase font-semibold text-7xl md:text-[12vw]">
        services
      </h1>
      <div className="text-[#3c3c3c] text-3xl md:text-5xl md:w-2/3 ">
        <p>
          I specialize in creating modern, user-friendly, and visually appealing
          digital experiences. Every project is built with precision, detail,
          and creativity to ensure the best results.
        </p>
      </div>

      {/* web dev */}
      <div className="pin-web relative bg-white flex pt-[40px] md:flex-row flex-col items-start mt-[40px]">
        <div className="absolute top-0  bg-black h-[1px] w-full"></div>
        <div className="md:w-1/2 font-bold text-[#1E1E1E] text-7xl">
          <p className="hidden md:block">(01)</p>
          <p className=" text-5xl md:hidden pb-[3vh] md:pb-[80px]">
            (01) Web Development/
          </p>
        </div>
        <div className="md:w-1/2 text-[#1E1E1E] text-7xl font-bold ">
          <h2 className="pb-[80px] hidden md:block">Web Development/</h2>

          <div className="relative pb-[3vh] md:pb-[80px]">
            <div>
              <p className="-translate-x-16  text-5xl w-fit absolute hidden md:block">
                1.1
              </p>
              <div className="flex">
                <p className="text-4xl md:text-5xl ">
                  Websites —{" "}
                  <span className="text-[#3c3c3c] text-3xl xl:text-5xl md:font-semibold font-normal">
                    I build responsive, high-performance web apps using React,
                    Next.js, and modern frameworks.
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="relative pb-[3vh] md:pb-[80px]">
            <div className="">
              <p className="-translate-x-16 text-5xl w-fit absolute hidden md:block">
                1.2
              </p>
              <div className="flex">
                <p className="md:text-5xl text-4xl">
                  API & Webhooks —{" "}
                  <span className="text-[#3c3c3c] text-3xl xl:text-5xl md:font-semibold font-normal">
                    Seamlessly connect frontends with robust backends through
                    APIs and webhooks.
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="">
              <p className="-translate-x-16 text-5xl w-fit absolute hidden md:block">
                1.3
              </p>
              <div className="flex">
                <p className="md:text-5xl text-4xl">
                  SEO-Friendly Code —{" "}
                  <span className="text-[#3c3c3c] text-3xl xl:text-5xl md:font-semibold font-normal">
                    Implementing best practices for clean, structured code that
                    enhances search visibility and performance.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* web design */}
      <div className="pin-design bg-white relative flex pt-[40px] md:flex-row flex-col items-start mt-[160px]">
        <div className="absolute top-0 bg-black h-[1px] w-full"></div>
        <div className="md:w-1/2 font-bold text-[#1E1E1E] text-7xl">
          <p className="hidden md:block">(02)</p>
          <p className="text-5xl md:hidden pb-[3vh] md:pb-[80px]">
            (02) Web Design/
          </p>
        </div>
        <div className="md:w-1/2 text-[#1E1E1E] text-7xl font-bold">
          <h2 className="pb-[80px] hidden md:block">Web Design/</h2>

          <div className="relative pb-[3vh] md:pb-[80px] ">
            <div>
              <p className="-translate-x-16 text-5xl w-fit absolute hidden md:block">
                2.1
              </p>
              <div className="flex">
                <p className="text-4xl md:text-5xl">
                  Mobile-First & Responsive —{" "}
                  <span className="text-[#3c3c3c] text-3xl xl:text-5xl md:font-semibold font-normal">
                    Ensuring websites look great on all devices with adaptive
                    layouts and fluid designs.
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div className="relative pb-[3vh] md:pb-[80px]">
            <div>
              <p className="-translate-x-16 text-5xl w-fit absolute hidden md:block">
                2.2
              </p>
              <div className="flex">
                <p className="text-4xl md:text-5xl">
                  Interactive & Animated UI —{" "}
                  <span className="text-[#3c3c3c] text-3xl xl:text-5xl md:font-semibold font-normal">
                    Bringing designs to life with smooth animations and
                    transitions using GSAP & Tailwind CSS.
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div className="relative xl:pb-[100px]">
            <div>
              <p className="-translate-x-16 text-5xl w-fit absolute hidden md:block">
                2.3
              </p>
              <div className="flex">
                <p className="text-4xl md:text-5xl">
                  User-Centered Design —{" "}
                  <span className="text-[#3c3c3c] text-3xl xl:text-5xl md:font-semibold font-normal">
                    Crafting visually appealing, intuitive, and engaging
                    interfaces for a seamless user experience.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
