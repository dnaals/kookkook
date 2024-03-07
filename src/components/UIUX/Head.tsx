//헤더메뉴
"use client";
import React, { useState } from 'react';
import "../style/header_footer.scss";
import Bugger from './Bugger';
import Link from 'next/link';

function Head() {
    let [on,setOn] = useState(false);
    const on_btn = ()=>{
        setOn(true);
    }
    return (

        <div className='head'>
            <h1><Link href="/home">KooK KooK</Link></h1>
            <div className='bugger_menu' onClick={on_btn}>
                <p>ㅡ</p>
                <p>ㅡ</p>
                <p>ㅡ</p>
            </div>
            {on && <Bugger setOn={setOn} />}
        </div>
        

    );
}

export default Head;