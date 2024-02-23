'use client';

import { useEffect } from "react";
import { useStore } from '@/components/recipe_store/all_store';
import { useStore2 } from '@/components/recipe_store/my_store';

import Link from 'next/link';
import React from 'react';
import { log } from "console";
function page() {
    let { data, dataCrl } = useStore();
    let { data2, dataCrl2 } = useStore2();

    useEffect(() => {
        dataCrl('all', '');
        dataCrl2('all', '');

    }, [])
    console.log('====================================');
    console.log(data, 'sdfsfsdd');
    console.log('====================================');
    if (!data.length) return <>sadsadsa...</>
    return (
        <div>
            홈<br />
            <button onClick={() => { dataCrl('카테고리', '반찬') }}>반찬</button>
            <button onClick={() => { dataCrl('카테고리', '밥') }}>밥</button>
            <button onClick={() => { dataCrl('카테고리', '국&찌개') }}>국&찌개</button>
            <button onClick={() => { dataCrl('카테고리', '일품') }}>일품</button>
            <button onClick={() => { dataCrl('카테고리', '후식') }}>후식</button><br />

            <button onClick={() => { dataCrl2('all', '') }}>구글계정 모두</button>

            <Link href="/home/detail">상세페이지</Link>

            <p>{data[2].seq}</p>



        </div>
    );
}

export default page;