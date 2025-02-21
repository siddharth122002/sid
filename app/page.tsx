"use client";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Landing from "@/components/Landing";
import Loader from "@/components/Loader";
import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import React, { useEffect, useState } from "react";
function Home() {
  const [loading, setLoading] = useState<boolean>(true);
  const [mainLoad, setMainLoad] = useState<boolean>(true);
  const [open, setOpen] = useState<boolean>(false);
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
          className={`relative overflow-x-hidden ${
            loading && "h-[100svh] overflow-y-hidden"
          }`}
        >
          <Loader loading={loading} setLoading={setLoading} />

          <Menu open={open} setOpen={setOpen} />

          <div className="relative  ">
            <Navbar open={open} setOpen={setOpen} />
            <Landing />
            <Services />
            <Projects />
            <About />
            <Contact />
          </div>
        </div>
      )}
    </>
  );
}

export default Home;
