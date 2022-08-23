import React from "react";

const About = () => {
  return (
    <div className="w-full my-40 mt-[335px] lg:mt-0 md:mt-0  pt-14">
      <div className="max-w-[1240px] mx-auto">
        <div className="text-center">
          <h2 className="my-3 text-5xl font-bold">
            Trusted by developers across the world
          </h2>
          <p className="my-3 text-3xl text-gray-500 py6">
            The International System of Units may be consulted for the
            definitions of SI units, comprehensive tables of conversion factors.
          </p>
        </div>
        <div className="grid gap-1 px-2 text-center md:grid-cols-3">
          <div className="py-8 m-2 border shadow-xl rounded-xl">
            <p className="text-4xl font-bold text-indigo-600">100%</p>
            <p className="mt-2 text-gray-400">Completion</p>
          </div>
          <div className="py-8 m-2 border shadow-xl rounded-xl">
            <p className="text-4xl font-bold text-indigo-600">24/7</p>
            <p className="mt-2 text-gray-400">Delivery</p>
          </div>
          <div className="py-8 m-2 border shadow-xl rounded-xl">
            <p className="text-4xl font-bold text-indigo-600">100K</p>
            <p className="mt-2 text-gray-400">Transactions</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
