"use client"
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Navlogo from "@/assets/Wanderlast.png";
import { Person, Bars } from "@gravity-ui/icons";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navMenu = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Destinations",
      path: "/",
    },
    {
      name: "My Bookings",
      path: "/",
    },
    {
      name: "Admin",
      path: "/",
    },
  ];

  return (
    <div className="px-5 md:px-10 py-3 m-2 bg-white">
      {/* top navbar */}
      <div className="flex justify-between items-center">
        
        {/* logo */}
        <div>
          <Image
            src={Navlogo}
            width={150}
            height={80}
            alt="Wanderlast.png"
            className="w-[120px] md:w-[170px] h-auto"
          />
        </div>

        {/* desktop nav */}
        <div className="hidden md:block">
          <ul className="flex space-x-6 text-[16px] font-medium text-[#0c0b0b]">
            {navMenu.map((item, index) => (
              <li key={index}>
                <Link href={item?.path}>{item?.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* desktop auth */}
        <div className="hidden md:flex space-x-4 text-[16px] font-medium">
          <Link href={`/`} className="flex space-x-1 items-center">
            <Person />
            <span>Profile</span>
          </Link>

          <Link href={`/`}>Login</Link>
          <Link href={`/`}>Sign Up</Link>
        </div>

        {/* mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden"
        >
          <Bars width={24} height={24} />
        </button>
      </div>

      {/* mobile menu */}
      {isOpen && (
        <div className="md:hidden mt-4 bg-gray-100 rounded-xl p-4">
          <ul className="flex flex-col space-y-4 text-[15px] font-medium">
            {navMenu.map((item, index) => (
              <li key={index}>
                <Link href={item?.path}>{item?.name}</Link>
              </li>
            ))}
          </ul>

          <div className="flex flex-col space-y-3 mt-5">
            <Link href={`/`} className="flex items-center space-x-1">
              <Person />
              <span>Profile</span>
            </Link>

            <Link href={`/`}>Login</Link>
            <Link href={`/`}>Sign Up</Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;