import React from "react";
import Link from "next/link";
import { navs } from "../../data/navs";

function Header() {
  return (
    <header className="fixed top-0 z-50 w-full py-4 bg-linearPurple">
        <nav className="container mx-8 h-4 md:h-14 flex items-center justify-between  bg-blur-13">
          <Link href="/">
            <figure className="cursor-pointer">
              <h1 className="font-inria-serif text-xl  leading-tight text-center text-darkPurple">MAVERICS</h1>
              {/* <h1 className="text-xl text-center leading-tight  text-darkPurple">MAVERICS</h1>  */}
            </figure>
          </Link>

          <div className="h-full hidden md:flex  text-base items-center gap-4 text-primaryPurple">
            {navs.map(({ title }, idx) => (
              <Link href={`#${title}`} key={idx} legacyBehavior>
                <a className="cursor-pointer hover:bg-light duration-200 rounded-sm px-2 py-1">
                  {title}
                </a>
              </Link>
            ))}
          </div>
        </nav>
    </header>
  );
}

export default Header;
