//스크랩버튼 기능

import React, { useState } from 'react';
import "@/components/style/scrap.scss";

function FuncScrap() {
    let [b_click,setB_click] = useState(false);
    const bookmarkClick = ()=>{
        b_click = !b_click;
        setB_click(b_click)
    }

    return (
        <div className="scrap">
            <button onClick={bookmarkClick}><img src={ b_click? "/images/bookmark_after.png" : "/images/bookmark_before.png" }/></button>
        </div>
    );
}

export default FuncScrap;