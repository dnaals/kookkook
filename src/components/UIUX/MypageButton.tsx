

'use client';
import React from 'react';
import "@/components/style/mypage.scss";
import Link from "next/link";
function MypageButton({ idxdata, session, dataCrl, dataCrl4 }: any) {



    return (
        <div className='my_btn'>
           
            <button onClick={() => {idxdata('내 레시피'); dataCrl('나의레시피', `${session.user.id}`, '') }}><img src='/images/recipe_black.png' />나의 레시피</button>
            <button onClick={() => {idxdata('내 댓글'); dataCrl4('user', `${session.user.id}`, '') }}><img src='/images/comment_black.png' />내 댓글</button>
            <button onClick={() => {idxdata('내가 본 레시피'); dataCrl('나의레시피', '일품', '') }}><img src='/images/recipe_black.png' />관심 레시피</button>
            <Link className='Reg_btn' href='/mypage/reg'><button><img src='/images/register_black.png' />레시피 등록</button></Link>
        </div>
    );
}

export default MypageButton;