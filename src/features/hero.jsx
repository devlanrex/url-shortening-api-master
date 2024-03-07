import React from "react";
import Wrapper from "./layout/wrapper";

const Hero = () => {
  return (
    <section>
      <Wrapper>
        <div className="relative z-10">
          <div className="md:grid md:grid-cols-12 pt-4">
            <img
              className=" order-2 col-span-5"
              src="/images/illustration-working.svg"
              alt="illustration-working.svg"
            />
            <div className="col-span-7 order-1">
              <h1 className="text-[hsl(257,27%,26%)] font-[700] text-[30px] md:text-[36px] text-center md:text-left leading-9 md:leading-10  mt-4">
                More than just
                <br /> shorter links
              </h1>
              <p className=" text-[hsl(257,7%,63%)] text-[14px] max-w-[236px] md:max-w-[400px] text-center md:text-left  mx-auto md:mx-0 mt-4 ">
                Build your brand recognition and get detailed insight on how
                your links are performing
              </p>
              <button className="text-white bg-[hsl(180,66%,49%)] rounded-full text-xs py-2.5 px-8 flex mx-auto md:mx-0 mt-4">
                Get Started
              </button>
            </div>
          </div>

          <div className="bg-[hsl(257,27%,26%)] w-full mt-10 p-5 md: rounded-md md:flex md:gap-4">
            <input
              className="bg-white w-full p-1.5 md:p-2.5 rounded-md"
              placeholder="Shorten a link here..."
              type="text"
            />
            <button className="text-white bg-[hsl(180,66%,49%)] mt-4 md:mt-0 w-full py-1.5 md:py-2.5 rounded-md md:w-[250px] ">
              Shorten it!
            </button>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default Hero;
