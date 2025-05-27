import { ProductsProps } from "@/src/types";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";

export default function Products({ products }: ProductsProps) {
  const PAGE_SIZE = 8;
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const [loading, setLoading] = useState(false);
  const loaderRef = useRef<HTMLDivElement>(null);

  const itemsToRender = products.slice(0, visibleCount);

  useEffect(() => {
    if (!loaderRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (
          entry.isIntersecting &&
          !loading &&
          visibleCount < products.length
        ) {
          setLoading(true);
          setTimeout(() => {
            setVisibleCount((prev) =>
              Math.min(prev + PAGE_SIZE, products.length)
            );
            setLoading(false);
          }, 800);
        }
      },
      { rootMargin: "200px" }
    );
    observer.observe(loaderRef.current);
    return () => observer.disconnect();
  }, [loading, visibleCount, products.length]);

  if (products.length === 0) {
    return (
      <p className="text-center py-10">Bu kateqoriya üzrə məhsul tapılmadı.</p>
    );
  }

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6">
        {itemsToRender.map((item) => (
          <div
            key={item.id}
            className="bg-brandGray mt-5 md:mt-10 p-2 md:p-5 rounded-3xl relative pt-5 md:pt-[30px]"
          >
            {/* Image */}
            <div className="absolute -top-[15px] md:-top-[30px] left-0 right-0 px-3 md:px-5">
              <div className="relative w-full h-[100px] md:h-[280px]">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="rounded-3xl border border-neutral-200 object-cover"
                />
                <div className="absolute top-2 left-2 bg-red-500 text-white text-[10px] md:text-xs font-bold px-1.5 md:px-2.5 py-1 rounded-xl">
                  -{item.discount}%
                </div>
                <div className="absolute top-2 right-2 bg-white shadow-md text-[10px] md:text-xs font-bold px-1.5 md:px-2.5 py-1 rounded-xl">
                  <Image
                    src="/assets/img/icons/scales.png"
                    alt="Reviews"
                    width={16}
                    height={16}
                  />
                </div>
              </div>
            </div>

            {/* Rating & reviews */}
            <div className="flex gap-2 items-center pt-2 mt-[85px] md:mt-[250px] text-[10px] md:text-xs text-brandGrayText">
              <span className="flex items-center gap-1">
                <Image
                  src="/assets/img/icons/Star.png"
                  alt="Rating"
                  width={16}
                  height={16}
                />
                {item.rate.toFixed(1)}
              </span>
              <span className="flex items-center gap-1">
                <Image
                  src="/assets/img/icons/Chat.png"
                  alt="Reviews"
                  width={16}
                  height={16}
                />
                {item.reviewCount} Rəy
              </span>
            </div>

            {/* Title */}
            <h4 className="text-xs md:text-sm text-brandGrayText pt-2 pb-3 md:pb-6 line-clamp-1">
              {item.name}
            </h4>

            {/* Prices */}
            <div className="flex gap-8">
              <div className="flex flex-col">
                <span className="text-[10px] md:text-sm opacity-50 line-through">
                  {item.price.toFixed(2)} ₼
                </span>
                <span className="text-sm md:text-lg font-semibold">
                  {item.discounted_price.toFixed(2)} ₼
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] md:text-sm opacity-50">
                  {item.perMonth.month} ay
                </span>
                <span className="text-sm md:text-lg font-semibold">
                  {item.perMonth?.price?.toFixed(2)} ₼
                </span>
              </div>
            </div>

            {/* Actions */}
            <div className="pt-3 md:pt-6 flex items-center gap-2">
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
        ))}
      </div>

      {/* Loading spinner */}
      {loading && (
        <div className="flex justify-center py-6">
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-gray-300"></div>
        </div>
      )}

      <div ref={loaderRef} />

      {/*  “No more items” message */}
      {/* {!loading && visibleCount >= products.length && (
        <p className="text-center py-4 text-sm text-gray-500">
          Bütün məhsullar yükləndi.
        </p>
      )} */}
    </>
  );
}
