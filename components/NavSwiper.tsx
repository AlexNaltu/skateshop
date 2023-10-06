"use client";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";

export default function NavSwiper() {
  return (
    <>
      <div className="absolute w-full h-[300px] md:h-[600px] bg-black/60 z-10"/>
      <Swiper
        className="swiper-pagination-bullet-active"
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: false,
        }}
        modules={[Autoplay, Pagination, Navigation]}
      >
        <SwiperSlide>
          <Image
            src="https://images.unsplash.com/photo-1528113989741-393d8c165c53?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1289&q=80"
            alt="/"
            width="1500"
            height="0"
            className="w-full h-[300px] md:h-[600px] object-cover bg-center"
            priority
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="https://images.unsplash.com/photo-1602519392653-94913ff0005a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            alt="/"
            width="1500"
            height="0"
            className="w-full h-[300px] md:h-[600px] object-cover bg-center"
            priority
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="https://images.unsplash.com/photo-1607639694361-fe08243bf70c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            alt="/"
            width="1500"
            height="0"
            className="w-full h-[300px] md:h-[600px] object-cover bg-center"
            priority
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="https://images.unsplash.com/photo-1547447134-cd3f5c716030?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1364&q=80"
            alt="/"
            width="1500"
            height="0"
            className="w-full h-[300px] md:h-[600px] object-cover bg-center"
            priority
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="https://images.unsplash.com/photo-1495361276969-f11591d57520?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80"
            alt="/"
            width="1500"
            height="0"
            className="w-full h-[300px] md:h-[600px] object-cover bg-center"
            priority
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
