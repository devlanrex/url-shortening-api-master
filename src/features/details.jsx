import React from "react";
import Wrapper from "./layout/wrapper";
import Brand from "./brand";
import Detailed from "./detailed";
import Customizable from "./customizable";

const Details = () => {
  return (
    <div className="bg-[hsl(257,7%,90%)] relative z-0 -mt-[70px] pt-[140px] pb-20 rounded-md">
      <Wrapper>
        <div>
          <h2 className="text-[hsl(257,27%,26%)] font-bold text-2xl py-5 text-center ">
            Advanced Statistics
          </h2>
          <p className="text-[hsl(257,7%,63%)] leading-6 text-sm text-center md:max-w-[400px] md:mx-auto ">
            Track how your links are performing across the web with our Advanced
            Statistics dashboard.
          </p>
        </div>
        <div className="relative mt-20 md:flex gap-6">
          <Brand />
          <Detailed />
          <Customizable />
        </div>
      </Wrapper>
    </div>
  );
};

export default Details;
