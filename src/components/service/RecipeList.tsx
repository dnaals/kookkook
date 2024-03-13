"use client";
import React, { useEffect } from 'react';
import { useStore } from '../recipe_store/all_store';
import RecipeWid from '../UIUX/RecipeWid';
import RecipeSq from '../UIUX/RecipeSq';
import Home_detail from '../UIUX/Home_detail';
import { useStore2 } from '../recipe_store/bookmark_store';


function RecipeList({idx,detailUrl,selectName}:any) {

    
    let { data, dataCrl } = useStore();
    let { data2, dataCrl2 } = useStore2();
    
    useEffect(() => {
        dataCrl('all', '', '');
        dataCrl2('all', '','');
    }, [])
    // console.log(data2,'================================')

    

    if (!data.length) return <div>sadsadsa...</div>


    let comp;
    switch (idx) {
        case "가로":
            comp=<RecipeWid  selectName={selectName} dataID={data} dataCrl={dataCrl}/>
            break;
        case "정사각형":
            comp=<RecipeSq dataID={data} dataCrl={dataCrl} />
            break;
            
        case "홈세부":
            comp=<Home_detail dataID={data} detailUrl={detailUrl} />
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