'use client';
import MypageButton from '@/components/UIUX/MypageButton';
import MypageUser from '@/components/UIUX/MypageUser';
import { useStore } from '@/components/recipe_store/all_store';
import RecipeReg from '@/components/service/RecipeReg';
import React from 'react';
function page() {
    const { dataCrl } = useStore();
    const idx2 = '마이페이지';
    return (
        <div>
            <RecipeReg idx2={idx2} />
        </div>
    );
}

export default page;