import React from "react";
import { Inav } from "../../interfaces/Inav";
import Link from "next/link";


type mobilemenuProps = {
    navs:Inav[],
    isOpen:boolean
}

function MobileMenu({navs,isOpen}:mobilemenuProps) {
  return (
    <div className="md:hidden">
      <div
        id="menu"
        className={`absolute card flex-col z-10 items-center mt-2 rounded-md  self-end py-8 space-y-6 font-bold bg-primaryPink sm:w-auto sm:self-center left-6 right-6 drop-shadow-md ${
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
  );
}

export default MobileMenu;
