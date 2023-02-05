import React from "react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

function AboutMe() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 1,
    rootMargin: "-100px 0px",
  });
  return (
    <div className="w-full text-[#94a3b8] h-screen flex justify-center">
      <section className="flex flex-col">
        <h4>About Me</h4>
        <div className="flex w-[80vw]">
          <p
            ref={ref}
            className={`transition-opacity ${
              inView ? "opacity-1" : "opacity-0"
            } ease-in duration-450 delay-50`}
          >
            {" "}
            I’ve always considered myself a creative individual with an affinity
            for technology, and ultimately deciding to major in computer science
            was the perfect way to combine those two strengths. Since
            graduating, I’ve gone on to work full time as a software engineer
            and I’m currently nearing 3 years of experience. I’ve spent my time
            mainly working in the startup space building user friendly, scalable
            applications. In my current role, I work on the backend team for an
            electrical safety technology company.
          </p>
          <Image
            ref={ref}
            className={`transition-opacity transition-transform translate-x-1/2 ${
              inView ? "opacity-1" : "opacity-0"
            } ${inView ? "translate-x-0" : ""} ease-in duration-600 delay-80`}
            src={"/avatar.jpg"}
            width={300}
            height={300}
          />
        </div>
      </section>
    </div>
  );
}

export default AboutMe;
