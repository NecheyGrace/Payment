import React, { useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="w-screen h-[80px] z-10 bg bg-zinc-200 fixed drop-shadow-lg">
      <div className="flex items-center justify-between w-full h-full px-2">
        <div className="flex items-center">
          <h1 className="mr-4 text-3xl font-bold sm:text-4xl">kBRAND.</h1>
          <ul className="hidden md:flex">
            <li>Home</li>
            <li>About</li>
            <li>Support</li>
            <li>Platform</li>
            <li>Pricing</li>
          </ul>
        </div>
        <div className="hidden pr-4 md:flex">
          <button className="mr-4 text-black bg-transparent border-none">
            Login In
          </button>
          <button className="px-5 py-2">Sign Up</button>
        </div>
        <div
          className="w-8 mr-3 rounded shadow-md md:hidden bg-slate-400"
          onClick={handleClick}
        >
          {!nav ? <MenuIcon /> : <XIcon />}
        </div>
      </div>
      <ul className={!nav ? "hidden" : "absolute w-full px-4 bg-zinc-200"}>
        <li className="w-full border-b-2 border-zinc-300">Home</li>
        <li className="w-full border-b-2 border-zinc-300">About</li>
        <li className="w-full border-b-2 border-zinc-300">Support</li>
        <li className="w-full border-b-2 border-zinc-300">Platform</li>

        <li className="w-full border-b-2 border-zinc-300">Pricing</li>
        <div className="flex flex-col my-4">
          <button className="px-8 py-3 mb-4 text-indigo-600 bg-transparent">
            Login In
          </button>
          <button className="px-8 py-3">Sign Up</button>
        </div>
      </ul>
    </div>
  );
};

export default NavBar;
