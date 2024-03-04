//레시피 등록
"use client";

import React, { useEffect } from 'react';
import { useStore } from '../recipe_store/all_store';
import { useStore3 } from '../recipe_store/comment_store';
import { useSession } from "next-auth/react";
import MyrecipeReg from '../UIUX/MyrecipeReg';
import MypageUser from '../UIUX/MypageUser';
import MypageButton from '../UIUX/MypageButton';

function RecipeReg({ idx2 }: any) {
    let { data, dataCrl } = useStore();
    let { data3, dataCrl3 } = useStore3();
    const { data: session, status }: any = useSession();

    let myrecipe = data.filter((obj) => obj?.user)

    console.log(myrecipe)

    useEffect(() => {
        dataCrl('all', '', '');
        dataCrl3('all', '', '');

    }, [])


    // console.log(idx2)


    if (!data.length) return <>sadsadsa...</>


    let comp;
    switch (idx2) {
        case "마이페이지":
            comp = <div>
                <MypageUser session={session} />
                <MypageButton session={session} dataCrl={dataCrl} />
                <MyrecipeReg session={session} data={data} myrecipe={myrecipe} dataCrl={dataCrl} data3={data3} dataCrl3={dataCrl3} />

            </div>

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