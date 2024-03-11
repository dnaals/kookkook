"use client";
import Search from '@/components/UIUX/Search';
import RecipeList from '@/components/service/RecipeList';
import { useSearchParams } from 'next/navigation';
import React, { useEffect, useRef, useState } from 'react';
import { useStore } from '@/components/recipe_store/all_store';
import '../../components/style/search.scss';

// import { Pagination, Navigation } from 'swiper/modules';
// import { Swiper, SwiperSlide } from 'swiper/react';

// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';


function page() {

    const idx = "정사각형";
    const index = "가로";
    const searchParams = useSearchParams()
    const searchQuery = searchParams && searchParams.get("q");

    let { data, dataCrl } = useStore();
    
    useEffect(() => {
        dataCrl('all', '');
    }, [])

    return (

        <div className='search-page'>
            <Search defaultValue={searchQuery} />
            <h2>Most Liked</h2>
            
            <RecipeList idx={idx} />
            
            <h2>Recommended</h2>
            <RecipeList idx={index}/>
            
        </div>
    );
}

export default page;