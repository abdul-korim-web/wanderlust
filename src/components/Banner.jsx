import React from "react";
import { Separator } from "@heroui/react";
import { ArrowRight } from "@gravity-ui/icons";

const Banner = () => {
  return (
    <div
      className={`bg-[url('../assets/Banner.png')] h-150 flex flex-col justify-between text-white items-center bg-cover bg-center`}
    >
      <div className="p-5 md:p-10 text-center flex justify-center flex-col items-center gap-4 flex-1">
        <h1 className="text-4xl md:text-6xl leading-tight">
          Discover Your <br /> Next Adventure
        </h1>

        <p className="text-sm max-w-[600px]">
          Explore breathtaking destinations and create unforgettable memories
          with our curated travel experiences.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 w-full sm:w-auto">
          <button className="uppercase bg-cyan-500 px-5 py-3 cursor-pointer flex space-x-3 items-center justify-center">
            <span>Explore Now</span>
            <ArrowRight />
          </button>

          <button className="uppercase px-5 py-3 bg-white/50 cursor-pointer">
            View Destination
          </button>
        </div>
      </div>

      <div className="bg-white/30 flex flex-col md:flex-row justify-between gap-5 w-full items-start md:items-center text-[20px] p-5 md:p-0">
        <div className="">
          <h3 className="text-sm">Location</h3>
          <p className="text-xs">Address, City or Zip</p>
        </div>

        <div className="hidden md:block">
          <Separator variant="tertiary" orientation="vertical" />
        </div>

        <div>
          <h3 className="text-sm">Date/Duration</h3>
          <p className="text-xs">Anytime/3 Days</p>
        </div>

        <div className="hidden md:block">
          <Separator variant="tertiary" orientation="vertical" />
        </div>

        <div>
          <h3 className="text-sm">Budget</h3>
          <p className="text-xs">$0-$3000</p>
        </div>

        <div className="hidden md:block">
          <Separator variant="tertiary" orientation="vertical" />
        </div>

        <div>
          <h3 className="text-sm">People</h3>
          <p className="text-xs">5-10</p>
        </div>

        <div className="bg-cyan-500 py-2 px-4 w-full md:w-auto text-center cursor-pointer">
          <h3>Search</h3>
        </div>
      </div>
    </div>
  );
};

export default Banner;