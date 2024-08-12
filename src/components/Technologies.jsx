import React from "react";
import { technologies } from "../content";

const Technologies = () => {
  return (
    <div>
      <section className="py-[35px] pt-[36px]">
        <h3 className="mb-[20px] text-[24px] font-fw-500 max-md:text-[22px] max-md:font-fw-600">
            Frameworks / Libraries
        </h3>
        <div className="flex flex-col">
          <ul className="flex flex-wrap items-center justify-center gap-8">
            {technologies.frameworks.map((item, index) => (
              <li key={index} className="w-1/6">
                <img src={item.image} alt={item.title} className="max-h-40"/>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="mb-[35px] pt-[36px]">
        <h3 className="mb-[20px] text-[24px] font-fw-500 max-md:text-[22px] max-md:font-fw-600">
          Programming Languages / Databases
        </h3>
        <div className="flex flex-col">
          <ul className="flex flex-wrap items-center justify-center gap-8">
            {technologies.languages.map((item, index) => (
              <li key={index} className="w-1/6">
                <img src={item.image} alt={item.title} className="max-h-40" />
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="mb-[35px] pt-[36px]">
        <h3 className="mb-[20px] text-[24px] font-fw-500 max-md:text-[22px] max-md:font-fw-600">
          Developer Tools
        </h3>
        <div className="flex flex-col">
          <ul className="flex flex-wrap items-center justify-center gap-8">
            {technologies.tools.map((item, index) => (
              <li key={index} className="w-1/6">
                <img src={item.image} alt={item.title} className="max-h-40" />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Technologies;
