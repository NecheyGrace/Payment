import {
  CloudUploadIcon,
  DatabaseIcon,
  PaperAirplaneIcon,
  ServerIcon,
} from "@heroicons/react/solid";

import bgImg from "../assets/cyber-bg.png";

const Hero = () => {
  return (
    <div className="flex flex-col justify-between w-full h-screen bg-zinc-200">
      <div className="grid  md:grid-cols-2 max-w-[1240px] m-auto bg-zinc-200 ">
        <div className="flex flex-col justify-center w-full px-2 py-8 mt-20 md:mt-0 md:items-start">
          <p className="text-2xl">Unique Sequencing & Protection</p>
          <h1 className="py-3 text-5xl font-semibold md:text-7xl">
            Cloud Management
          </h1>
          <p className="text-2xl">This is our Tech brand.</p>
          <button className="px-6 py-3  sm:w-[60%] my-4">Get Started</button>
        </div>
        <div className=" sm:-mt-5 sm:p-5">
          <img src={bgImg} alt="/" />
        </div>

        <div
          className="absolute  flex flex-col py-5 md:w-[760px] bottom-[-43%]  md:left-1/2  md:-translate-x-1/2
        transform  bg-zinc-200 border  border-slate-300  sm:-mt-20 w-[90%] left-8 sm:bottom-[-50%] md:bottom-[-1%] md:mb-4
        rounded-xl text-center shadow-md  drop-shadow-xl "
        >
          <p>Data Services</p>
          <div className="flex flex-wrap justify-between px-4 ">
            <p className="flex px-3 py-2 text-slate-500">
              <CloudUploadIcon className="h-6 text-indigo-500" /> App Security
            </p>
            <p className="flex px-4 py-2 text-slate-500">
              <DatabaseIcon className="h-6 text-indigo-500" /> Dashboard Desgin
            </p>
            <p className="flex px-4 py-2 text-slate-500">
              <ServerIcon className="h-6 text-indigo-500" /> Cloud Data
            </p>
            <p className="flex px-4 py-2 text-slate-500">
              <PaperAirplaneIcon className="h-6 text-indigo-500" /> API
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
