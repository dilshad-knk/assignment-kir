import React from "react";

const Banner = ({ color, opacity, angle }) => (
  <div
    className={`absolute w-full h-12 ${color} ${opacity} overflow-hidden`}
    style={{ transform: `rotate(${angle}deg)` }}
  >
    <div className="animate-marquee whitespace-nowrap py-3">
      {[...Array(10)].map((_, i) => (
        <span key={i} className="mx-4 text-white font-bold">
          WEFO STUDIO ◆
        </span>
      ))}
    </div>
  </div>
);

const Banners = () => {
  return (
    <>
      <div className="pt-24 pb-28 md:mb-20">
        <Banner color="bg-zinc-500" opacity="opacity-40" angle="-3" />

        <Banner color="bg-custom-purple" opacity="opacity-90" angle="3" />
      </div>
    </>
  );
};

export default Banners;
