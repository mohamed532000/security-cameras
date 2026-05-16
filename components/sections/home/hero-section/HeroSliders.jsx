"use client"
import React, { useState } from 'react'
import {SwiperSlide} from "swiper/react";
import {ImageOverlay} from '../../../ui/ImageOverlay';
import { MainLink } from '../../../ui/MainLink';
import "../../../../styles/homeSwiper.css";
import HandleTranslate from '@/helper/HandleTranslate';
import dynamic from 'next/dynamic';
import { useTheme } from 'next-themes';
import slide1 from "../../../../app/media/images/backgrounds/banner.webp";
import slide2 from "../../../../app/media/images/backgrounds/banner-2.webp";
import slide3 from "../../../../app/media/images/backgrounds/banner-3.webp";
// import slide4 from "../../../../app/media/images/backgrounds/banner-4.webp";
const CustomSwiperModule = dynamic(() => import("../../../ui/CustomSwiperModule"), { ssr: false });
function HeroSliders() {
    const [activeSlideIndex , setActiveSlideIndex] = useState(0);
    const {theme} = useTheme()
    const heroSlides = [
        {
            bg: slide1,
            headerText: "Advanced Protection",
            pargraph: "Stay secure day and night with smart surveillance solutions.",
            path: "/",
            title: "24/7 Smart Surveillance",
            description: "Monitor your home or business in real time with high definition security cameras and intelligent motion detection"
        },
        {
            bg: slide2,
            headerText: "Crystal Clear Vision",
            pargraph: "Reliable outdoor and indoor monitoring systems.",
            path: "/",
            title: "Security You Can Trust",
            description: "Protect what matters most using weather resistant cameras with night vision remote access and instant alerts"
        },
        {
            bg: slide3,
            headerText: "Modern Security Solutions",
            pargraph: "Designed for homes, offices, and commercial spaces.",
            path: "/",
            title: "Stay Connected Anywhere",
            description: "Access live camera feeds from your phone anytime anywhere with secure cloud connected surveillance systems"
        }
    ]
  return (
    <div className='relative w-full h-screen'>
        <CustomSwiperModule
            className='h-screen w-full relative hero-swiper'
            effect='fade'
            autoplay={{ delay : 3000, disableOnInteraction: false }}
            onSlideChange = {(swiper) => {
                setActiveSlideIndex(swiper.activeIndex);
            }}
            loop = {false}
            children={
                heroSlides.map((item , index) => (
                    <SwiperSlide key={index}>
                            <div className={`relative w-full h-full flex justify-center items-center bg-no-repeat bg-cover`}
                            style={{backgroundImage : `url('${item.bg.src}')`}}
                            >
                                <ImageOverlay/>
                                <div className='relative container flex'>
                                    <div className={`relative flex flex-col justify-center md:justify-start items-center md:items-start gap-3 transition-all duration-800 md:max-w-[50%] px-5`}>
                                        {
                                            item.title
                                            &&
                                            <h2 className={`font-bold relative before:content-[''] before:absolute before:w-[30%] before:h-[10px] before:bg-active-text-primary before:bottom-0  text-4xl md:text-6xl text-center md:text-start text-stone-50 py-7 ${activeSlideIndex == index ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-[-70px] scale-170"} transition-all duration-800`}>
                                                <HandleTranslate page={"home"} word={item.title} />
                                            </h2>
                                        }
                                        {
                                            item.pargraph
                                            &&
                                            <p className={`text-sm md:text-xl text-center md:text-start text-stone-50 ${activeSlideIndex == index ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[70px]"} transition-all duration-800`}>
                                            <HandleTranslate page={"home"} word={item.description} />
                                            </p>
                                        }
                                        {
                                            item.path
                                            &&
                                            <MainLink
                                            className={`${activeSlideIndex == index ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[100px]"} delay-100 transition-all duration-800`}
                                                href={'/'}
                                            >
                                                <HandleTranslate page={"home"} word={"Shop Now"} />
                                            </MainLink>
                                        }
                                    </div>
                                </div>
                            </div>
                            {
                                theme == "dark"
                                &&
                                <span className={`absolute bottom-0 w-full h-[30%] bg-gradient-to-t from-background to-transparent`}></span>
                            }
                    </SwiperSlide>
                ))
            }
        />
    </div>
  )
}
export default HeroSliders