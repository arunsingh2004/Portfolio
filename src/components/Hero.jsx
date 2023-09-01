import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { computer } from "../assets";
import { resume } from "../assets";
const Hero = () => {
  return (
    <div className="flex flex-col ">
      <section className={`m-18 w-full h-screen mx-auto`}>
        <div
          className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
        >
          <div className="flex flex-col justify-center items-center mt-5">
            <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
            <div className="w-1 sm:h-80 h-40 violet-gradient" />
          </div>

          <div>
            <h1 className={`${styles.heroHeadText} text-white`}>
              Hi, I'm <span className="text-[#915EFF]">Arun Singh</span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              I am Full Stack developer and Competitive Programmer
              <br></br>
              Welcome to My Portfolio
              <br></br>
            </p>
          </div>
        </div>
        <div className=" mt-80 p-8 pl-12 lg:ml-36 md:ml-14 absolute text-[#dfd9ff] font-medium lg:text-[20px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px]">
          <h1 className="text-white mr-60">
            Official Email:(aruns.ug21.cs@nitp.ac.in)
            <br></br>
            Personal Email:(arunsinghbrh9006@gmail.com)
          </h1>
        </div>
        <div className="mt-20 relative">
          <button
            type="button"
            onClick={() => window.open(resume, "_blank")}
            className=" rounded-xl  bg-violet-500 text-black p-4   absolute  mt-96 ml-52 text-center"
          >
            Resume/CV
          </button>
        </div>
        {/* <ComputersCanvas /> */}

        <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
          <a href="#about">
            <div className="w-[35px] h-[64px] rounded-3xl border-4 border-black flex justify-center items-start p-2">
              <h1>aruns.ug21.cs@nitp.ac.in</h1>
            </div>
          </a>
        </div>
        {/* <img
          src={computer}
          alt="source code"
          className="w-1/2  h-1/2   m-96  object-cover"
        /> */}
      </section>
    </div>
  );
};

export default Hero;
