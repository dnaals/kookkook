'use client';
<<<<<<< HEAD
import React, { useState } from 'react';
=======
import React, { useEffect, useState } from 'react';
>>>>>>> 218c5aaf20a8b7f76c8990c168ebaacd453c0468
import { useStore } from '@/components/recipe_store/all_store';
import Button from "../../components/UIUX/Button";
import RecipeList from '@/components/service/RecipeList';
import "@/components/style/home.scss";
function page() {
<<<<<<< HEAD
    const idx = "가로"
    let { dataCrl } = useStore();
    let [cateName, setCateName] = useState('');
    let [selectName, setSelectName] = useState();

    const handleSelect = (e: any) => {
        setSelectName(e.target.value);

    };
console.log(selectName);
    return (
        <div className='home_main_backcolor'>
            <div className='searchDiv'>
                
            </div>

                <Button dataCrl={dataCrl} setCateName={setCateName} />
            <div className='fame'>

            </div>
            <div className='sub_category'>
                <p>{cateName}</p>
                <select name="search_cate" onChange={handleSelect} id="search_cate">
                    <option value="latest">최신순</option>
                    <option value="comment">댓글순</option>
                    <option value="star">별점순</option>
                </select>
            </div>
            <RecipeList idx={idx} />
=======
    let { dataCrl } = useStore();
    const idx = "가로"
    let [cateName,setCateName] = useState('');

    




    return (
        <div className='home_main_backcolor'>
            <div>
            </div>
            <Button dataCrl={dataCrl} setCateName={setCateName} />
            <RecipeList idx={idx} cateName={cateName} />
>>>>>>> 218c5aaf20a8b7f76c8990c168ebaacd453c0468
        </div>
    );
}

export default page;