"use client";
import React, { useEffect } from 'react';
import { useStore } from '../recipe_store/all_store';
import RecipeWid from '../UIUX/RecipeWid';
import RecipeSq from '../UIUX/RecipeSq';
import Home_detail from '../UIUX/Home_detail';
import { useStore2 } from '../recipe_store/bookmark_store';
import { useStore4 } from '../recipe_store/comment_store';
import { useSession } from 'next-auth/react';
import { useStore5 } from '../recipe_store/like_store';
import recipe from "@/lib/recipe.json";


function RecipeList({idx,detailUrl,selectName,sortCate,setFameImg}:any) {


    let { data2, dataCrl2 } = useStore2();
    let { data4, dataCrl4 } = useStore4();
    let { data5, dataCrl5 } = useStore5();


    const { data: session, status }: any = useSession();
    const recipeSort = recipe.filter((obj:any)=>obj.m_cate==sortCate);

      useEffect(() => {
        if (recipeSort.length) {
            const maxLike = recipeSort.reduce((max: number, obj: any) => {
                const like = parseFloat(obj.like);
                return like > max ? like : max;
            }, 0);
            const maxData = recipeSort.filter((obj: any) => obj.like == maxLike)
            setFameImg(maxData[0].m_thumb);
        }
    }, [recipeSort])

    // const userbook = data2.filter((user:any) => user.user_email == session.user.email)
    
    // useEffect(() => {
    //     dataCrl2('all','','')
    // }, [])
    // useEffect(() => {
    //     dataCrl4('all','','')
    // }, [])
    // useEffect(() => {
    //     dataCrl5('all','','')
    // }, [])

    // if (!data.length) return <Loading/>; 


    let comp;
    switch (idx) {
        case "가로":
            comp=<RecipeWid selectName={selectName} dataID={recipeSort} data4={data4}/>
            break;
        case "정사각형":
            comp=<RecipeSq dataID={recipeSort} />
            break;
            
        case "홈세부":
            comp=<Home_detail dataID={recipe} data4={data4} detailUrl={detailUrl} dataCrl4={dataCrl4} session={session}/>
            break;
        default:
            break;
    }


    return (
        <>
            {comp}
        </>
    );
}

export default RecipeList;