//좋아요버튼 기능

import React, { useState } from 'react';
import "@/components/style/like.scss";

function FuncLike({ obj }: any) {
    let like: any = Math.floor(obj);
    if (like >= 99) {
        like = '+' + 99;
    }

    const [isLike, setIsLike] = useState(false);

    let [pluslike, setPluslike] = useState(like);
    const changeLike = () => {
        setIsLike(!isLike);
        setPluslike(like + 1);
    }
    // console.log(pluslike)
    return (

        <div className="like">
            <button onClick={changeLike}><img src={isLike ? "/images/heart_red.png" : "/images/heart_black.png"} />{pluslike}</button>
        </div>
    );
}

export default FuncLike;