import React, { useState } from "react";
import { Turn as Hamburger } from "hamburger-react";
import Wrapper from "./wrapper";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <nav>
      <Wrapper>
        <div className="flex justify-between items-center py-8">
          <div className="flex gap-4 items-center">
            {/* Logo */}
            <img src="/images/logo.svg" className="w-[120px] -mb-2" />

            <div className="hidden md:flex ml-4 gap-4 text-sm font-medium text-[hsl(255,11%,22%)]">
              <a href="">Feautures</a>
              <a href="">Pricing</a>
              <a href="">Resources</a>
            </div>
          </div>

          {/* hambuger */}
          <div className="md:hidden">
            <Hamburger
              color="#999"
              size={28}
              toggled={isOpen}
              toggle={setOpen}
            />
          </div>

          {/* Buttons */}
          <div className="hidden md:flex items-center gap-4 text-sm font-medium text-[hsl(255,11%,22%)]">
            <a className="text-[hsl(255,11%,22%)] text-sm" href="">
              Login
            </a>
            <a
              className="text-white bg-[hsl(180,66%,49%)] rounded-full text-xs py-1.5 px-5 "
              href=""
            >
              Sign Up
            </a>
          </div>
        </div>
      </Wrapper>
    </nav>
  );
};

export default Navbar;
