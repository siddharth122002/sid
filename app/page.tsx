"use client";
import Landing from "@/components/Landing";
import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";

function Home() {
  const [loading, setLoading] = useState<boolean>(true);
  const [mainLoad, setMainLoad] = useState<boolean>(true);
  useEffect(() => {
    document.fonts.ready.then(() => {
      setMainLoad(false);
    });
  }, []);

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      new LocomotiveScroll();
    })();
  }, []);
  return (
    <>
      {mainLoad ? (
        <div className="h-screen bg-oranges"></div>
      ) : (
        <div
          className={`relative ${loading && "h-[100svh] overflow-y-hidden"}`}
        >
          <Loader loading={loading} setLoading={setLoading} />
          <div className="relative bg-[#FFF1DA] px-[40px] py-[50px]">
            <Navbar />
            <Landing />
            <Services />
            <div className="h-screen bg-red-300"></div>
          </div>
        </div>
      )}
    </>
  );
}

export default Home;
