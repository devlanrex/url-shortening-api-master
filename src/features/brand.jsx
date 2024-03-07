import React from "react";

const Brand = () => {
  return (
    <div className="relative bg-white pt-16 pb-8 px-5 rounded-md h-fit flex-1">
      <div
        className="absolute bg-[hsl(257,27%,26%)] p-5 rounded-full -top-[50px] md:-top-[45px]
      left-1/2 md:left-8 -translate-x-1/2 md:translate-x-0"
      >
        <img src="/images/icon-brand-recognition.svg" alt="Brand-Recognition" />
      </div>
      <h3 className="text-[hsl(257,27%,26%)] font-bold p-4 text-center text-xl md:text-left">
        Brand Recognition
      </h3>
      <p className="text-[hsl(257,7%,63%)] mx-auto m text-center leading-2 text-sm w-[261px] md:text-left">
        Boost your brand recognition with each click. Generic links don't mean a
        thing. Branded links helps instill confident in your content
      </p>
    </div>
  );
};

export default Brand;
