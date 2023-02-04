import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";

function SideBars() {
  return (
    <span
      className={`invisible tablet:visible text-[#94a3b8] flex flex-col fixed top-[80vh] left-12 justify-between h-32`}
    >
      <a
        className={`hover:cursor-pointer hover:scale-125 hover:text-pink-400/80`}
        href="https://github.com/tynawilliam"
      >
        <GitHubIcon />
      </a>
      <a
        className={`hover:cursor-pointer hover:scale-125 hover:text-pink-400/80`}
        href="https://www.linkedin.com/in/tynadwilliam/"
      >
        <LinkedInIcon />
      </a>
      <button
        className={`hover:cursor-pointer hover:scale-125 hover:text-pink-400/80`}
        onClick={() => (window.location = "mailto:tynawilliam@gmail.com")}
      >
        <MailOutlinedIcon />
      </button>
    </span>
  );
}

export default SideBars;
