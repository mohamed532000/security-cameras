// "use client"
// import React from 'react';
// import { Link } from '@/i18n/navigation';
// import { useLocale } from 'next-intl';
// import AddToCartBtn from '../../shared/buttons/AddToCartBtn';
// import AddToWhishlistBtn from '../../shared/buttons/AddToWhishlistBtn';
// import Image from 'next/image';
// import HandleOutOfStockActions from '@/helper/HandleOutOfStockActions';
// import { useCartStore } from '@/services/state_management/useCartStore';
// import { useAppSettings } from '@/services/settings/useAppSettings';
// import HandleTranslate from '@/helper/HandleTranslate';

// function ProductCard({className , product , productAfterConvert}) {
//     const currentLocale = useLocale();
//     const {addItem , updateItemQuantity} = useCartStore();
//     const {data:settingsData , isPending:settingsDataLoading} = useAppSettings()
    
//     return (
//         <div className={`product-card relative flex flex-col justify-center items-center ${className} dark:shadow-accent-foreground mt-9 w-fit rounded-3xl bg-white dark:bg-background shadow-flexable-shadow px-2 py-3 max-w-[300px] gap-y-1.5`}>
//             <Link href={`/product-details/${productAfterConvert.slug}`} className='relative w-[90%]'>
//                 <div className='image-div aspect-[4/3]  relative rounded-3xl overflow-hidden w-full h-[170px]'>
//                     <Image
//                         src={product.image_url}
//                         alt={`${productAfterConvert.title} product image`} 
//                         fill
//                         sizes='(max-width: 768px) 50vw, (max-width: 1024px) 30vw, 250px'
//                         className='object-cover hover:scale-105 hover:rotate-2 transition-all duration-300'
//                         quality={85}
//                         priority={false}
//                     />
//                 </div>
//             </Link>
//             <div className='flex flex-col gap-1 px-2'>
//                 <div className='product-info relative flex flex-col gap-1'>
//                     <p className='font-bold line-clamp-1 text-foreground text-center md:text-start'
//                     onClick={() => {
//                         addItem({id : 1 , title : "new item"})
//                     }}
//                     >
//                         {productAfterConvert.title}
//                     </p>
//                     {
//                         product.discount_amount >= 1
//                         ?
//                         <div className='relative flex justify-center items-center md:justify-start gap-2'>
//                             <p className='font-bold text-center md:text-start'>{product.price_after_discount}$</p>
//                             <p className='font-bold text-center md:text-start line-through text-red-700'>{product.price}$</p>
//                         </div>
//                         :
//                         <div className='relative flex justify-center items-center md:justify-start gap-2'>
//                             <p className='font-bold text-center md:text-start'>{product.price}$</p>
//                         </div>
//                     }
//                     <p className='text-center line-clamp-2 md:text-start'
//                     onClick={() => {
//                         updateItemQuantity(product.id)
//                     }}
//                     >
//                         {productAfterConvert.description}
//                     </p>
//                 </div>
//                 {
//                 <div className='card-icons relative flex justify-between w-full my-2'>
//                     <HandleOutOfStockActions
//                     className={"my-1"}
//                     item={product}
//                     elements={ <AddToCartBtn item={product}/> }
//                     />
//                     <AddToWhishlistBtn item={product} />
//                 </div>
//                 }
//             </div>
//             {

//                 product.discount_amount >= 1
//                 &&
//                 <p className={`absolute inset-y-0 translate-y-4 h-fit ${currentLocale == "ar" ? "right-3" : "left-3"} bg-red-600 rounded-3xl text-center md:text-start text-white py-1 px-2 text-sm`}>
//                     <span className='mx-1'>
//                         <HandleTranslate word={"OFF"} page={"shopping"}/>
//                     </span>
//                     {
//                         settingsDataLoading
//                         ?
//                         "..."
//                         :
//                         (
//                             product.discount_type === "fixed"
//                             ?
//                             `${product.discount_amount}${settingsData?.currency}`
//                             :
//                             `${product.discount_amount}%`
//                         )
//                     }
//                 </p>
//             }
//         </div>
//     )
// }

// export default ProductCard
"use client"
import React from 'react';
import { Link } from '@/i18n/navigation';
import { useLocale } from 'next-intl';
import AddToCartBtn from '../../shared/buttons/AddToCartBtn';
import AddToWhishlistBtn from '../../shared/buttons/AddToWhishlistBtn';
import Image from 'next/image';
import HandleOutOfStockActions from '@/helper/HandleOutOfStockActions';
import { useCartStore } from '@/services/state_management/useCartStore';
import { useAppSettings } from '@/services/settings/useAppSettings';
import HandleTranslate from '@/helper/HandleTranslate';
import { CiShoppingCart } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { IoInformationOutline } from "react-icons/io5";
import { ImageOverlay } from '../ImageOverlay';

// function ProductCard({className , product , productAfterConvert}) {
function ProductCard({className , productAfterConvert}) {
    const currentLocale = useLocale();
    const {addItem , updateItemQuantity} = useCartStore();
    const {data:settingsData , isPending:settingsDataLoading} = useAppSettings()
    const product = {
        main_image : "",
        sub_image : "",
        title : "",
        description : "",
        price : 0,
        discount_price : 0,
        discount_type : "",
        discount_amount : 0,
        slug : "",
        is_in_stock : true,
    }
    return (
        <div className='product-card relative group h-[320px] w-[280px] overflow-hidden group flex justify-center items-cenetr'>
            <Image
            className='absolute group-hover:scale-110 transition-all duration-300 top-0'
            src={productAfterConvert.image_url}
            alt={productAfterConvert.title}
            fill
            />
            <ImageOverlay className={"rounded-full shadow-xl shadow-black/10 scale-0 opacity-0 group-hover:scale-140 group-hover:opacity-30 transition-all duration-300"}/>
            <div className='absolute group-hover:translate-y-8 group-hover:opacity-0 transition-all duration-300 bottom-0 h-[50%] md:h-[40%] w-full bg-gradient-to-t from-slate-900 dark:from-background to-transparent flex flex-col justify-center items-center gap-y-2'>
                <h3 className='text-white text-center text-xl font-bold'>{productAfterConvert.title}</h3>
                <p className='text-white text-center text-sm max-w-[80%]'>{productAfterConvert.description}</p>
            </div>
            <div className='relative w-full flex justify-center items-center gap-x-2.5 py-2'>
                <button className='w-fit border-stone-50 border text-2xl cursor-pointer hover:bg-white hover:text-slate-900 transition-all duration-300 p-2 rounded-full md:translate-y-[40px] md:opacity-0 md:group-hover:opacity-100 md:group-hover:translate-y-0 '><CiHeart/></button>
                <button className='w-fit border-stone-50 border text-2xl cursor-pointer hover:bg-white hover:text-slate-900 transition-all duration-500 p-2 rounded-full md:translate-y-[40px] md:opacity-0 md:group-hover:opacity-100 md:group-hover:translate-y-0 '><CiShoppingCart/></button>
            </div>
            <Link href={`/product-details/${productAfterConvert.slug}`} className='absolute translate-y-1.5 md:-translate-y-3 md:group-hover:translate-y-1.5 flex justify-center items-center transition-all duration-500 md:opacity-0 group-hover:opacity-100 cursor-pointer group/link'>
                <button className='group/btn cursor-pointer border border-white flex justify-center items-center gap-x-2 rounded-full p-2 text-white hover:text-slate-900 hover:bg-white transition-all duration-300 '>
                    <span><IoInformationOutline className='text-xl'/></span>
                    <span className='text-sm'>
                        <HandleTranslate word={"View product"} page={"shopping"}/>
                    </span>
                </button>
            </Link>
        </div>
    )
}

export default ProductCard