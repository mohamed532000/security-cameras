"use client"
import React from 'react'
import { ImageOverlay } from "@/components/ui/ImageOverlay";
import { useTheme } from 'next-themes';
import HandleTranslate from '@/helper/HandleTranslate';
import { Link } from '@/i18n/navigation';
function HomeVideoSection() {
    const {theme} = useTheme();
  return (
    <div className="video-content relative w-full h-[90vh] my-[100px]">
        <video autoPlay loop muted playsInline className="absolute top-0 left-0 w-full h-full object-cover">
          <source src="https://www.pexels.com/download/video/35685983/" type="video/mp4" />
        </video>
        <ImageOverlay/>
        <span className={`absolute !dark:hidden  top-0 w-full h-[30%] bg-gradient-to-b from-background to-transparent`}></span>
        <span className={`absolute !dark:hidden bottom-0 w-full h-[30%] bg-gradient-to-b from-transparent to-background`}></span>
        <div className="relative container h-full flex justify-center items-center">
            <div className='relative flex flex-col w-full md:w-[60%] items-center justify-center gap-3.5'>
                <h2 className="text-stone-50 text-3xl md:text-6xl text-center">
                    <HandleTranslate page={"global"} word={"videoSectionTitle"} />
                </h2>
                <p className="text-stone-50 text-center text-sm">
                    <HandleTranslate page={"global"} word={"videoSectionText"} />
                </p>
                <Link href="/" className='relative'>
                    <HandleTranslate page={"home"} word={"Shop Now"} />
                    <span className='absolute mx-1 bottom-0 w-[10px] h-[10px] bg-red-600 rounded-full animate-ping'></span>
                </Link>
            </div>
        </div>
    </div>
  )
}
export default HomeVideoSection