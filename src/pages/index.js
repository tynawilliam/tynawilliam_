import Intro from "@/components/Intro";
import Navbar from "@/components/Navbar";
import SideBars from "@/components/sideBars";
import React from "react";

function Home() {
  return (
    <div>
      <SideBars />
      <Navbar />
      <Intro />
      <div style={{ height: "80vh" }}></div>
    </div>
  );
}

export default Home;

// <h2 className={inter.className}></h2>
