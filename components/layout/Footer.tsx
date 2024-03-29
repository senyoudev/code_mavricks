import Link from "next/link";
import React from "react";
import { navs } from "../../data/navs";
import { FaDiscord, FaTwitter, FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <footer className=" w-full py-4  bg-linearPurple border-t border-secondaryPurple shadow-3xl">
      <div className="container  flex flex-col-reverse justify-between md:px-20 mx-auto space-y-8 md:flex-row md:space-y-0">
        <div className="flex flex-col-reverse items-center justify-between md:space-y-12 md:flex-col md:space-y-0 md:items-start">
          <div className="mx-auto my-6 text-center font-maven-pro  text-primaryBlack md:hidden">
            Copyright &copy; 2023, All Rights Reserved
          </div>
          <div className="pt-2 cursor-pointer">
            <Link href="/">
              <img src="/assets/images/MAVERICS.png" alt="logo" />
            </Link>
          </div>
          <div className="flex justify-center space-x-4">
            <a href="#">
              <img src="img/icon-instagram.svg" alt="" className="h-8" />
            </a>
          </div>
        </div>
        <div className="flex justify-around space-x-32">
          <div className="flex flex-col space-y-3 text-primaryBlack">
            {navs.map(({ title, link }, idx) => (
              <Link href={link} key={idx} scroll={false} legacyBehavior>
                <a className="cursor-pointer font-maven-pro  hover:bg-light duration-200 rounded-sm px-2 py-1">
                  {title}
                </a>
              </Link>
            ))}
          </div>
        </div>

        <div className="flex flex-col justify-around">
          <div className="flex  items-center gap-5 mx-auto text-center ">
            <Link href="/">
              <FaTwitter className="font-inria-serif  text-blackPurple " />
            </Link>

            <Link href="/">
              <FaDiscord className="font-inria-serif  text-blackPurple " />
            </Link>

            <Link href="/">
              <FaGithub className="font-inria-serif  text-blackPurple " />
            </Link>
          </div>
          <div className="hidden  md:block font-maven-pro  text-primaryBlack">
            Copyright &copy; 2023, All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
