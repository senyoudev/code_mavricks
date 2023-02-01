import React, { useState, useEffect } from "react";
import Link from "next/link";
import { navs } from "../../data/navs";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header
      className={
        isOpen
          ? "w-full bg-linearPurple pb-48 transition-all ease-in-out duration-300"
          : "w-full bg-linearPurple transition-all ease-in-out duration-300 "
      }
    >
      <nav className=" relative container mx-auto p-6 container py-6 px-20 h-4 md:h-14  mx-auto  bg-blur-13">
        <div className="flex items-center justify-between">
          <div className="pt-2 cursor-pointer">
            <Link href="/">
              <img src="/assets/images/MAVERICS.png" alt="logo" />
            </Link>
          </div>

          <div className="h-full hidden md:flex  text-base items-center gap-4 text-blackPurple">
            {navs.map(({ title, link }, idx) => (
              <Link href={link} key={idx} scroll={false} legacyBehavior>
                <a className="cursor-pointer font-maven-pro hover:bg-light duration-200 rounded-sm px-2 py-1">
                  {title}
                </a>
              </Link>
            ))}
          </div>

          <button className="hidden md:block mt-0 py-0.5 px-3 rounded  text-darkPurple border-2 border-solid border-darkPurple font-maven-pro  font-bold  duration-300">
            Connect Wallet
          </button>

          <button
            id="menu-btn"
            className={
              isOpen
                ? "block hamburger md:hidden focus:outline-none open"
                : "block hamburger md:hidden focus:outline-none"
            }
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="hamburger-top"></span>
            <span className="hamburger-middle"></span>
            <span className="hamburger-bottom"></span>
          </button>
        </div>

        <div className="md:hidden">
          <div
            id="menu"
            className={`absolute card flex-col z-10 items-center rounded-md  self-end py-8 space-y-6 font-bold bg-primaryPink sm:w-auto sm:self-center left-6 right-6 drop-shadow-md ${
              isOpen ? "flex" : "hidden"
            }`}
          >
            {navs.map(({ title, link }, idx) => (
              <Link href={link} key={idx} scroll={false} legacyBehavior>
                <a className="cursor-pointer  font-maven-pro hover:bg-secondaryPurple hover:text-white hover:px-4 hover:py-2 hover:rounded duration-200 rounded-sm px-2 py-1">
                  {title}
                </a>
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
