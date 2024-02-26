//레시피 직사각형(길게) 모양
'use client';

import { useStore2 } from '@/components/recipe_store/my_store';
import React, { useEffect, useState } from 'react';
import { useRouter } from "next/navigation";
import FuncScrap from '@/components/UIUX/FuncScrap';
import "../style/home.scss";
import Button from "./Button";


function RecipeWid({ }) {
    let { data2, dataCrl2 } = useStore2();
    const router: any = useRouter();
    const [data, setData]: any = useState();
    const getData = (data: any) => {
        setData(data)
    }
    // useEffect(() => {
    //     getData("")
    // }, [])

    console.log(data)

    // const link = (a: any) => {
    //     let aa = data.filter(obj => a == obj.name);
    //     let url: any = aa[0].seq;
    //     router.push(`/home/${url}`);
    // }

    return (
        <div className="home_contents">
            <div className="recipeWid">
                <Button getData={getData} />
                {/* {data.map((obj: any, k: number) => (
                    <div key={k}>
                        <p onClick={() => { link(obj.name) }}>
                            <figure>
                                <img src={obj.m_thumb} />
                                <figcaption>
                                    <FuncScrap />
                                    <p>{obj.name}</p>
                                    <p>{obj.tip}</p>
                                </figcaption>
                            </figure>
                        </p>
                    </div>
                ))} */}
            </div>
        </div>
    );
}

export default RecipeWid;