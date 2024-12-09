"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useQuery } from "@tanstack/react-query";
import { getCategories } from "@/services/productService";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function HomeCategories() {
  const {
    data: categories,
    error,
    isFetched,
  } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
  });

  return (
    <div className="mx-auto w-11/12 items-center py-32 lg:max-w-4xl 2xl:max-w-7xl">
      {/* Titre et sous-titre */}
      <div className="flex w-full flex-col items-center justify-center gap-4 pb-16">
        <h1 className="text-center text-4xl font-bold">Browse The Range</h1>
        <p className="text-center text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
      <div>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          modules={[Pagination, Autoplay]}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          className="mySwiper"
        >
          {categories.map((cat, i) => (
            <SwiperSlide key={cat.slug}>
              <Link href={"/"}>
                {/* Ajouter ici Image de fond si besoin */}
                <div className="flex h-[480px] w-full items-center justify-center rounded-lg bg-base-300 hover:bg-blue-100">
                  <h3>{cat.name}</h3>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
