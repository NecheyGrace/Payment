import React from "react";
import { CheckIcon } from "@heroicons/react/solid";

const Pricing = () => {
  return (
    <div className="w-full my-24 text-white">
      <div className="w-full h-[800px] bg-slate-900 absolute mix-blend-overlay" />
      <div className="max-w-[1240px] mx-auto py-12 px-4">
        <div className="py-8 text-center text-slate-300">
          <h2 className="text-3xl uppercase">Pricing</h2>
          <h3 className="py-8 text-5xl font-bold text-white">
            The right price for your research.
          </h3>
          <p className="text-3xl">
            The International System of Units may be consulted for the
            definitions of SI units, comprehensive tables of conversion factors.
          </p>
        </div>

        <div className="grid md:grid-cols-2">
          <div className="relative p-8 m-4 bg-white shadow-2xl text-slate-900 rounded-xl">
            <span className="px-3 py-1 text-sm text-indigo-900 uppercase bg-indigo-200 rounded-2xl">
              Standard
            </span>
            <div>
              <p className="flex py-4 text-6xl font-bold">
                $49
                <span className="flex flex-col justify-end text-xl text-slate-500">
                  /mo
                </span>
              </p>
            </div>
            <p className="py-8 text-2xl text-slate-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <div className="text-2xl ">
              <p className="flex py-4">
                <CheckIcon className="w-8 mr-5 text-green-600" />
                Lorem ipsum dolor
              </p>
              <p className="flex py-4">
                <CheckIcon className="w-8 mr-5 text-green-600" />
                Lorem ipsum dolor
              </p>
              <p className="flex py-4">
                <CheckIcon className="w-8 mr-5 text-green-600" />
                Lorem ipsum dolor
              </p>
              <p className="flex py-4">
                <CheckIcon className="w-8 mr-5 text-green-600" />
                Lorem ipsum dolor
              </p>
              <p className="flex py-4">
                <CheckIcon className="w-8 mr-5 text-green-600" />
                Lorem ipsum dolor
              </p>
              <button className="w-full py-2 my-4 bg-slate-900">
                Get Started
              </button>
            </div>
          </div>
          <div className="relative p-8 m-4 bg-white shadow-2xl text-slate-900 rounded-xl">
            <span className="px-3 py-1 text-sm text-indigo-900 uppercase bg-indigo-200 rounded-2xl">
              Premium
            </span>
            <div>
              <p className="flex py-4 text-6xl font-bold">
                $99
                <span className="flex flex-col justify-end text-xl text-slate-500">
                  /mo
                </span>
              </p>
            </div>
            <p className="py-8 text-2xl text-slate-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <div className="text-2xl ">
              <p className="flex py-4">
                <CheckIcon className="w-8 mr-5 text-green-600" />
                Lorem ipsum dolor
              </p>
              <p className="flex py-4">
                <CheckIcon className="w-8 mr-5 text-green-600" />
                Lorem ipsum dolor
              </p>
              <p className="flex py-4">
                <CheckIcon className="w-8 mr-5 text-green-600" />
                Lorem ipsum dolor
              </p>
              <p className="flex py-4">
                <CheckIcon className="w-8 mr-5 text-green-600" />
                Lorem ipsum dolor
              </p>
              <p className="flex py-4">
                <CheckIcon className="w-8 mr-5 text-green-600" />
                Lorem ipsum dolor
              </p>
              <button className="w-full py-2 my-4 bg-slate-900">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
