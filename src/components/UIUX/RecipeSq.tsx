//레시피 정사각형 모양
'use client';

import { useEffect } from "react";
import { useStore } from '@/components/recipe_store/all_store';
import { useStore2 } from '@/components/recipe_store/my_store';
import React from 'react';
import { useRouter } from "next/navigation";

import "../style/home.scss";


function RecipeSq({ dataID,dataCrl }: any) {
    console.log(dataID);
    const router: any = useRouter();
    const link = (a: any) => {
        let aa = dataID.filter((obj:any) => a == obj.name);
        let url: any = aa[0].seq;
        router.push(`/home/${url}`);
    }

    return (
        <div className="recipeSq">
            {dataID.map((obj:any, k:number) => (
                <div key={k}>
                    <div onClick={() => { link(obj.name) }}>
                        <img src={obj.m_thumb} />
                        <div>{obj.name}</div>
                        
                    </div>
                </div>
            ))}
        </div>

    );
}

export default RecipeSq;