import React from "react";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-10 px-20">
        <div className="col-md-3">
          <h3 className="text-sm font-bold uppercase pb-3.5">Bay Emporium Ltd.</h3>
          <ul>
            <li>
              <Link to={"#"} className="block pb-1 leading-[27px]">About Us</Link>
              <Link to={"#"} className="block pb-1 leading-[27px]">Privacy Policy</Link>
              <Link to={"#"} className="block pb-1 leading-[27px]">Terms Of Use</Link>
              <Link to={"#"} className="block pb-1 leading-[27px]">Limited Warranty</Link>
            </li>
          </ul>
        </div>
        <div className="col-md-3">
          <h3 className="text-sm font-bold uppercase pb-3.5">Customer Care</h3>
          <ul>
            <li>
              <Link to={"#"} className="block pb-1 leading-[27px]">Contact Us</Link>
              <Link to={"#"} className="block pb-1 leading-[27px]">Purchase Process</Link>
              <Link to={"#"} className="block pb-1 leading-[27px]">+8801709995757</Link>
            </li>
          </ul>
        </div>
        <div className="col-md-3">
          <h3 className="text-sm font-bold uppercase pb-3.5">Customer Information</h3>
          <ul>
            <li>
              <Link to={"#"} className="block pb-1 leading-[27px]">Returns & Exchanges</Link>
              <Link to={"#"} className="block pb-1 leading-[27px]">Shipping Information</Link>
              <Link to={"#"} className="block pb-1 leading-[27px]">Offers & Promotions</Link>
              <Link to={"#"} className="block pb-1 leading-[27px]">Size Charts</Link>
              <Link to={"#"} className="block pb-1 leading-[27px]">Gift Voucher</Link>
            </li>
          </ul>
        </div>
        <div className="col-md-3">
          <h3 className="text-sm font-bold uppercase pb-3.5">Follow us!</h3>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
