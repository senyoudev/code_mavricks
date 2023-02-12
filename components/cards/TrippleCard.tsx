import Link from "next/link";
import React from "react";
import { Ielement } from "../../interfaces/Ielement";


function TrippleCard({ elements }: any) {
  return (
    <div className="bg-linearPurple w-full md:h-52  shadow-3xl border-2 border-solid border-secondaryPurple items-center  rounded flex md:flex-row flex-col">
      {elements.map((element: Ielement, index: number) => (
        <>
          <div className="md:w-1/3 flex flex-col items-center justify-around" key={index}>
            <h3 className="font-sahitya text-blackPurple text-xl font-bold text-center capitalize">
              {element.title}
            </h3>
            <p className="font-maven-pro text-primaryBlack w-3/4  leading-8 text-center capitalize">
              {element.desc}
            </p>
            {element.button && (
              <Link href="#" legacyBehavior>
                <a className="inline-flex items-center mb-4 md:mb-0 mt-2 px-3 py-2 text-sm font-medium text-center text-secondaryPurple border-secondaryPurple border-2 border-solid hover:text-white  rounded-lg hover:bg-secondaryPurple focus:ring-4 focus:outline-none focus:ring-blue-300  dark:hover:bg-secondaryPurple dark:focus:ring-secondaryPurple">
                  {element.button}
                  <svg
                    aria-hidden="true"
                    className="w-4 h-4 ml-2 -mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </a>
              </Link>
            )}
          </div>
          {elements.length - 1 != index && (
            <>
              <div className="h-3/4 w-1 border-l-2 border-secondaryPurple my-auto hidden md:block"></div>
              <hr className="w-3/4 border-t-2 border-solid border-secondaryPurple block md:hidden" />
            </>
          )}
        </>
      ))}
    </div>
  );
}

export default TrippleCard;

// import Link from "next/link";
// import React from "react";

// function TrippleCard({ elements }: any) {
//   return (
//     <div className="bg-linearPurple md:h-52  shadow-3xl border-2 border-solid border-darkPurple items-center  rounded flex md:flex-row flex-col">
//       {elements.map((element: any, index: number) => (
//         <>
//           <div className="md:w-1/3 flex flex-col items-center justify-around">
//             <h3 className="font-sahitya text-blackPurple text-xl font-bold text-center capitalize">
//               {element.title}
//             </h3>
//             <p className="font-maven-pro text-primaryBlack w-3/4  leading-8 text-center capitalize">
//               {element.desc}
//             </p>
//             {element.button && (
//               <Link href="#" legacyBehavior>
//                 <a className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-purple-700 rounded-lg hover:bg-dark-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800">
//                   {element.button}
//                   <svg
//                     aria-hidden="true"
//                     className="w-4 h-4 ml-2 -mr-1"
//                     fill="currentColor"
//                     viewBox="0 0 20 20"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <path
//                       fill-rule="evenodd"
//                       d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
//                       clip-rule="evenodd"
//                     ></path>
//                   </svg>
//                 </a>
//               </Link>
//             )}
//           </div>
//           {elements.length - 1 != index && (
//             <>
//               <div className="h-3/4 w-1 border-l border-darkPurple my-auto hidden md:block"></div>
//               <hr className="w-3/4 border-t border-solid border-darkPurple block md:hidden" />
//             </>
//           )}
//         </>
//       ))}
//     </div>
//   );
// }

// export default TrippleCard;
