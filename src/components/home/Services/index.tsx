import React from "react";
import type { ServicesProps } from "@/src/types";
import Image from "next/image";

function Services({ data }: ServicesProps) {
  if (!data || data.length === 0) return null;

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-8 my-8">
      {data.map((item, index) => (
        <div
          key={index}
          className="flex flex-col p-3 md:p-6  bg-brandGray rounded-3xl gap-7"
        >
          <div className="bg-brandGraySecondary w-fit p-2 md:p-3 rounded-2xl ">
            <Image
              width={32}
              height={32}
              src={item.icon}
              alt={item.title}
              className="w-4 h-4 md:w-6 md:h-6 icon-dark-mode "
            />
          </div>

          <div className="flex flex-col gap-1">
            <h3 className="font-semibold text-base  md:text-2xl">
              {item.title}
            </h3>
            <p className="text-sm  md:text-base text-brandGrayText opacity-60 ">
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Services;
