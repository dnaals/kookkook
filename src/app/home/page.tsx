'use client';
import React, { useEffect, useState } from 'react';
import { useStore } from '@/components/recipe_store/all_store';
import Button from "../../components/UIUX/Button";
import RecipeList from '@/components/service/RecipeList';
import "@/components/style/home.scss";
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
function page({ selName }: any) {

    const {cateName,category} = useStore()
    
    const idx = "가로"
    let [cateName2, setCateName2] = useState('');
    let [selectName, setSelectName] = useState('latest');
    useEffect(() => {
        if (cateName == "밥") {
            setCateName2('RICE');
        } else if (cateName == '국&찌개') {
            setCateName2('SOUP')
        } else if (cateName == '반찬') {
            setCateName2('SIDE DISH')
        } else if (cateName == '일품') {
            setCateName2('SPECIAL')
        } else if (cateName == '후식') {
            setCateName2('DESSERT')
        } else if (cateName == '기타') {
            setCateName2('ETC')
        }
    }, [cateName])

    const handleSelect = (e: any) => {
        setSelectName(e.target.value);
    };
    const topMove = ()=>{
        window.scrollTo({top:0,behavior:'smooth'})
    }
    return (
        <div className='home_main_backcolor'>
            <Link href='/search'>
                <div className='searchDiv'>
                    <img src="/images/search_black.png" alt="" />
                    <p>오늘 뭐 먹지??</p>
                </div>
            </Link>
            <Button  />
            <div className='fame'>
                <p>명예의 전당</p>
                <img src="https://www.foodsafetykorea.go.kr/uploadimg/cook/10_00028_1.png" alt="" />
            </div>
            <div className='sub_category'>
                <p>{cateName2}</p>
                <select name="search_cate" onChange={handleSelect} id="search_cate">
                    <option value="latest">최신순</option>
                    <option value="comment">댓글순</option>
                    <option value="star">별점순</option>
                </select>
            </div>
            <RecipeList selectName={selectName} idx={idx} />
            <div className='arrow_btn' onClick={topMove}>
                <img src="/images/top.png" alt="" />
            </div>
        </div>
    );
}

export default page;