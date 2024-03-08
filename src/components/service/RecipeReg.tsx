//레시피 등록
"use client";

import React, { useEffect, useState } from 'react';
import { useStore } from '../recipe_store/all_store';
import { useStore3 } from '../recipe_store/comment_store';
import { useSession } from "next-auth/react";
import MyrecipeReg from '../UIUX/MyrecipeReg';
import MypageUser from '../UIUX/MypageUser';
import MypageButton from '../UIUX/MypageButton';
import { useStore2 } from '../recipe_store/bookmark_store';

function RecipeReg({ idx2 }: any) {
    let { data, dataCrl } = useStore();
    let { data2, dataCrl2 } = useStore2();
    let { data3, dataCrl3 } = useStore3();
    const { data: session, status }: any = useSession();
    let [newrecipe, setNewrecipe] = useState(false)

    let myRecipe = data.filter((obj) => obj?.user)
    let bookmarkRecipe = data2.filter((obj) => obj?.user)
    let commentRecipe = data3.filter((obj) => obj?.user)

    // console.log('myRecipe = ',myRecipe)

    let aa = () => {
        // console.log('asdsa')
        setNewrecipe(true)
    }
    let bb = () => {
        // console.log('asdsa')
        setNewrecipe(false)
    }

    useEffect(() => {
        dataCrl('all', '', '');
        dataCrl2('all','','');
        dataCrl3('all', '', '');

    }, [])


    // console.log(idx2)


    if (!data.length) return <>sadsadsa...</>


    let comp;
    switch (idx2) {
        case "마이페이지":
            comp = <div>
                <MypageUser session={session} />
                <MypageButton session={session} dataCrl={dataCrl} dataCrl3={dataCrl3} aa={aa}/>
                <MyrecipeReg session={session} data={data} myRecipe={myRecipe} dataCrl={dataCrl} data3={data3} dataCrl3={dataCrl3}
                newrecipe={newrecipe} bb={bb}
                />

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