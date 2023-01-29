import React from "react";
import Link from "next/link";
import { navs } from "../../data/navs";

function Header() {
  return (
    <header className="w-full bg-linearPurple">
      <nav className="container py-6 px-20 h-4 md:h-14 flex items-center justify-between mx-auto  bg-blur-13">
        <Link href="/">
          <figure className="cursor-pointer">
            <h1 className="font-inria-serif text-xl  leading-tight text-center text-darkPurple">
              MAVERICS
            </h1>
          </figure>
        </Link>

        <div className="h-full hidden md:flex  text-base items-center gap-4 text-blackPurple">
          {navs.map(({ title }, idx) => (
            <Link href={`#${title}`} key={idx} legacyBehavior>
              <a className="cursor-pointer font-maven-pro hover:bg-light duration-200 rounded-sm px-2 py-1">
                {title}
              </a>
            </Link>
          ))}
        </div>

        <div className="hidden md:flex">
          <Link href="/login" passHref>
            <button className="hidden md:block mt-0 py-0.5 px-3 rounded  text-darkPurple border-2 border-solid border-darkPurple font-maven-pro  font-bold  duration-300">
              Connect Wallet
            </button>
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
