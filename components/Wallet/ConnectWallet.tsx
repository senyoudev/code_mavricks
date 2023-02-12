import React, { useEffect, useRef, useState } from "react";
import { useWeb3React } from "@web3-react/core";
import useBalance from "../../hooks/useBalance";
import { FaUserAlt } from "react-icons/fa";
import clsx from "clsx";
import Link from "next/link";
import { links } from "../../data/links";
import { useOnClickOutside } from "../../hooks/useOnClickOutside";

function ConnectWallet() {
  const { active, account } = useWeb3React();
  const balance = useBalance();
  const accountLength = String(account).length;
  const menuRef = useRef(null);

  useOnClickOutside(menuRef, () => setClicked(false));

  const [clicked, setClicked] = useState(false);

  const toggleMenu = () => setClicked(!clicked);

   useEffect(() => {
     const handleResize = () => {
         setClicked(false);
       
     };
     window.addEventListener("resize", handleResize);
     return () => {
       window.removeEventListener("resize", handleResize);
     };
   }, []);

  return (
    <div className="relative">
      {account ? (
        <button
          className="hidden  md:flex md:items-center mt-0 py-2 px-3 rounded  text-darkPurple border-2 border-solid border-darkPurple font-maven-pro  font-bold  duration-300 "
          onClick={toggleMenu}
        >
          <FaUserAlt className="mr-0.5" />
          {`${String(account).substring(0, 4)}` +
            "..." +
            `${String(account).substring(
              accountLength - 4,
              accountLength
            )} / ${balance}`}
        </button>
      ) : (
        <figure>Connect Wallet</figure>
      )}
      <ul
        ref={menuRef}
        className={clsx(
          "absolute top-12  font-bold bg-primaryPink w-full rounded-md ",
          {
            "h-auto duration-200 py-4 shadow-md border border-slate-200":
              clicked,
            "h-0 overflow-hidden duration-200": !clicked,
          }
        )}
      >
        {links.map((item, idx) => (
          <li
            onClick={() => setClicked(false)}
            className="group w-full cursor-pointer flex justify-center  font-maven-pro hover:bg-secondaryPurple hover:text-white hover:px-4 hover:py-2 hover:rounded duration-200 rounded-sm px-2 py-1"
            key={idx}
          >
            <Link href="/profile" legacyBehavior>
              <a className="flex gap-1 ">{item.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );

  // <button
  //   onClick={() => {
  //     if(!account) setShowModal(true)
  //   }}
  //   className="hidden md:block mt-0 py-0.5 px-3 rounded  text-darkPurple border-2 border-solid border-darkPurple font-maven-pro  font-bold  duration-300"
  // >
  //   {active
  //     ? `${String(account).substring(0, 4)}` +
  //       "..." +
  //       `${String(account).substring(
  //         accountLength - 4,
  //         accountLength
  //       )} / ${balance}`
  //     : "Connect your wallet"}
  // </button>
}

export default ConnectWallet;
