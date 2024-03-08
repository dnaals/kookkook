//푸터메뉴 aaaa
import Link from 'next/link';
import React, { useState } from 'react';
import "../style/header_footer.scss";



function Foot() {
    let footData = [
        {name :"home", imgurl:"/images/home_yellow.png",imgurl2:"/images/home_full.png"},
        {name :"search", imgurl:"/images/search_yellow.png",imgurl2:"/images/Search_full.png"},
        {name :"bookmark", imgurl:"/images/bookmark_before.png",imgurl2:"/images/bookmark_after.png"},
        {name :"mypage", imgurl:"/images/user_yellow.png",imgurl2:"/images/user_full.png"}
    ];

    let [clickIndex,setClickIndex] = useState(0);

    const click = (key:number)=>{
        setClickIndex(key);
    }
    return (
        <div className='foot'>
            {
                footData.map((obj,k):any=>(
                    <Link key={k} onClick={()=>click(k)} href={`/${obj.name}`}><img src={clickIndex==k? obj.imgurl2:obj.imgurl} alt="" /></Link>
                ))
            }

        </div>

        // <div className='foot'>
        //     <Link href="/home"><img src="/images/home_yellow.png" /></Link>
        //     <Link href="/search"><img src="/images/search_yellow.png" /></Link>
        //     <Link href="/bookmark"><img src="/images/bookmark_before.png" /></Link>
        //     <Link href="/mypage"><img src="/images/user_yellow.png" /></Link>
        // </div>
    );
}

export default Foot;