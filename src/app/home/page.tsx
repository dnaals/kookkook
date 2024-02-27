'use client';
import React from 'react';
import "@/components/style/home.scss";
import RecipeList from '@/components/service/RecipeList';
function page() {

    const idx = "가로"

    return (
        <div>
            <RecipeList idx={idx} />
        </div>
    );
}

export default page;