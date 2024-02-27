//레시피 직사각형(길게) 모양
'use client';

import { useStore2 } from '@/components/recipe_store/my_store';
import { useRouter } from "next/navigation";
import FuncScrap from '@/components/UIUX/FuncScrap';
import { useStore } from '../recipe_store/all_store';
import { useEffect } from 'react';


import FuncLike from './FuncLike';

import "../style/recipe_wid.scss";
import "../style/scrap.scss";


function RecipeWid({ dataID, dataCrl }: any) {
    const idx = "가로"
    console.log(dataID, "asdasd");
    const router: any = useRouter();

    const link = (a: any) => {
        let aa = dataID.filter((obj: any) => a == obj.name);
        let url: any = aa[0].seq;
        router.push(`/home/${url}`);
    }

    return (
        <>
            <div className="recipeWid_box">
                <div className="recipeWid">
                    {dataID.map((obj: any, k: number) => (
                        <div key={k}>
                            <p onClick={() => { link(obj.name) }}>
                                <figure>
                                    <img src={obj.m_thumb} />

                                    <figcaption>
                                        <div className='flex'>
                                            <p>{obj.name}</p>
                                            <FuncScrap />
                                        </div>
                                        <p>{obj.tip}</p>
                                        <FuncLike />
                                    </figcaption>
                                </figure>
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default RecipeWid;