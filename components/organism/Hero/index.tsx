import React, { useEffect } from "react";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import { RainbowHighlight } from "../../molecule/RainbowHighlight";

export default function Hero() {
  const colors = ["#F59E0B", "#84CC16", "#10B981", "#3B82F6"];
  const jobs =[
    "Back-End.",
    "Front-End.",
    "Hybrid Mobile.",
    "Database.",
    "Docker."
  ]
  return (
    <section className="bg-[#F1F1F1] -mt-40 dark:bg-transparent pb-40">
      <div className="flex flex-row justify-center items-start overflow-hidden">
        <div className="w-full md:w-1/2 mx-auto text-center md:text-left lg:p-20">
          <RoughNotationGroup show={true}>
            {jobs.map((item,key)=>(
              <RainbowHighlight color={colors[key%item.length]} key={key}>
                <h1 className="text-4xl md:text-8xl font-bold text-gray-700 dark:text-gray-600 my-2">
                  {item}
                </h1>
              </RainbowHighlight>
            ))}
          </RoughNotationGroup>
       </div>
      </div>
    </section>
   );
}