import Image from "next/image";
import React from "react";
import Button from "./Button";

const Hero = () => {
  return (
    <section className=" max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
      <div className="hero-map" />
      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
        <Image
          src="/camp.svg"
          alt="camplogo"
          width={50}
          height={50}
          className="absolute left-[-5px] top-[-30px] w-10 lg:w-[50px]"
        />
        <h1 className="bold-52 lg:bold-88">HorizonHike Camp Club</h1>
        <p className="regular-16 mt-6 text-gray-30 xl:max-w-[520px]">
          <strong>HorizonHike Camp Club</strong> is where adventure meets
          nature! From scenic hikes to cozy campfires, we bring explorers
          together for unforgettable outdoor experiences and friendships. Join
          us for thrilling trails, survival skills, and eco-friendly adventures
          — because the best memories are made under the open sky
          <br />
          <span className="font-semibold">
            Join us on our next adventure and experience the joy of the open
            trail! 🌿🏕️✨
          </span>
        </p>
        <div className="flex flex-wrap gap-5 my-11">
          <div className="flex gap-2 items-center">
            {Array(5)
              .fill(1)
              .map((_, i) => (
                <Image
                  key={i}
                  src="/star.svg"
                  alt="star"
                  width={24}
                  height={24}
                />
              ))}
          </div>
          <p className="bold-16 lg:bold-20 text-blue-70">
            246k
            <span className="regular-16 lg:regular-20 ml-1">
              excellent reviews
            </span>
          </p>
        </div>
        <div className="flex gap-3 flex-col sm:flex-row w-full">
          <Button type="button" title="Download App" variant="btn_green" />
          <Button
            className="border-2 border-green-500 hover:bg-green-500 hover:text-white"
            type="button"
            title="How we Work?"
            icon="/play.svg"
            variant="btn_white_text"
          />
        </div>
      </div>
      <div className="relative flex flex-1 items-start">
        <div className="relative z-20 flex w-[268px] flex-col gap-8 rounded-3xl bg-green-90 px-7 py-8">
          <div className="flex flex-col">
            <div className="flexBetween">
              <p className="regular-16 text-gray-20">Location</p>
              <Image
                className="cursor-pointer"
                src="/close.svg"
                alt="close"
                width={24}
                height={24}
              />
            </div>
            <p className="bold-20 text-white">Hampta Pass Trek</p>
          </div>

          <div className="flexBetween">
            <div className="flex flex-col">
              <p className="regular-16 block text-gray-20">Distance</p>
              <p className="bold-20 text-white">24-28 km</p>
            </div>
            <div className="flex flex-col">
              <p className="regular-16 block text-gray-20">Elevation</p>
              <p className="bold-20 text-white">4287 m</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
