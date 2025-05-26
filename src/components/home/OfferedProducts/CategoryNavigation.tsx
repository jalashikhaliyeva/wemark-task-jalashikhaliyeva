import React from "react";

function CategoryNavigation() {
  return (
    <div className="flex flex-col md:flex-row gap-2 justify-between items-center pb-14">
      <div className="flex flex-col gap-1">
        <h4 className="text-brandRed text-sm font-normal">Özəl təkliflər</h4>
        <h5 className="text-placeholderText text-xl md:text-2xl font-semibold">
          Payız gəldi,şərtlər daha da sadələşdi
        </h5>
      </div>

      <div className="bg-brandGray py-3 px-6 rounded-full flex items-center justify-center gap-7">
        <p className="text-placeholderText text-xs md:text-sm font-semibold">Hamısı</p>
        <p className="text-placeholderText text-xs md:text-smopacity-50 font-semibold">
          Məişət əşyaları
        </p>
        <p className="text-placeholderText text-xs md:text-sm  opacity-50 font-semibold">
          Mebellər
        </p>
        <p className="text-placeholderText text-xs md:text-sm  opacity-50 font-semibold">
          Elektronika
        </p>
      </div>
    </div>
  );
}

export default CategoryNavigation;
