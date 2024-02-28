//레시피 등록
"use client";

import React, { useEffect } from 'react';
import { useStore2 } from '../recipe_store/my_store';
import MyrecipeReg from '../UIUX/MyrecipeReg';

function RecipeReg({idx2}:any) {
    let { data2, dataCrl2 } = useStore2();
    useEffect(() => {
        dataCrl2('all', '' , '');
    }, [])
    // console.log(idx2)


    if (!data2.length) return <>sadsadsa...</>


    let comp;
    switch (idx2) {
        case "마이페이지":
            comp = <MyrecipeReg dataID={data2} dataCrl2={dataCrl2}/>
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