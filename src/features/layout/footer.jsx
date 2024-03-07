import React from "react";
import Wrapper from "./wrapper";

const Footer = () => {
  return (
    <div className="bg-[hsl(260,8%,14%)] pb-8">
      <Wrapper>
        <div className="md:flex justify-between  ">
          <img
            className="mx-auto md:mx-0 h-fit py-10 px-10"
            src="/images/logo-white.svg"
            alt="logo-white  "
          />
          <div className="md:flex gap-12">
            <div className="text-white text-center md:text-left mt-6">
              <h6 className="font-bold mx-auto">Features</h6>
              <p className="mt-4">Links Shortening</p>
              <p>Branded Links</p>
              <p>Analytics</p>
            </div>
            <div className="text-white text-center md:text-left mt-6">
              <h6 className="font-bold">Resoures</h6>
              <p className="mt-4">Blog</p>
              <p>Developers</p>
              <p>Support</p>
            </div>
            <div className="text-white text-center md:text-left mt-6">
              <h6 className="font-bold">Company</h6>
              <p className="mt-4">About</p>
              <p>Our Team</p>
              <p>Careers</p>
              <p>Contacts</p>
            </div>
          </div>
          <div className="flex justify-center gap-2 mt-6 md:h-fit">
            <img src="/images/icon-facebook.svg" alt="" />
            <img src="/images/icon-twitter.svg" alt="" />
            <img src="/images/icon-pinterest.svg" alt="" />
            <img src="/images/icon-instagram.svg" alt="" />
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Footer;
