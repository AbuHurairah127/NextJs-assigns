"use client";
import Image from "next/image";
import logo from "./../../assets/panaverse80_80.png";
import Link from "next/link";
import { Links } from "@/data/NavlinksData";
import React, { useState } from "react";
import { Fade as Hamburger } from "hamburger-react";

const NavLinks = ({ name, path }: { name: string; path: string }) => {
  return (
    <Link
      href={path}
      className="inline text-xl uppercase  transition-all duration-1000 hover:text-red-600 hover:font-bold"
    >
      {name}
    </Link>
  );
};

const Navbar = () => {
  const [isNavbar, setIsNavbar] = useState<boolean>(false);

  return (
    <>
      <div className="h-20 flex justify-between items-center px-5 z-50 bg-white">
        <Image src={logo} alt="Panaverse DAO logo" className="w-11 h-11" />
        <nav className="hidden  w-[50vw] lg:flex justify-between">
          {Links.map((link, i) => (
            <NavLinks key={i} name={link.name} path={link.path} />
          ))}
        </nav>
        <a
          className={
            "bg-red-700 text-white py-4 px-12 rounded-md text-lg cursor-pointer transition-all duration-500 hover:bg-red-600 hidden lg:block"
          }
        >
          Start Your Journey
        </a>
        <div className="lg:hidden z-50">
          <Hamburger
            toggled={isNavbar}
            color="#9d0208"
            rounded={true}
            onToggle={() => setIsNavbar(!isNavbar)}
          />
        </div>
      </div>
      <div
        className={
          isNavbar
            ? "lg:hidden fixed left-0 top-20  transition-transform  w-screen z-0 bg-white flex flex-col items-center"
            : "lg:hidden fixed left-0 top-0 transition-transform -translate-y-full duration-500 w-screen bg-white flex flex-col items-center"
        }
      >
        {" "}
        <nav className="flex flex-col  justify-between">
          {Links.map((link, i) => (
            <div className="py-3 text-center border w-screen">
              <NavLinks key={i} name={link.name} path={link.path} />
            </div>
          ))}
        </nav>
      </div>
    </>
  );
};

export default Navbar;
