import AboutMe from "@/components/AboutMe";
import Intro from "@/components/Intro";
import Navbar from "@/components/Navbar";
import RightSideBar from "@/components/RightSideBar";
import SideBars from "@/components/sideBars";
import React from "react";

function Home() {
  return (
    <div>
      <SideBars />
      <RightSideBar />
      <Navbar />
      <Intro />
      <AboutMe />
    </div>
  );
}

export default Home;

// <h2 className={inter.className}></h2>
