import React from "react";

const Brands = () => {
  return (
    <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-3 px-5">
      <div className="">
        <div className="flex justify-center items-center">
          <img
            className="h-[338px] w-[338px] object-contain hover:scale-105 transition transform ease-in-out  !overflow-hidden"
            src="https://backend.amarbay.com/media/images/shop-our-brand/ELEGANTE1.png"
            alt=""
          />
        </div>
        <div className="text-center">
          <h3 className="text-[21px] font-bold text-[#0e1d49]">ELEGANTE</h3>
          <p className="text-lg text-[#0e1d49] font-medium">
            Classic, posh but decent stylish segment.{" "}
          </p>
        </div>
      </div>
      <div className="">
        <div className="flex justify-center items-center">
          <img
            className="h-[338px] w-[338px] object-contain hover:scale-105 transition transform ease-in-out  !overflow-hidden"
            src="https://backend.amarbay.com/media/images/shop-our-brand/lara_clara1.png"
            alt=""
          />
        </div>
        <div className="text-center">
          <h3 className="text-[21px] font-bold text-[#0e1d49]">LARA CLARA</h3>
          <p className="text-lg text-[#0e1d49] font-medium">
            Talks about the blending of fashion & latest trends.{" "}
          </p>
        </div>
      </div>
      <div className="">
        <div className="flex justify-center items-center">
          <img
            className="h-[338px] w-[338px] object-contain hover:scale-105 transition transform ease-in-out  !overflow-hidden"
            src="https://backend.amarbay.com/media/images/shop-our-brand/Bay_Soft.png"
            alt=""
          />
        </div>
        <div className="text-center">
          <h3 className="text-[21px] font-bold text-[#0e1d49]">BAY SOFT</h3>
          <p className="text-lg text-[#0e1d49] font-medium">
            Comfortable high quality leather footwear{" "}
          </p>
        </div>
      </div>
      <div className="">
        <div className="flex justify-center items-center">
          <img
            className="h-[338px] w-[338px] object-contain hover:scale-105 transition transform ease-in-out  !overflow-hidden"
            src="https://backend.amarbay.com/media/images/shop-our-brand/Striker_EDpvry4.png"
            alt=""
          />
        </div>
        <div className="text-center">
          <h3 className="text-[21px] font-bold text-[#0e1d49]">STRIKER</h3>
          <p className="text-lg text-[#0e1d49] font-medium">
            Healthy Lifestyle
          </p>
        </div>
      </div>
    </div>
  );
};

export default Brands;
