import React, { useState } from "react";
import { Link } from "react-router";

const products = [
  {
    id: 1,
    name: "Men Dress - Slip On - Zen",
    price: "BDT 6990.00",
    image: [
      "https://backend.amarbay.com/media/images/product/front/new_0091__DSC2432.jpg",
      "https://backend.amarbay.com/media/images/product/back/new_0092__DSC2431.jpg",
    ],
  },
  {
    id: 2,
    name: "Men Summer - Sandal - Toony",
    price: "BDT 2890.00",
    image: [
      "https://backend.amarbay.com/media/images/product/front/_DSC5597_0002_Shoe_0000__DSC4826.jpg",
      "https://backend.amarbay.com/media/images/product/back/_DSC5597_0003_Shoe_0004__DSC4921.jpg",
    ],
  },
  {
    id: 3,
    name: "Men Dress - Lace Up - Zen",
    price: "BDT 6990.00",
    image: [
      "https://backend.amarbay.com/media/images/product/front/new_0103__DSC2412.jpg",
      "https://backend.amarbay.com/media/images/product/back/DSC1082_-_DSC1095_0002__DSC3529.jpg",
    ],
  },
  {
    id: 4,
    name: "Ladies Closed - Mid Heel - Perlita",
    price: "BDT 3490.00",
    image: [
      "https://backend.amarbay.com/media/images/product/front/DSC1082_-_DSC1095_0005__DSC3525.jpg",
      "https://backend.amarbay.com/media/images/product/back/new_0104__DSC2411.jpg",
    ],
  },
];

const FeaturedProducts = () => {
  const [hovered, setHovered] = useState({});

  const handleMouseEnter = (id) => {
    setHovered((prevState) => ({ ...prevState, [id]: true }));
  };

  const handleMouseLeave = (id) => {
    setHovered((prevState) => ({ ...prevState, [id]: false }));
  };

  return (
    <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-10 px-5">
      {products.map((product) => (
        <div
          key={product.id}
          className="border border-gray-200 p-4 text-center transition-all"
        >
          <Link to={"/product/"}
            onMouseEnter={() => handleMouseEnter(product.id)}
            onMouseLeave={() => handleMouseLeave(product.id)}
          >
            <img
              src={hovered[product.id] ? product.image[1] : product.image[0]}
              alt={product.name}
              className="w-[282px] h-[338px] object-contain mb-4 transition-all duration-300"
            />
          </Link>

          <div>
            <h3 className="font-semibold">
                <Link to={"/product/"}>{product.name}</Link>
            </h3>
            <div className="flex justify-between">
              <p className="font-bold text-lg mt-2">{product.price}</p>
              <Link to={"#"} className="!text-red-500 font-semibold mt-2">
                Buy Now
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeaturedProducts;
