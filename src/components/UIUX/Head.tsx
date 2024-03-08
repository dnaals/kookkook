//헤더메뉴
"use client";
import React, { useState } from 'react';
import "../style/header_footer.scss";
import Bugger from './Bugger';
<<<<<<< HEAD
import Link from 'next/link';
=======
>>>>>>> 218c5aaf20a8b7f76c8990c168ebaacd453c0468

function Head() {
    let [on,setOn] = useState(false);
    const on_btn = ()=>{
        setOn(true);
    }
    return (

        <div className='head'>
<<<<<<< HEAD
            <h1><Link href="/home">KooK KooK</Link></h1>
=======
            <h1>Kook Kook</h1>
>>>>>>> 218c5aaf20a8b7f76c8990c168ebaacd453c0468
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