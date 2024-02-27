//좋아요버튼 기능

import React from 'react';
import RecipeList from '@/components/service/RecipeList';
// import { useStore } from '../recipe_store/all_store';
// import { useEffect } from 'react';
import "@/components/style/like.scss";

function FuncLike() {
    // let { data, dataCrl } = useStore();
    // useEffect(() => {
    //     dataCrl('all', '');
    // }, [])




    return (

        <div className="like">
            <button><img src="/images/heart_black.png" />like 값</button>
        </div>
    );
}

export default FuncLike;