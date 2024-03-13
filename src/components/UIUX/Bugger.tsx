"use client";
import React, { useState } from 'react';
import { useStore } from '@/components/recipe_store/all_store';
import "../style/bugger.scss";
import Link from 'next/link';
import GoogleLogin from '../service/GoogleLogin';
function Bugger({setOn,setSelName}:any) {
    

    const {category} = useStore()

    let { dataCrl } = useStore();
    const close_btn = (name:string)=>{
        setOn(false);
        //setSelName(name);

    }
    return (
        <div className='bugger_menu_on' >
            <p className='close_btn' onClick={()=>close_btn('')}>×</p>
            <div className='member'>
                <div className='memberImg'>
                    <img src="/images/user_white.png" alt="" />
                </div>
                <p>name</p>
            </div>
            <div className='menu'>
                <Link href="/home">
                    <div className='menu_contents' onClick={()=>close_btn('')} ><img src="/images/home_white.png" alt="" /><p>Home</p></div>
                </Link>
                <Link href="/mypage">
                    <div className='menu_contents' onClick={()=>close_btn('')}><img src="/images/user_white.png" alt="" /><p>My Page</p></div>
                </Link>
                <div className='menu_contents'><img src="/images/Restaurant.png" alt="" /><p>Recipe</p></div>
                <Link href="/home"><div>
                    <p onClick={()=>{category("밥",0);close_btn("Rice") }}>Rice</p>
                    <p onClick={()=>{category("국&찌개",1);close_btn("Soup") }}>Soup</p>
                    <p onClick={()=>{category("반찬",2);close_btn("Side dish") }}>Side dish</p>
                    <p onClick={()=>{category("일품",3);close_btn("Special") }}>Special</p>
                    <p onClick={()=>{category("후식",4);close_btn("Dessert") }}>Dessert</p>
                    <p onClick={()=>{category("기타",5);close_btn("Etc") }}>Etc</p>
                </div>
                </Link>
            </div>
            <div onClick={()=>close_btn('')} className='login_button'>
                <GoogleLogin/>
            </div>
        </div>

    );
}

export default Bugger;