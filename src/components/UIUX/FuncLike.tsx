//좋아요버튼 기능

import React from 'react';
import "@/components/style/like.scss";

function FuncLike() {
    return (
        <div className="like">
            <button><img src="/images/heart_black.png" />4.9</button>
        </div>
    );
}

export default FuncLike;