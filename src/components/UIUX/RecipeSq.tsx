'use client';

import { useEffect } from "react";
import { useStore } from '@/components/recipe_store/all_store';
import { useStore2 } from '@/components/recipe_store/my_store';
import React from 'react';
import { useRouter } from "next/navigation";



function RecipeSq() {

        let { data, dataCrl } = useStore();
        let { data2, dataCrl2 } = useStore2();
    
        useEffect(() => {
            dataCrl('all', '');
            dataCrl2('all', '');
        }, [])
        if (!data.length) return <>sadsadsa...</>

const router:any = useRouter();

        const link = (a:any)=>{
            let aa = data.filter(obj=> a==obj.name)
            let url:any = aa[0].seq;
            router.push({
                pathname:'/home/[seq]',
                query:{seq:url}
            })
        }
    return (
        <>
            <button onClick={() => { dataCrl('카테고리', '반찬') }}>반찬</button>
            <button onClick={() => { dataCrl('카테고리', '밥') }}>밥</button>
            <button onClick={() => { dataCrl('카테고리', '국&찌개') }}>국&찌개</button>
            <button onClick={() => { dataCrl('카테고리', '일품') }}>일품</button>
            <button onClick={() => { dataCrl('카테고리', '후식') }}>후식</button><br />
            <button onClick={() => { dataCrl2('all', '') }}>구글계정 모두</button>
            {data.map((obj,k)=>(
                <div key={k}>
                    
             <p onClick={()=>{link(obj.name)}}>{obj.name}</p>   
             </div>
            ))}
        </>
        
    );
}

export default RecipeSq;