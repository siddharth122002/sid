import React, { MouseEventHandler, useRef, useState } from "react";

function Landing() {
  const [transfromStyle, setTransformStyle] = useState<string>("");
  const moveRef = useRef<HTMLDivElement | null>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (moveRef.current) {
      const { top, left, width, height } =
        moveRef.current.getBoundingClientRect();
      const relativeX = (e.clientX - left) / width;
      const relativeY = (e.clientY - top) / height;
      const tiltX = (relativeY - 0.5) * 5;
      const tiltY = (relativeX - 0.5) * 5;
      const newTransform = `perspective(500px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) `;
      setTransformStyle(newTransform);
    }
  };

  const handleMouseLeave = () => {
    setTransformStyle("");
  };
  return (
    <div className="h-[91vh] flex-col flex justify-center items-center relative">
      <div
        style={{ clipPath: "circle(50% at 50% 50%)" }}
        className="absolute xl:h-[35vw] xl:w-[35vw] top-[50%] -translate-y-[50%]  w-[60vw] h-[60vw] bg-white"
      ></div>
      <div className="-translate-y-20 relative z-20">
        <div className="text-center xl:text-[3vw] xl:leading-[3vw] text-[4vw] leading-[5vw] uppercase">
          <h2 className="text-oranges font-semibold font-alumniSans">
            Siddharth <br /> kumar
          </h2>
        </div>
        <div
          style={{ transform: transfromStyle }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          ref={moveRef}
        >
          <h1
            style={{
              textShadow:
                "-10px 10px 0 #FF5733,-6px 6px 0 #FF5733,0px 0px 20px #FF5733",
            }}
            className="uppercase  font-bold text-center text-[15vw] xl:text-[10vw] xl:leading-[10vw] leading-[15vw] tracking-wider text-white font-alumniSans"
          >
            FUllstack <br /> developer
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Landing;
