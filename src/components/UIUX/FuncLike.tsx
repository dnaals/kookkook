//좋아요버튼 기능
<<<<<<< HEAD
=======

>>>>>>> 218c5aaf20a8b7f76c8990c168ebaacd453c0468
import React, { useState } from 'react';
import "@/components/style/like.scss";

function FuncLike({ obj }: any) {
<<<<<<< HEAD


=======
>>>>>>> 218c5aaf20a8b7f76c8990c168ebaacd453c0468
    let like: any = Math.floor(obj);
    if (like >= 99) {
        like = '+' + 99;
    }

    const [isLike, setIsLike] = useState(false);

    let [pluslike, setPluslike] = useState(like);
<<<<<<< HEAD
    
    const changeLike = () => {
        setIsLike(!isLike);
        setPluslike(like+1)
    }
    
    return (

        <span className="like">
            <button onClick={changeLike}><img src={isLike ? "/images/heart_red.png" : "/images/heart_black.png"} />{pluslike}</button>
        </span>
=======
    const changeLike = () => {
        setIsLike(!isLike);
        setPluslike(like + 1);
    }
    // console.log(pluslike)
    return (

        <div className="like">
            <button onClick={changeLike}><img src={isLike ? "/images/heart_red.png" : "/images/heart_black.png"} />{pluslike}</button>
        </div>
>>>>>>> 218c5aaf20a8b7f76c8990c168ebaacd453c0468
    );
}

export default FuncLike;