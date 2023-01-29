import Link from "next/link";
import React from "react";
import { navs } from "../../data/navs";

function Footer() {
  return (
    <footer className=" w-full py-6 px-20 bg-linearPurple">
      <div className="container  flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0">
        <div className="flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-start">
          <div className="mx-auto my-6 text-center font-maven-pro text-blackPurple md:hidden">
            Copyright &copy; 2023, All Rights Reserved
          </div>
          <div>
            <figure className="cursor-pointer">
              <h1 className="font-inria-serif text-xl  leading-tight text-center text-darkPurple">
                MAVERICS
              </h1>
            </figure>
          </div>
          <div className="flex justify-center space-x-4">
            <a href="#">
              <img src="img/icon-instagram.svg" alt="" className="h-8" />
            </a>
          </div>
        </div>
        <div className="flex justify-around space-x-32">
          <div className="flex flex-col space-y-3 text-blackPurple">
            {navs.map(({ title }, idx) => (
              <Link href={`#${title}`} key={idx} legacyBehavior>
                <a className="cursor-pointer font-maven-pro hover:bg-light duration-200 rounded-sm px-2 py-1">
                  {title}
                </a>
              </Link>
            ))}
          </div>
        </div>

        <div className="flex flex-col justify-between">
          <div>links</div>
          <div className="hidden  md:block font-maven-pro text-blackPurple">
            Copyright &copy; 2023, All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
