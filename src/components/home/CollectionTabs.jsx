import React, { useState } from "react";

const tabs = [
  { name: "MEN'S", key: "men" },
  { name: "WOMEN'S", key: "women" },
  { name: "CHILDREN", key: "children" },
];

const tabContent = {
  men: [
    {
      img: "https://backend.amarbay.com/media/images/our-collection/Collection-01_J4dt4A1_iXbZBjC_ULgErf8.png",
      title: "Men's Shoes",
      desc: "Classic, stylish, comfortable",
    },
    {
      img: "https://backend.amarbay.com/media/images/our-collection/02.png",
      title: "Formal Shoes",
      desc: "Elegant and sleek design",
    },
    {
      img: "https://backend.amarbay.com/media/images/our-collection/a25fb76e-ca84-4e99-9067-c2509ff34dc1.jpeg",
      title: "Formal Shoes",
      desc: "Elegant and sleek design",
    },
  ],
  women: [
    {
      img: "https://backend.amarbay.com/media/images/our-collection/a25fb76e-ca84-4e99-9067-c2509ff34dc1.jpeg",
      title: "Heels",
      desc: "Step in style",
    },
    {
      img: "https://backend.amarbay.com/media/images/our-collection/4.jpg",
      title: "Flats",
      desc: "Comfort and beauty",
    },
    {
      img: "https://backend.amarbay.com/media/images/our-collection/Ladies-Close.jpg",
      title: "Flats",
      desc: "Comfort and beauty",
    },
  ],
  children: [
    {
      img: "https://backend.amarbay.com/media/images/our-collection/Kids.jpg",
      title: "BOYS SHOES",
      desc: "Every step is a new story",
    },
    {
      img: "https://backend.amarbay.com/media/images/our-collection/15.png",
      title: "GIRLS SHOES",
      desc: "Tiny feet, big dreams – walk in wonder",
    },
    {
      img: "https://backend.amarbay.com/media/images/our-collection/Untitled-2.png",
      title: "SPORTS",
      desc: "Jump, run, play – shoes for every day",
    },
  ],
};

const CollectionTabs = () => {
  const [activeTab, setActiveTab] = useState("men");

  return (
    <div className="w-full px-5 pb-10">
      {/* Tabs */}
      <div className="flex justify-center border-b border-gray-300">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            className={`px-6 py-2 text-lg font-semibold ${
              activeTab === tab.key
                ? "border-b-2 border-black text-black"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab(tab.key)}
          >
            {tab.name}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        {tabContent[activeTab].map((item, index) => (
          <div key={index} className="text-center group">
            <div className="!overflow-hidden">
              <img
                src={item.img}
                alt={item.title}
                className="w-full !h-[459px] object-cover group-hover:scale-105 transition transform ease-in-out  !overflow-hidden"
              />
            </div>
            <div>
              <h3 className="text-[21px] font-bold mt-4 uppercase">{item.title}</h3>
              <p className="text-lg font-medium text-gray-600 capitalize">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CollectionTabs;
