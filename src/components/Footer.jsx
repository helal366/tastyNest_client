import React from "react";
// import logo from "../assets/tastyNest.jpg";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <section className=" bg-base-200 text-base-content grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 padding py-6 gap-3 sm:gap-6 lg:gap-0">
      <div className="flex flex-col justify-start lg:justify-between items-start gap-4 h-full pr-5">
        <span id="footer-name">tastyNest</span>
        <p className="text-sm">
          Copyright © {new Date().getFullYear()} - All right reserved by{" "}
          <b>
            <i>tastyNest</i>
          </b>
        </p>
      </div>
      
      <div className="">
        <h3 className="font-semibold text-left mb-2">Contact Information</h3>
        <div className="flex flex-col justify-end">
          <p>Email: admin@tastynest.com</p>
          <p>Phone: +8809613526242</p>
          <p>Head Office: 43, Arambag, Motijheel, Dhaka-1205</p>
        </div>
      </div>
      <div className="flex flex-col justify-center gap-5 items-start lg:items-end">
        <h3 className="font-semibold text-left lg:text-right mb-2">Social Media</h3>
        <div className="flex gap-2 justify-start lg:justify-end">
          <FaFacebook size={28}></FaFacebook>
          <FaTwitter size={28}></FaTwitter>
          <FaYoutube size={28}></FaYoutube>
          <FaInstagram size={28}></FaInstagram>
        </div>
      </div>
    </section>
  );
};
 
export default Footer;
