"use client";
import Recent from '@/components/UIUX/Recent';
import RecipeSq from '@/components/UIUX/RecipeSq';
import RecipeWid from '@/components/UIUX/RecipeWid';
import Search from '@/components/UIUX/Search';
import React, { useRef, useState } from 'react';
import { Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


function page() {
    return (
        <div className='search-page'>
            <Search/>
            <Recent/>
            <Swiper
            slidesPerView={3}
            centeredSlides={true}
            spaceBetween={30}
            pagination={{
                type: 'fraction',
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
            >
                <SwiperSlide>
                    <RecipeSq/>
                </SwiperSlide>
            </Swiper>
            <RecipeWid/>
        </div>
    );
}

export default page;

// export default function App() {

//   return (
//     <>
//       <Swiper
//         slidesPerView={3}
//         centeredSlides={true}
//         spaceBetween={30}
//         pagination={{
//           type: 'fraction',
//         }}
//         navigation={true}
//         modules={[Pagination, Navigation]}
//         className="mySwiper"
//       >
//         <SwiperSlide>Slide 1</SwiperSlide>
//         <SwiperSlide>Slide 2</SwiperSlide>
//         <SwiperSlide>Slide 3</SwiperSlide>
//         <SwiperSlide>Slide 4</SwiperSlide>
//       </Swiper>

//       <p className="append-buttons">
//         <button onClick={() => prepend2()} className="prepend-2-slides">
//           Prepend 2 Slides
//         </button>
//         <button onClick={() => prepend()} className="prepend-slide">
//           Prepend Slide
//         </button>
//         <button onClick={() => append()} className="append-slide">
//           Append Slide
//         </button>
//         <button onClick={() => append2()} className="append-2-slides">
//           Append 2 Slides
//         </button>
//       </p>
//     </>
//   );
// // }

// .swiper {
//     width: 100%;
//     height: 100%;
//   }
  
//   .swiper-slide {
//     text-align: center;
//     font-size: 18px;
//     background: #fff;
  
//     /* Center slide text vertically */
//     display: flex;
//     justify-content: center;
//     align-items: center;
//   }
  
//   .swiper-slide img {
//     display: block;
//     width: 100%;
//     height: 100%;
//     object-fit: cover;
//   }
  
//   .swiper {
//     width: 100%;
//     height: 300px;
//     margin: 20px auto;
//   }
//   .append-buttons {
//     text-align: center;
//     margin-top: 20px;
//   }
  
//   .append-buttons button {
//     display: inline-block;
//     cursor: pointer;
//     border: 1px solid #007aff;
//     color: #007aff;
//     text-decoration: none;
//     padding: 4px 10px;
//     border-radius: 4px;
//     margin: 0 10px;
//     font-size: 13px;
//   }
  
