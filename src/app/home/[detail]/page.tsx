"use client";
import "@/components/style/home_detail.scss";
import RecipeList from '@/components/service/RecipeList';

function page({params}:any) {
    const idx = "홈세부"

    return (
        <RecipeList idx={idx} />
    );
}

export default page;


