"use client";
import React, { useState } from 'react';
import { useStore } from '@/components/recipe_store/all_store';
import "../style/bugger.scss";
import Link from 'next/link';
function Bugger({setOn}:any) {
    let { dataCrl } = useStore();
    const close_btn = ()=>{
        setOn(false);
    }
    return (

        <div className='bugger_menu_on' >
            <p className='close_btn' onClick={close_btn}>×</p>
            <div className='member'>
                <div className='memberImg'>
                    <img src="/images/user_white.png" alt="" />
                </div>
                <p>name</p>
            </div>
            <div className='menu'>
                <Link href="/home">
                    <div className='menu_contents' onClick={close_btn} ><img src="/images/home_white.png" alt="" /><p>Home</p></div>
                </Link>
                <Link href="/mypage">
                    <div className='menu_contents' onClick={close_btn}><img src="/images/user_white.png" alt="" /><p>My Page</p></div>
                </Link>
                <div className='menu_contents'><img src="/images/Restaurant.png" alt="" /><p>Recipe</p></div>
                <div>
                    <p onClick={()=>{dataCrl("카테고리","밥");close_btn() }}>Rice</p>
                    <p onClick={()=>{dataCrl("카테고리","국&찌개");close_btn() }}>Soup</p>
                    <p onClick={()=>{dataCrl("카테고리","반찬");close_btn() }}>Side dish</p>
                    <p onClick={()=>{dataCrl("카테고리","일품");close_btn() }}>Special</p>
                    <p onClick={()=>{dataCrl("카테고리","후식");close_btn() }}>Dessert</p>
                    <p onClick={()=>{dataCrl("카테고리","기타");close_btn() }}>Etc</p>
                </div>
            </div>
            <div className='login_button'>
                <img src="/images/login.png" alt="a" />
                <p>Login</p>
            </div>
        </div>

    );
}

export default Bugger;