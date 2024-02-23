//푸터메뉴 aaaa
import Link from 'next/link';
import React from 'react';
import "../style/header_footer.scss";



function Foot() {
    return (
        <div className='foot'>
            {/* <Link href="/"></Link> */}
            <Link href="/home"><img src="/images/home_yellow.png" /></Link>
            <Link href="/search"><img src="/images/search_yellow.png" /></Link>
            <Link href="/bookmark"><img src="/images/bookmark_before.png" /></Link>
            <Link href="/mypage"><img src="/images/user_yellow.png" /></Link>
        </div>
    );
}

export default Foot;