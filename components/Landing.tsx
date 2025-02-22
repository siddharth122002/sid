import { useGSAP } from "@gsap/react";
import gsap, { ScrollTrigger } from "gsap/all";
import React, { MouseEventHandler, useRef, useState } from "react";
gsap.registerPlugin(ScrollTrigger);
function Landing() {
  const [transfromStyle, setTransformStyle] = useState<string>("");
  const [shadowStyle, setShadowStyle] = useState<string>(
    "-6px 6px 0 #FF5733,-3px 3px 0 #FF5733,0px 0px 20px #FF5733"
  );
  const moveRef = useRef<HTMLDivElement | null>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (moveRef.current) {
      const { top, left, width, height } =
        moveRef.current.getBoundingClientRect();
      const relativeX = (e.clientX - left) / width;
      const relativeY = (e.clientY - top) / height;
      const tiltX = (relativeY - 0.5) * 10;
      const tiltY = (relativeX - 0.5) * 10;
      const newTransform = `perspective(250px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) translateZ(10px)`;
      setTransformStyle(newTransform);

      const shadowX = tiltY * -1;
      const shadowY = tiltX * -1;
      const shadow2X = tiltY * -2;
      const shadow2Y = tiltX * -2;
      const newShadowStyle = `${shadowX}px ${shadowY}px 0px #FF5733,${shadow2X}px ${shadow2Y}px 0px #FF5733
      ,0px 0px 20px #FF5733`;
      setShadowStyle(newShadowStyle);
    }
  };

  const handleMouseLeave = () => {
    setTransformStyle("");
    setShadowStyle(
      "-10px 10px 0 #FF5733,-6px 6px 0 #FF5733,0px 0px 20px #FF5733,"
    );
  };

  useGSAP(() => {
    gsap.to(".fade", {
      scale: 0.8,
      scrollTrigger: {
        trigger: ".fade",
        // markers: true,
        scrub: true,
        pin: true,
        pinSpacing: false,
      },
    });
  });

  return (
    <div
      id="#home"
      className="fade bg-oranges h-[100vh]  flex-col flex justify-center items-center relative rounded-md md:rounded-xl overflow-hidden"
    >
      <div
        data-scroll
        data-scroll-speed="-0.3"
        style={{ clipPath: "circle(50% at 50% 50%)" }}
        className="absolute md:top-[25%]  md:right-[20%] md:h-[60vw] md:w-[60vw] h-80 w-80 top-[31%] bg-[#FFE5BC]"
      ></div>

      <div className="-translate-y-20 relative z-20">
        <div className="text-center xl:text-[3vw] xl:leading-[3vw] md:text-[4vw] text-4xl md:leading-[5vw] uppercase">
          <h2 className="text-white  font-semibold font-alumniSans w-fit m-auto">
            Siddharth <br /> kumar
          </h2>
        </div>
        <div
          style={{ transform: transfromStyle, transition: "transform 0.1s" }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          ref={moveRef}
        >
          <h1
            style={{
              textShadow: ` ${shadowStyle}`,
            }}
            className="uppercase  font-bold text-center md:text-[15vw] text-7xl xl:text-[10vw] xl:leading-[10vw] md:leading-[15vw] tracking-wider text-white  font-alumniSans p-14"
          >
            FUllstack <br /> developer
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Landing;
