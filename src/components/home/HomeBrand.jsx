import React from "react";
import Brands from "./Brands";

const HomeBrand = () => {
  return (
    <section className="py-12">
      <div className="px-20">
        <div class="main-title text-[30px] font-bold text-center pb-8">
          SHOP OUR BRANDS
        </div>
        <Brands />
      </div>
    </section>
  );
};

export default HomeBrand;
