import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

function Loader({
  loading,
  setLoading,
}: {
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const percentageRef = useRef<HTMLDivElement>(null);
  const loaderRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  useGSAP(
    () => {
      if (percentageRef.current) {
        gsap.to(percentageRef.current, {
          delay: 1.3,
          innerText: "100%",
          snap: { innerText: 1 },
          duration: 3,
          ease: "power1.out",
        });
        gsap.to(lineRef.current, {
          delay: 1.3,
          width: "100%",
          duration: 2,
          ease: "power1.out",
          onComplete: () => {
            gsap.to(loaderRef.current, {
              translateY: "-100%",
              duration: 1,
              ease: "power4.inOut",
            });
            setLoading(false);
          },
        });
      }
    },
    { dependencies: [], revertOnUpdate: true }
  );
  return (
    <div
      ref={loaderRef}
      className="h-screen absolute w-full top-0 bg-oranges scroller text-white font-wireOne flex justify-center items-center z-50"
    >
      <h1 className="md:text-9xl text-6xl md:translate-y-0 -translate-y-10">
        SID
      </h1>
      <div
        ref={lineRef}
        className="h-[1px] md:translate-y-0 -translate-y-10 absolute left-0 w-[1px] bg-white"
      ></div>
      <div
        ref={percentageRef}
        className="absolute w-32 xl:translate-y-20 bottom-20 md:bottom-0 left-auto right-auto flex justify-center items-center md:text-[15vw] text-[20vw]"
      >
        00%
      </div>
    </div>
  );
}

export default Loader;
