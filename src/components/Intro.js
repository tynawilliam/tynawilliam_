import { Box, Button, Tooltip } from "@mui/material";
import React from "react";
import styles from "../styles/Home.module.css";

function Intro() {
  return (
    <div
      className={`${styles.intro} mt-36 pl-5 flex flex-col items-start w-screen tablet:w-5/6 tablet:px-24 tablet:mt-80 laptop:mt-44 laptop:px-48`}
    >
      <h3 className="text-xl font-mono text-pink-400 pb-4 ">Hi there! I'm</h3>
      <h1
        className={` text-5xl ui-monospace mt-1 text-neutral-300 mb-4 tablet:text-7xl`}
      >
        Tyna William
      </h1>
      <h1
        className={`tagline ${styles.intro}text-5xl mb-7 text-[#94a3b8] tablet:text-6xl tablet:pt-5 laptop:text-7xl`}
        id="tagline"
      >
        I build things for the web
      </h1>
      <p
        className={`text-l subtext w-full text-[#94a3b8] mb-3 tablet:text-2xl laptop:pr-48 laptop:text-xl`}
      >
        I'm a software engineer who works across the full stack. I enjoy using
        code to solve everyday problems, and right now I'm focused on building
        life saving tech with{" "}
        <span className="text-pink-400">Proxxi Technology</span>.
      </p>
      <Box sx={{ flexGrow: 0 }} className="pt-10">
        <Tooltip title="Download resume">
          <Button
            variant="outlined"
            color="secondary"
            size="extraLarge"
            // onClick={downloadResume}
            className="laptop:hover:bg-pink-400/40"
          >
            Resume
          </Button>
        </Tooltip>
      </Box>
    </div>
  );
}

export default Intro;
