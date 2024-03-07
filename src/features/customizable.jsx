import React from "react";

const Customizable = () => {
  return (
    <div className="relative bg-white pt-16 pb-8 px-5 mt-20 md:mt-10 rounded-md h-fit flex-1">
      <div
        className="absolute bg-[hsl(257,27%,26%)] p-5 rounded-full -top-[50px] md:-top-[45px]
      left-1/2 md:left-8 -translate-x-1/2 md:translate-x-0"
      >
        <img src="/images/icon-fully-customizable.svg" alt="customizable" />
      </div>
      <h6 className="text-[hsl(257,27%,26%)] font-bold p-4 text-center text-xl md:text-left ">
        Fully Customizable
      </h6>
      <p className="text-[hsl(257,7%,63%)] mx-auto m text-center leading-2 text-sm w-[261px] md:text-left">
        Improve brand awareness and content discoverability through customizable
        links,supercharging audience engagements
      </p>
    </div>
  );
};

export default Customizable;
