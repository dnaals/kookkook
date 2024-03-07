"use client";

import React, { useState } from 'react';
import "@/components/style/mypage.scss";
import Link from "next/link";
function MypageButton({ setRegOn }: any) {

    // let [clickColor, setClickColor] = useState(false);
    // const backColor = () => {
    //     setClickColor(prevColor => !prevColor);
    // }

    // const buttons = [
    //     { label: '나의 레시피', category: '나의 레시피', image: '/images/recipe_black.png' },
    //     { label: '내 댓글', category: '내 댓글', image: '/images/comment_black.png' },
    //     { label: '내가 본 레시피', category: '내가 본 레시피', image: '/images/recipe_black.png' },
    //     { label: '레시피 등록', category: '레시피 등록', image: '/images/register_black.png' }
    // ];

    return (
        <div className='my_btn'>
            {/* {
                buttons.map((obj) => (
                    <button onClick={() => { backColor() }} style={{ backgroundColor: clickColor ? '#FFC700' : 'white' }}>
                        <img src={obj.image} /> {obj.label}
                    </button>
                ))
            } */}

            <button><img src='/images/recipe_black.png' />나의 레시피</button>
            <button><img src='/images/comment_black.png' />내 댓글</button>
            <button><img src='/images/recipe_black.png' />내가 본 레시피</button>
            <Link href='/mypage/reg'><button><img src='/images/register_black.png' />레시피 등록</button></Link>
        </div>
    );
}

export default MypageButton;