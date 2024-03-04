//레시피 등록
"use client";

import React, { useEffect } from 'react';
import { useStore } from '../recipe_store/all_store';
import { useSession } from "next-auth/react";
import MyrecipeReg from '../UIUX/MyrecipeReg';

function RecipeReg({idx2}:any) {
    let { data, dataCrl } = useStore();
    const { data: session, status }:any = useSession();

    let myrecipe = data.filter((obj)=>obj?.user )

    console.log(myrecipe)

    useEffect(() => {
        dataCrl('카테고리', '' , '');

    }, [])

    
    // console.log(idx2)


    if (!data.length) return <>sadsadsa...</>


    let comp;
    switch (idx2) {
        case "마이페이지":
            comp = <MyrecipeReg session={session}data={data} myrecipe={myrecipe} dataCrl={dataCrl}/>
            break;
        default:
            break;
    }


    return (
        <div style={{ paddingTop: "100px" }}>
            {comp}
        </div>
    );
}

export default RecipeReg;