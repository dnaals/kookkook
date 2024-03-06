//스크랩버튼 기능

import React, { useState } from 'react';
import "@/components/style/scrap.scss";

function FuncScrap() {
    let [b_click,setB_click] = useState(false);
    const bookmarkClick = ()=>{
        setB_click(prevState => !prevState)
    }

    return (
        
        <div className="scrap">
            <button onClick={bookmarkClick}>
                <img src={ b_click? "/images/bookmark_after.png" : "/images/bookmark_before.png" } alt='asd'/>
            </button>
        </div>
    );
}

export default FuncScrap;