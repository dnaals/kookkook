//레시피 정사각형 모양
'use client';

import { useEffect } from "react";
import { useStore } from '@/components/recipe_store/all_store';
import { useStore2 } from '@/components/recipe_store/my_store';
import React from 'react';
import { useRouter } from "next/navigation";

import "../style/home.scss";


function RecipeSq({ getData }: any) {

    let { data, dataCrl } = useStore();
    useEffect(() => {
        dataCrl('all', '');
    }, [])
    if (!data.length) return <>sadsadsa...</>

    const router: any = useRouter();

    const link = (a: any) => {
        let aa = data.filter(obj => a == obj.name);
        let url: any = aa[0].seq;
        router.push(`/home/${url}`);
    }

    return (
        <div className="recipeSq">
            {data.map((obj, k) => (
                <div key={k}>
                    <p onClick={() => { link(obj.name) }}>
                        <img src={obj.m_thumb} />
                        {obj.name}
                        {obj.tip}
                    </p>
                </div>
            ))}
        </div>

    );
}

export default RecipeSq;