import React from "react";

function TrippleCard({ elements }: any) {
  return (
    <div className="bg-linearPurple md:h-52  shadow-3xl border-2 border-solid border-darkPurple items-center  rounded flex md:flex-row flex-col">
      {elements.map((element: any, index: number) => (
        <>
          <div className="md:w-1/3 flex flex-col items-center justify-around">
            <h3 className="font-sahitya text-blackPurple text-xl font-bold text-center capitalize">
              {element.title}
            </h3>
            <p className="font-maven-pro text-primaryBlack w-3/4  leading-8 text-center capitalize">
              {element.desc}
            </p>
          </div>
          {elements.length-1 != index && (
            <>
              <div className="h-3/4 w-1 border-l border-darkPurple my-auto hidden md:block"></div>
              <hr className="w-3/4 border-t border-solid border-darkPurple block md:hidden" />
            </>
          )}
        </>
      ))}

    </div>
  );
}

export default TrippleCard;
