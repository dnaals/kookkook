"use client";
import { useStore } from '@/components/recipe_store/all_store';
import React, { useEffect } from 'react';
import "@/components/style/home_detail.scss";
import axios from 'axios';

function page({params}:any) {
    let { data, dataCrl } = useStore();

    useEffect(() => {
        dataCrl('all', '');
    }, [])

    if (!data.length) return <>sadsadsa...</>

    let detailData = data.filter(obj=>obj.seq==params.detail)


//     let [youtubeID,setYoutubeID] = useState();
//     useEffect(() => {
//     axios.get(
//         `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=${detailData[0].name}&type=video&key=AIzaSyAkF29AFuFTLUb7d4EnMRer61_Jw_M7zfw`
//     )
//     .then((res) => {
//         setYoutubeID(res.data.items[0].id.videoId);
//     //   setPlaylist(res.data.items);
//     })
//     .catch(() => {});
// }, []);
//     const youtubeSrc = `https://www.youtube.com/embed/${youtubeID}`

    return (
        <div className='detail_contents'>
            {
                
                    <p>{detailData[0].name}</p>
                
            }
            {/* <iframe
                id="ytplayer"
                type="text/html"
                width="720"
                height="405"
                src= {youtubeSrc}
                frameborder="0"
                allowfullscreen="allowfullscreen">
            </iframe> */}
        </div>
    );
}

export default page;


// https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=%ED%8E%98%EC%9D%B4%EC%BB%A4&type=video&key=AIzaSyD8Kj9MiGCaOF-6YkWkkLZmBhXxGGZSK2g
//q=검색할단어
// 저 주소안에 items안에 id안에 videoId값을 src에 embed/이부분에 넣으면됨

//AIzaSyD8Kj9MiGCaOF-6YkWkkLZmBhXxGGZSK2g (우민key값)
//AIzaSyAkF29AFuFTLUb7d4EnMRer61_Jw_M7zfw (승관key값)
