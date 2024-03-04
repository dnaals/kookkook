'use client';
import React, { useEffect } from 'react';
import { useStore } from '@/components/recipe_store/all_store';
import Button from "../../components/UIUX/Button";
import { useRouter } from "next/navigation";
import RecipeList from '@/components/service/RecipeList';

import "@/components/style/home.scss";

function page() {
    let { data, dataCrl } = useStore();
    useEffect(() => {
        dataCrl('all', '');
    }, [])
    const idx = "가로"




    return (
        <div>
            <Button dataCrl={dataCrl} />
            
            <RecipeList idx={idx} />
        </div>
    );
}

export default page;