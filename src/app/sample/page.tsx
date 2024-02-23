'use client';

import { useEffect } from "react";
import { useStore } from '../../components/recipe_store/all_store'
import { useStore2 } from '../../components/recipe_store/my_store';
// import Link from "next/link";


export default function Home() {


    let { data, dataCrl, status } = useStore();
    let { data2, dataCrl2, status1 } = useStore2();

    useEffect(() => {
        dataCrl('all', '');
        dataCrl2('all', '');
    }, [])


    return (
        <>
            <button onClick={() => { dataCrl('카테고리', '반찬') }}>반찬</button>
            <button onClick={() => { dataCrl('카테고리', '밥') }}>밥</button>
            <button onClick={() => { dataCrl('카테고리', '국&찌개') }}>국&찌개</button>
            <button onClick={() => { dataCrl('카테고리', '일품') }}>일품</button>
            <button onClick={() => { dataCrl('카테고리', '후식') }}>후식</button><br/>

            <button onClick={() => { dataCrl2('all', '') }}>구글계정 모두</button>

        </>
    );
}
