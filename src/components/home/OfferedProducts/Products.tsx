import Image from "next/image";
import React from "react";

function Products() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6">
      <div className="bg-brandGray p-2 md:p-5 rounded-3xl relative pt-5 md:pt-[30px]">
        <div className="absolute -top-[15px] md:-top-[30px] left-0 right-0 px-3 md:px-5">
          {/* Image container with relative positioning for absolute children */}
          <div className="relative w-full h-[100px] md:h-[280px]">
            <Image
              src={"/assets/img/search-items/tv.png"}
              alt="Product 1"
              fill
              className="rounded-3xl border border-neutral-200 object-cover"
            />

            {/* Discount badge - top left */}
            <div className="absolute top-2 left-2 md:top-3 md:left-3 bg-red-500 text-white text-[10px] md:text-xs font-bold px-1.5 md:px-2.5 py-1 rounded md:rounded-lg">
              -15%
            </div>

            {/* Heart icon - top right */}
            <button className="absolute top-2 right-2 md:top-3 md:right-3 p-1 md:p-2 bg-white/80 shadow-md rounded-full backdrop-blur-sm">
              <Image
                src={"/assets/img/icons/scales.png"}
                alt="Favorite"
                width={36}
                height={36}
                className="w-4 h-3 md:w-6 md:h-5"
              />
            </button>
          </div>
        </div>

        <div className="flex flex-row gap-2 md:gap-3 items-center pt-2 mt-[85px] md:mt-[250px]">
          <div className="flex gap-1 items-center justify-center">
            <Image
              src={"/assets/img/icons/Star.png"}
              alt="Rating"
              width={50}
              height={50}
              className="w-4 h-4 md:w-5 md:h-5"
            />
            <span className="text-[10px] md:text-xs text-brandGrayText">4.6</span>
          </div>

          <div className="flex gap-1 items-center">
            <Image
              src={"/assets/img/icons/Chat.png"}
              alt="Reviews"
              width={50}
              height={50}
              className="w-4 h-4 md:w-5 md:h-5"
            />
            <span className="text-[10px] md:text-xs text-brandGrayText">6 Rəy</span>
          </div>
        </div>

        <div>
          <h4 className="text-xs md:text-sm text-brandGrayText pt-2 pb-3 md:pb-6">
            Iphone 13 Pro max, 128GB, Light blue
          </h4>
        </div>

        <div className="flex flex-row gap-3 md:gap-8">
          <div className="flex flex-col">
            <span className="text-[10px] md:text-sm text-brandGrayText opacity-50 line-through">
              3699 ₼
            </span>
            <span className="text-sm md:text-lg text-brandGrayText font-semibold">
              3499 ₼
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] md:text-sm text-brandGrayText opacity-50">12 ay</span>
            <span className="text-sm md:text-lg text-brandGrayText font-semibold">
              290 ₼
            </span>
          </div>
        </div>

        <div className="pt-3 md:pt-6 flex items-center gap-2 w-full">
          <button className="group py-1.5 md:py-2.5 cursor-pointer px-2 md:px-4 bg-brandGraySecondary rounded-xl md:rounded-2xl w-[80%] flex items-center justify-center gap-3 md:gap-6 hover:bg-brandRed hover:text-white transition-colors duration-300">
            <div className="relative w-4 h-4 md:w-5 md:h-5">
              <Image
                src={"/assets/img/icons/Buy.png"}
                alt="Add to cart"
                fill
                className="group-hover:brightness-0 group-hover:invert"
              />
            </div>
            <span className="text-xs md:text-base">Səbətə əlavə et</span>
          </button>

          {/* Favorite Button */}
          <button className="group cursor-pointer py-2 md:py-3 px-2 md:px-4 text-center bg-brandGraySecondary rounded-xl md:rounded-2xl w-[20%] flex items-center justify-center hover:bg-brandRed transition-colors duration-300">
            <div className="relative w-4 h-4 md:w-5 md:h-5">
              <Image
                src={"/assets/img/icons/Heart.png"}
                alt="Favorite"
                fill
                className="group-hover:brightness-0 group-hover:invert"
              />
            </div>
          </button>
        </div>
      </div>
      <div className="bg-brandGray p-2 md:p-5 rounded-3xl relative pt-5 md:pt-[30px]">
        <div className="absolute -top-[15px] md:-top-[30px] left-0 right-0 px-3 md:px-5">
          {/* Image container with relative positioning for absolute children */}
          <div className="relative w-full h-[100px] md:h-[280px]">
            <Image
              src={"/assets/img/search-items/tv.png"}
              alt="Product 1"
              fill
              className="rounded-3xl border border-neutral-200 object-cover"
            />

            {/* Discount badge - top left */}
            <div className="absolute top-2 left-2 md:top-3 md:left-3 bg-red-500 text-white text-[10px] md:text-xs font-bold px-1.5 md:px-2.5 py-1 rounded md:rounded-lg">
              -15%
            </div>

            {/* Heart icon - top right */}
            <button className="absolute top-2 right-2 md:top-3 md:right-3 p-1 md:p-2 bg-white/80 shadow-md rounded-full backdrop-blur-sm">
              <Image
                src={"/assets/img/icons/scales.png"}
                alt="Favorite"
                width={36}
                height={36}
                className="w-4 h-3 md:w-6 md:h-5"
              />
            </button>
          </div>
        </div>

        <div className="flex flex-row gap-2 md:gap-3 items-center pt-2 mt-[85px] md:mt-[250px]">
          <div className="flex gap-1 items-center justify-center">
            <Image
              src={"/assets/img/icons/Star.png"}
              alt="Rating"
              width={50}
              height={50}
              className="w-4 h-4 md:w-5 md:h-5"
            />
            <span className="text-[10px] md:text-xs text-brandGrayText">4.6</span>
          </div>

          <div className="flex gap-1 items-center">
            <Image
              src={"/assets/img/icons/Chat.png"}
              alt="Reviews"
              width={50}
              height={50}
              className="w-4 h-4 md:w-5 md:h-5"
            />
            <span className="text-[10px] md:text-xs text-brandGrayText">6 Rəy</span>
          </div>
        </div>

        <div>
          <h4 className="text-xs md:text-sm text-brandGrayText pt-2 pb-3 md:pb-6">
            Iphone 13 Pro max, 128GB, Light blue
          </h4>
        </div>

        <div className="flex flex-row gap-3 md:gap-8">
          <div className="flex flex-col">
            <span className="text-[10px] md:text-sm text-brandGrayText opacity-50 line-through">
              3699 ₼
            </span>
            <span className="text-sm md:text-lg text-brandGrayText font-semibold">
              3499 ₼
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] md:text-sm text-brandGrayText opacity-50">12 ay</span>
            <span className="text-sm md:text-lg text-brandGrayText font-semibold">
              290 ₼
            </span>
          </div>
        </div>

        <div className="pt-3 md:pt-6 flex items-center gap-2 w-full">
          <button className="group py-1.5 md:py-2.5 cursor-pointer px-2 md:px-4 bg-brandGraySecondary rounded-xl md:rounded-2xl w-[80%] flex items-center justify-center gap-3 md:gap-6 hover:bg-brandRed hover:text-white transition-colors duration-300">
            <div className="relative w-4 h-4 md:w-5 md:h-5">
              <Image
                src={"/assets/img/icons/Buy.png"}
                alt="Add to cart"
                fill
                className="group-hover:brightness-0 group-hover:invert"
              />
            </div>
            <span className="text-xs md:text-base">Səbətə əlavə et</span>
          </button>

          {/* Favorite Button */}
          <button className="group cursor-pointer py-2 md:py-3 px-2 md:px-4 text-center bg-brandGraySecondary rounded-xl md:rounded-2xl w-[20%] flex items-center justify-center hover:bg-brandRed transition-colors duration-300">
            <div className="relative w-4 h-4 md:w-5 md:h-5">
              <Image
                src={"/assets/img/icons/Heart.png"}
                alt="Favorite"
                fill
                className="group-hover:brightness-0 group-hover:invert"
              />
            </div>
          </button>
        </div>
      </div>
      <div className="bg-brandGray p-2 md:p-5 rounded-3xl relative pt-5 md:pt-[30px]">
        <div className="absolute -top-[15px] md:-top-[30px] left-0 right-0 px-3 md:px-5">
          {/* Image container with relative positioning for absolute children */}
          <div className="relative w-full h-[100px] md:h-[280px]">
            <Image
              src={"/assets/img/search-items/tv.png"}
              alt="Product 1"
              fill
              className="rounded-3xl border border-neutral-200 object-cover"
            />

            {/* Discount badge - top left */}
            <div className="absolute top-2 left-2 md:top-3 md:left-3 bg-red-500 text-white text-[10px] md:text-xs font-bold px-1.5 md:px-2.5 py-1 rounded md:rounded-lg">
              -15%
            </div>

            {/* Heart icon - top right */}
            <button className="absolute top-2 right-2 md:top-3 md:right-3 p-1 md:p-2 bg-white/80 shadow-md rounded-full backdrop-blur-sm">
              <Image
                src={"/assets/img/icons/scales.png"}
                alt="Favorite"
                width={36}
                height={36}
                className="w-4 h-3 md:w-6 md:h-5"
              />
            </button>
          </div>
        </div>

        <div className="flex flex-row gap-2 md:gap-3 items-center pt-2 mt-[85px] md:mt-[250px]">
          <div className="flex gap-1 items-center justify-center">
            <Image
              src={"/assets/img/icons/Star.png"}
              alt="Rating"
              width={50}
              height={50}
              className="w-4 h-4 md:w-5 md:h-5"
            />
            <span className="text-[10px] md:text-xs text-brandGrayText">4.6</span>
          </div>

          <div className="flex gap-1 items-center">
            <Image
              src={"/assets/img/icons/Chat.png"}
              alt="Reviews"
              width={50}
              height={50}
              className="w-4 h-4 md:w-5 md:h-5"
            />
            <span className="text-[10px] md:text-xs text-brandGrayText">6 Rəy</span>
          </div>
        </div>

        <div>
          <h4 className="text-xs md:text-sm text-brandGrayText pt-2 pb-3 md:pb-6">
            Iphone 13 Pro max, 128GB, Light blue
          </h4>
        </div>

        <div className="flex flex-row gap-3 md:gap-8">
          <div className="flex flex-col">
            <span className="text-[10px] md:text-sm text-brandGrayText opacity-50 line-through">
              3699 ₼
            </span>
            <span className="text-sm md:text-lg text-brandGrayText font-semibold">
              3499 ₼
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] md:text-sm text-brandGrayText opacity-50">12 ay</span>
            <span className="text-sm md:text-lg text-brandGrayText font-semibold">
              290 ₼
            </span>
          </div>
        </div>

        <div className="pt-3 md:pt-6 flex items-center gap-2 w-full">
          <button className="group py-1.5 md:py-2.5 cursor-pointer px-2 md:px-4 bg-brandGraySecondary rounded-xl md:rounded-2xl w-[80%] flex items-center justify-center gap-3 md:gap-6 hover:bg-brandRed hover:text-white transition-colors duration-300">
            <div className="relative w-4 h-4 md:w-5 md:h-5">
              <Image
                src={"/assets/img/icons/Buy.png"}
                alt="Add to cart"
                fill
                className="group-hover:brightness-0 group-hover:invert"
              />
            </div>
            <span className="text-xs md:text-base">Səbətə əlavə et</span>
          </button>

          {/* Favorite Button */}
          <button className="group cursor-pointer py-2 md:py-3 px-2 md:px-4 text-center bg-brandGraySecondary rounded-xl md:rounded-2xl w-[20%] flex items-center justify-center hover:bg-brandRed transition-colors duration-300">
            <div className="relative w-4 h-4 md:w-5 md:h-5">
              <Image
                src={"/assets/img/icons/Heart.png"}
                alt="Favorite"
                fill
                className="group-hover:brightness-0 group-hover:invert"
              />
            </div>
          </button>
        </div>
      </div>
      <div className="bg-brandGray p-2 md:p-5 rounded-3xl relative pt-5 md:pt-[30px]">
        <div className="absolute -top-[15px] md:-top-[30px] left-0 right-0 px-3 md:px-5">
          {/* Image container with relative positioning for absolute children */}
          <div className="relative w-full h-[100px] md:h-[280px]">
            <Image
              src={"/assets/img/search-items/tv.png"}
              alt="Product 1"
              fill
              className="rounded-3xl border border-neutral-200 object-cover"
            />

            {/* Discount badge - top left */}
            <div className="absolute top-2 left-2 md:top-3 md:left-3 bg-red-500 text-white text-[10px] md:text-xs font-bold px-1.5 md:px-2.5 py-1 rounded md:rounded-lg">
              -15%
            </div>

            {/* Heart icon - top right */}
            <button className="absolute top-2 right-2 md:top-3 md:right-3 p-1 md:p-2 bg-white/80 shadow-md rounded-full backdrop-blur-sm">
              <Image
                src={"/assets/img/icons/scales.png"}
                alt="Favorite"
                width={36}
                height={36}
                className="w-4 h-3 md:w-6 md:h-5"
              />
            </button>
          </div>
        </div>

        <div className="flex flex-row gap-2 md:gap-3 items-center pt-2 mt-[85px] md:mt-[250px]">
          <div className="flex gap-1 items-center justify-center">
            <Image
              src={"/assets/img/icons/Star.png"}
              alt="Rating"
              width={50}
              height={50}
              className="w-4 h-4 md:w-5 md:h-5"
            />
            <span className="text-[10px] md:text-xs text-brandGrayText">4.6</span>
          </div>

          <div className="flex gap-1 items-center">
            <Image
              src={"/assets/img/icons/Chat.png"}
              alt="Reviews"
              width={50}
              height={50}
              className="w-4 h-4 md:w-5 md:h-5"
            />
            <span className="text-[10px] md:text-xs text-brandGrayText">6 Rəy</span>
          </div>
        </div>

        <div>
          <h4 className="text-xs md:text-sm text-brandGrayText pt-2 pb-3 md:pb-6">
            Iphone 13 Pro max, 128GB, Light blue
          </h4>
        </div>

        <div className="flex flex-row gap-3 md:gap-8">
          <div className="flex flex-col">
            <span className="text-[10px] md:text-sm text-brandGrayText opacity-50 line-through">
              3699 ₼
            </span>
            <span className="text-sm md:text-lg text-brandGrayText font-semibold">
              3499 ₼
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] md:text-sm text-brandGrayText opacity-50">12 ay</span>
            <span className="text-sm md:text-lg text-brandGrayText font-semibold">
              290 ₼
            </span>
          </div>
        </div>

        <div className="pt-3 md:pt-6 flex items-center gap-2 w-full">
          <button className="group py-1.5 md:py-2.5 cursor-pointer px-2 md:px-4 bg-brandGraySecondary rounded-xl md:rounded-2xl w-[80%] flex items-center justify-center gap-3 md:gap-6 hover:bg-brandRed hover:text-white transition-colors duration-300">
            <div className="relative w-4 h-4 md:w-5 md:h-5">
              <Image
                src={"/assets/img/icons/Buy.png"}
                alt="Add to cart"
                fill
                className="group-hover:brightness-0 group-hover:invert"
              />
            </div>
            <span className="text-xs md:text-base">Səbətə əlavə et</span>
          </button>

          {/* Favorite Button */}
          <button className="group cursor-pointer py-2 md:py-3 px-2 md:px-4 text-center bg-brandGraySecondary rounded-xl md:rounded-2xl w-[20%] flex items-center justify-center hover:bg-brandRed transition-colors duration-300">
            <div className="relative w-4 h-4 md:w-5 md:h-5">
              <Image
                src={"/assets/img/icons/Heart.png"}
                alt="Favorite"
                fill
                className="group-hover:brightness-0 group-hover:invert"
              />
            </div>
          </button>
        </div>
      </div>
      <div className="bg-brandGray p-2 md:p-5 rounded-3xl relative pt-5 md:pt-[30px]">
        <div className="absolute -top-[15px] md:-top-[30px] left-0 right-0 px-3 md:px-5">
          {/* Image container with relative positioning for absolute children */}
          <div className="relative w-full h-[100px] md:h-[280px]">
            <Image
              src={"/assets/img/search-items/tv.png"}
              alt="Product 1"
              fill
              className="rounded-3xl border border-neutral-200 object-cover"
            />

            {/* Discount badge - top left */}
            <div className="absolute top-2 left-2 md:top-3 md:left-3 bg-red-500 text-white text-[10px] md:text-xs font-bold px-1.5 md:px-2.5 py-1 rounded md:rounded-lg">
              -15%
            </div>

            {/* Heart icon - top right */}
            <button className="absolute top-2 right-2 md:top-3 md:right-3 p-1 md:p-2 bg-white/80 shadow-md rounded-full backdrop-blur-sm">
              <Image
                src={"/assets/img/icons/scales.png"}
                alt="Favorite"
                width={36}
                height={36}
                className="w-4 h-3 md:w-6 md:h-5"
              />
            </button>
          </div>
        </div>

        <div className="flex flex-row gap-2 md:gap-3 items-center pt-2 mt-[85px] md:mt-[250px]">
          <div className="flex gap-1 items-center justify-center">
            <Image
              src={"/assets/img/icons/Star.png"}
              alt="Rating"
              width={50}
              height={50}
              className="w-4 h-4 md:w-5 md:h-5"
            />
            <span className="text-[10px] md:text-xs text-brandGrayText">4.6</span>
          </div>

          <div className="flex gap-1 items-center">
            <Image
              src={"/assets/img/icons/Chat.png"}
              alt="Reviews"
              width={50}
              height={50}
              className="w-4 h-4 md:w-5 md:h-5"
            />
            <span className="text-[10px] md:text-xs text-brandGrayText">6 Rəy</span>
          </div>
        </div>

        <div>
          <h4 className="text-xs md:text-sm text-brandGrayText pt-2 pb-3 md:pb-6">
            Iphone 13 Pro max, 128GB, Light blue
          </h4>
        </div>

        <div className="flex flex-row gap-3 md:gap-8">
          <div className="flex flex-col">
            <span className="text-[10px] md:text-sm text-brandGrayText opacity-50 line-through">
              3699 ₼
            </span>
            <span className="text-sm md:text-lg text-brandGrayText font-semibold">
              3499 ₼
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] md:text-sm text-brandGrayText opacity-50">12 ay</span>
            <span className="text-sm md:text-lg text-brandGrayText font-semibold">
              290 ₼
            </span>
          </div>
        </div>

        <div className="pt-3 md:pt-6 flex items-center gap-2 w-full">
          <button className="group py-1.5 md:py-2.5 cursor-pointer px-2 md:px-4 bg-brandGraySecondary rounded-xl md:rounded-2xl w-[80%] flex items-center justify-center gap-3 md:gap-6 hover:bg-brandRed hover:text-white transition-colors duration-300">
            <div className="relative w-4 h-4 md:w-5 md:h-5">
              <Image
                src={"/assets/img/icons/Buy.png"}
                alt="Add to cart"
                fill
                className="group-hover:brightness-0 group-hover:invert"
              />
            </div>
            <span className="text-xs md:text-base">Səbətə əlavə et</span>
          </button>

          {/* Favorite Button */}
          <button className="group cursor-pointer py-2 md:py-3 px-2 md:px-4 text-center bg-brandGraySecondary rounded-xl md:rounded-2xl w-[20%] flex items-center justify-center hover:bg-brandRed transition-colors duration-300">
            <div className="relative w-4 h-4 md:w-5 md:h-5">
              <Image
                src={"/assets/img/icons/Heart.png"}
                alt="Favorite"
                fill
                className="group-hover:brightness-0 group-hover:invert"
              />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Products;