import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";

function RightSideBar() {
  return (
    // <span
    //   className={`invisible tablet:visible text-[#94a3b8] flex flex-col fixed top-[80vh] right-[4vw] justify-between h-32`}
    // >
    //   <a
    //     className={`hover:cursor-pointer hover:scale-125 hover:text-pink-400/80`}
    //     href="https://github.com/tynawilliam"
    //   >
    //     <GitHubIcon />
    //   </a>
    //   <a
    //     className={`hover:cursor-pointer hover:scale-125 hover:text-pink-400/80`}
    //     href="https://www.linkedin.com/in/tynadwilliam/"
    //   >
    //     <LinkedInIcon />
    //   </a>
    //   <button
    //     className={`hover:cursor-pointer hover:scale-125 hover:text-pink-400/80`}
    //     onClick={() => (window.location = "mailto:tynawilliam@gmail.com")}
    //   >
    //     <MailOutlinedIcon />
    //   </button>
    // </span>
    <div className="invisible tablet:visible rotate-90 fixed text-pink-400 left-[88vw] top-[83vh]">
      <h4>TYNAEUDOXIE.COM</h4>
    </div>
  );
}

export default RightSideBar;
