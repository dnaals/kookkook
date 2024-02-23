import Link from 'next/link';
import React from 'react';
function page() {
    return (
        <div>
            홈<br />
            <Link href="/home/detail">상세페이지</Link>
        </div>
    );
}

export default page;