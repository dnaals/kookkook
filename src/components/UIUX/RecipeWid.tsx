//레시피 직사각형(길게) 모양
'use client';

import { useStore2 } from '@/components/recipe_store/my_store';
import { useRouter } from "next/navigation";
import FuncScrap from '@/components/UIUX/FuncScrap';
import Button from "./Button";
import { useStore } from '../recipe_store/all_store';
import { useEffect } from 'react';

import "../style/recipe_wid.scss";
import "../style/scrap.scss";


function RecipeWid({ }) {
    // let { data2, dataCrl2 } = useStore2();
    const router: any = useRouter();



    let { data, dataCrl } = useStore();
    useEffect(() => {
        dataCrl('all', '');
    }, [])
    if (!data.length) return <>sadsadsa...</>


    const link = (a: any) => {
        let aa = data.filter(obj => a == obj.name);
        let url: any = aa[0].seq;
        router.push(`/home/${url}`);
    }

    return (
        <>
            <Button dataCrl={dataCrl} />
            <div className="recipeWid_box">
                <div className="recipeWid">
                    {data.map((obj: any, k: number) => (
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