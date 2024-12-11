"use client";
import React, { useState } from "react";
import { useProductById } from "@/hooks/useProducts";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { FreeMode, Navigation, Thumbs } from "swiper/modules";

export default function ProductDetailsGallery({ id }) {
  const { data: product, error, isFetched } = useProductById(id);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="container mx-auto">
      <Swiper
        style={{
          "--swiper-navigation-color": "oklch(var(--p))",
          "--swiper-pagination-color": "oklch(var(--p))",
        }}
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        {product.images.map((item, i) => (
          <SwiperSlide key={i}>
            <Image
              src={item}
              width={300}
              height={300}
              className="w-full rounded-lg"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper mt-4"
      >
        {product.images.map((item, i) => (
          <SwiperSlide key={i}>
            <Image
              src={item}
              width={300}
              height={300}
              className="h-[100px] w-full rounded-lg border object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
