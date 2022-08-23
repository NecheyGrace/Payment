import React from "react";
import { PhoneIcon, ArrowSmRightIcon } from "@heroicons/react/outline";
import { ChipIcon, SupportIcon } from "@heroicons/react/solid";

import supporting from "../assets/customer_care.jpg";

const Support = () => {
  return (
    <div className="w-full mt-24">
      <div className="w-full h-[700px]  bg-gray-900/90 absolute">
        <img
          className="object-cover w-full h-full mix-blend-overlay"
          src={supporting}
          alt="/"
        />
      </div>
      <div className="max-w-[1240px] mx-auto text-white relative">
        <div className="px-4 py-12">
          <h2 className="pt-8 text-3xl text-center uppercase text-slate-300">
            Support
          </h2>
          <h3 className="py-6 text-5xl font-bold text-center">
            Finding the right team
          </h3>
          <p className="py-4 text-3xl text-slate-300 ">
            The International System of Units may be consulted for the
            definitions of SI units, comprehensive tables of conversion factors.
          </p>
        </div>
        <div className="relative grid grid-cols-1 px-4 pt-12 text-black lg:grid-cols-3 gap-x-8 gap-y-16 sm:pt-20">
          <div className="bg-white shadow-2xl rounded-xl">
            <div className="p-8">
              <PhoneIcon className="w-16 p-4 text-white bg-indigo-600 rounded-lg mt-[-4rem]" />
              <h3 className="my-6 text-2xl font-bold">Sales</h3>
              <p className="text-xl text-gray-600">
                The International System of Units may be consulted for the
                definitions of SI units, comprehensive tables of conversion
                factors.
              </p>
            </div>
            <div className="py-4 pl-8 bg-slate-100">
              <p className="flex items-center text-indigo-600">
                Contact Us <ArrowSmRightIcon className="w-5 ml-2" />
              </p>
            </div>
          </div>
          <div className="bg-white shadow-2xl rounded-xl">
            <div className="p-8">
              <SupportIcon className="w-16 p-4 text-white bg-indigo-600 rounded-lg mt-[-4rem]" />
              <h3 className="my-6 text-2xl font-bold">Technical Support</h3>
              <p className="text-xl text-gray-600">
                The International System of Units may be consulted for the
                definitions of SI units, comprehensive tables of conversion
                factors.
              </p>
            </div>
            <div className="py-4 pl-8 bg-slate-100">
              <p className="flex items-center text-indigo-600">
                Contact Us <ArrowSmRightIcon className="w-5 ml-2" />
              </p>
            </div>
          </div>
          <div className="bg-white shadow-2xl rounded-xl">
            <div className="p-8">
              <ChipIcon className="w-16 p-4 text-white bg-indigo-600 rounded-lg mt-[-4rem]" />
              <h3 className="my-6 text-2xl font-bold">Media Inquiries</h3>
              <p className="text-xl text-gray-600">
                The International System of Units may be consulted for the
                definitions of SI units, comprehensive tables of conversion
                factors.
              </p>
            </div>
            <div className="py-4 pl-8 bg-slate-100">
              <p className="flex items-center text-indigo-600">
                Contact Us <ArrowSmRightIcon className="w-5 ml-2" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
