import Image from "next/image";
import React, { useState, useRef } from "react";
import { TbLayoutGrid } from "react-icons/tb";
import { FiSearch } from "react-icons/fi";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const cities = ["Bakı", "Gəncə", "Sumqayıt", "Şəki", "Naxçıvan"];

const searchSuggestions = [
  {
    id: 1,
    name: "iPhone 15 Pro Max",
    image: "/assets/img/search-items/phone.png",
    price: "3,499₼",
  },
  {
    id: 2,
    name: "Samsung QLED TV",
    image: "/assets/img/search-items/tv.png",
    price: "1,899₼",
  },
  {
    id: 3,
    name: "ASUS Laptop",
    image: "/assets/img/search-items/laptop.png",
    price: "2,199₼",
  },
];

function TopToolBar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState("Bakı");
  const [searchOpen, setSearchOpen] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);

  const handleCitySelect = (city: string) => {
    setSelectedCity(city);
    setDropdownOpen(false);
  };

  const handleSearchClick = () => {
    setSearchOpen((prev) => !prev);
    searchInputRef.current?.focus();
  };

  return (
    <div className="my-5 flex items-center gap-4 justify-between flex-wrap relative">
      {/* Logo and Catalog Button - Mobile Row */}
      <div className="flex items-center gap-4 flex-shrink-0">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Image
            src="/assets/img/logo-be.png"
            width={100}
            height={100}
            quality={100}
            alt="logo Baku Electronics"
            className="w-12 h-12 object-cover"
            priority
          />
        </div>

        {/* Kataloq Button */}
        <div className="bg-brandBtn py-3 px-5 rounded-full flex items-center gap-2 text-white text-base font-sfpro font-semibold hover:brightness-110 transition flex-shrink-0">
          <TbLayoutGrid className="text-xl" />
          <span className="hidden sm:inline">Kataloq</span>
        </div>
      </div>

      {/* Search Input - Takes remaining space on mobile */}
      <div className="flex-1 min-w-[150px] relative">
        <div
          className="bg-brandGray transition hover:bg-brandGraySecondary py-3 px-4 rounded-xl flex items-center cursor-pointer"
          onClick={handleSearchClick}
        >
          <input
            ref={searchInputRef}
            type="text"
            placeholder="Axtar..."
            className="bg-transparent flex-1 outline-none text-sm placeholder-placeholderText opacity-50"
            readOnly
          />
          <FiSearch className="text-placeholderText opacity-50 text-lg" />
        </div>

        {searchOpen && (
          <ul className="absolute z-20 w-full bg-brandGray border border-gray-200 mt-2 rounded-xl shadow-lg animate-fadeIn">
            {searchSuggestions.map((item) => (
              <li
                key={item.id}
                className="px-4 py-3 flex items-center justify-between rounded-xl gap-4 hover:bg-brandGraySecondary cursor-pointer transition"
              >
                <div className="flex items-center gap-3">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={40}
                    height={40}
                    className="w-10 h-10 object-contain rounded"
                  />
                  <span className="text-sm text-brandGrayText opacity-50">
                    {item.name}
                  </span>
                </div>
                <span className="text-sm font-semibold text-brandToggle">
                  {item.price}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* City Dropdown - Hidden on mobile */}
      <div className="hidden md:block relative max-w-2xs w-full">
        <div
          onClick={() => setDropdownOpen((prev) => !prev)}
          className="bg-brandGray py-3 px-4 rounded-xl flex items-center justify-between cursor-pointer transition hover:bg-brandGraySecondary"
        >
          <span className="text-sm text-brandGrayText opacity-50 font-medium">
            {selectedCity}
          </span>
          {dropdownOpen ? (
            <IoIosArrowUp className="text-lg text-placeholderText opacity-70" />
          ) : (
            <IoIosArrowDown className="text-lg text-placeholderText opacity-70" />
          )}
        </div>

        {dropdownOpen && (
          <ul className="absolute z-10 w-full bg-brandGray border border-gray-200 mt-2 rounded-xl shadow-lg overflow-hidden animate-fadeIn">
            {cities
              .filter((city) => city !== selectedCity)
              .map((city) => (
                <li
                  key={city}
                  onClick={() => handleCitySelect(city)}
                  className="px-4 py-3 text-sm text-placeholderText opacity-50 hover:bg-brandGraySecondary cursor-pointer transition"
                >
                  {city}
                </li>
              ))}
          </ul>
        )}
      </div>

      {/* Icons - Hidden on mobile */}
      {[
        { src: "scales.png", alt: "scale icon" },
        { src: "Buy.png", alt: "buy icon" },
        { src: "Heart.png", alt: "heart icon" },
        { src: "user.png", alt: "user icon" },
      ].map((icon, i) => (
        <div
          key={i}
          className="hidden md:flex p-3 bg-brandGray rounded-xl items-center gap-2 hover:bg-brandGraySecondary transition cursor-pointer"
        >
          <Image
            src={`/assets/img/icons/${icon.src}`}
            width={50}
            height={50}
            alt={icon.alt}
            className="w-6 h-6 object-contain icon-dark-mode"
          />
        </div>
      ))}
    </div>
  );
}

export default TopToolBar;