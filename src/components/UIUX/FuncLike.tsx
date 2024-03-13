//좋아요버튼 기능
import React, { useEffect, useState } from 'react';
import "@/components/style/like.scss";

function FuncLike({ obj }: any) {

    let num = Math.floor(obj.like)

    const [isLike, setIsLike] = useState(false);
    const [pluslike, setPluslike] = useState(num+1);

    const changeLike = () => {
        setIsLike(!isLike);       
    }

    useEffect(()=>{
        let like: any = Math.floor(obj.like);
        setPluslike(like);
    },[obj])

    useEffect(()=>{
       isLike ?  setPluslike(pluslike +1) :  setPluslike(pluslike -1);
    },[isLike])


    return (
        <span className="like">
            <button onClick={changeLike}>
                <img src={isLike ? "/images/heart_red.png" : "/images/heart_black.png"} alt="heart" />
                {pluslike >= 99 ? '+' + 99 : pluslike}
            </button>
        </span>
    );
}

export default FuncLike;