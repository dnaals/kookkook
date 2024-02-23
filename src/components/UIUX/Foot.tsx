//푸터메뉴 aaaa
import Link from 'next/link';
import React from 'react';

function Foot() {
    return (
        <div id='a'>
            <Link href="/">login</Link>
            <Link href="/home">home</Link>
            <Link href="/search">search</Link>
            <Link href="/bookmark">bookmark</Link>
            <Link href="/mypage">mypage</Link>
        </div>
    );
}

export default Foot;