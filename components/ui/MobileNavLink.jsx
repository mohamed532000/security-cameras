"use client"
import React from 'react';
import { Link } from '@/i18n/navigation';
import { useLocale, useTranslations } from 'next-intl';
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoIosArrowRoundBack } from "react-icons/io";

function MobileNavLink({ item , className }) {
    const t = useTranslations("home");
    const currentLocale = useLocale()
    const iconClassName = 'list-footer-icon rounded-full text-5xl font-light'
    return (
        // <li className={`${className} text-center font-bold tracking-wide italic text-3xl`}>
        <li className={`${className} font-bold tracking-wide italic text-3xl`}>
            <Link href={item.href} className={"p-2 cursor-pointer flex group gap-2 items-center hover:translate-x-2 hover:scale-105 transition-all duration-300"}>
                {t(item.label)}
                {
                    currentLocale == "ar" 
                    ? 
                    <IoIosArrowRoundBack className={`${iconClassName} group-hover:border`}/> 
                    : 
                    <IoIosArrowRoundForward className={`${iconClassName} group-hover:border`}/>
                }
            </Link>
        </li>
    )
}

export default MobileNavLink