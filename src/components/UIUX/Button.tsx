import React, { useEffect } from 'react';
import { useStore } from '@/components/recipe_store/all_store';

function Button({ getData }: any) {
    let { data, dataCrl } = useStore();
    getData(data);
    // useEffect(() => {
    //     dataCrl('all', '');
    // }, [])
    // if (!data.length) return <>sadsadsa...</>
    return (
        <div className="home_btn">
            <button onClick={() => { dataCrl('카테고리', '밥') }}><img src="/images/rice_black.png" />RICE</button>
            <button onClick={() => { dataCrl('카테고리', '국&찌개') }}><img src="/images/soup_black.png" />SOUP</button>
            <button onClick={() => { dataCrl('카테고리', '반찬') }}><img src="/images/sidedish_black.png" />SIDE DISH</button>
            <button onClick={() => { dataCrl('카테고리', '일품') }}><img src="/images/special_black.png" />SPECIAL</button>
            <button onClick={() => { dataCrl('카테고리', '후식') }}><img src="/images/dessert_black.png" />DESSERT</button>
            <button onClick={() => { dataCrl('카테고리', '기타') }}><img src="/images/etc_black.png" />Etc</button><br />
        </div>
    );
}

export default Button;