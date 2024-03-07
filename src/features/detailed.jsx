import React from "react";

const Detailed = () => {
  return (
    <div className="relative bg-white pt-16 mt-20 md:mt-5 pb-8 px-5 rounded-md h-fit flex-1">
      <div
        className="absolute bg-[hsl(257,27%,26%)] p-5 rounded-full -top-[50px]  md:-top-[45px]
      left-1/2 md:left-8 -translate-x-1/2 md:translate-x-0"
      >
        <img src="/images/icon-detailed-records.svg" alt="detailed records" />
      </div>
      <div>
        <div>
          <h4 className="text-[hsl(257,27%,26%)] font-bold p-4 text-center text-xl md:text-left">
            Detailed Records
          </h4>
          <p className="text-[hsl(257,7%,63%)] mx-auto m text-center leading-2 text-sm w-[261px] md:text-left">
            Gain insights into who is clicking your links. knowing when and how
            people engage with your contents helps inform better decision
          </p>
        </div>
      </div>
    </div>
  );
};

export default Detailed;
