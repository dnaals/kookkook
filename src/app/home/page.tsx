'use client';
import React, { useEffect, useState } from 'react';
import { useStore } from '@/components/recipe_store/all_store';
import Button from "../../components/UIUX/Button";
import { useRouter } from "next/navigation";
import RecipeList from '@/components/service/RecipeList';

import "@/components/style/home.scss";

function page() {
    let { dataCrl } = useStore();
    const idx = "가로"
    let [cateName,setCateName] = useState('');

    




    return (
        <div className='home_main_backcolor'>
            <div>
            </div>
            <Button dataCrl={dataCrl} setCateName={setCateName} />
            <RecipeList idx={idx} cateName={cateName} />
        </div>
    );
}

export default page;