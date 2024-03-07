import React from "react";

const Wrapper = ({ children }) => {
  return (
    <div className="max-w-[1080px] mx-auto w-[90%] font-poppins">
      {children}
    </div>
  );
};

export default Wrapper;
