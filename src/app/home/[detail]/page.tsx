import React from 'react';

function page() {
    return (
        <div>

            상세페이지
            <iframe
                id="ytplayer"
                type="text/html"
                width="720"
                height="405"
                src="https://www.youtube.com/embed/bU3N9S_sNjI"
                frameborder="0"
                allowfullscreen="allowfullscreen">
            </iframe>

        </div>
    );
}

export default page;


// https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=%ED%8E%98%EC%9D%B4%EC%BB%A4&type=video&key=AIzaSyD8Kj9MiGCaOF-6YkWkkLZmBhXxGGZSK2g
//q=검색할단어
// 저 주소안에 items안에 id안에 videoId값을 src에 embed/이부분에 넣으면됨