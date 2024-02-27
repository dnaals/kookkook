//레시피 정사각형 모양
'use client';

import { useStore } from '@/components/recipe_store/all_store';
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useStore2 } from '@/components/recipe_store/my_store';

import "../style/home.scss";


function RecipeSq({ getData }: any) {

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
        <div className="recipeSq">
            {data.map((obj, k) => (
                <div key={k}>
                    <p onClick={() => { link(obj.name) }}>
                        <img src={obj.m_thumb} />
                        <span>{obj.name}</span>
                        
                    </p>
                </div>
            ))}
        </div>

    );
}

export default RecipeSq;