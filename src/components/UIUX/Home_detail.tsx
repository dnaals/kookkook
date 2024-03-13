"use client";
import React, { useEffect, useState } from 'react';
import "@/components/style/home_detail.scss";
import axios from 'axios';
import FuncScrap from './FuncScrap';
import Link from 'next/link';

function Home_detail({ dataID, detailUrl }: any) {
    let detailData = dataID.filter((obj: any) => obj.seq == detailUrl)
    let menual = []



    for (let i = 1; i < 21; i++) {
        let menualData = detailData[0]['MANUAL0' + i];
        let menualImgData = detailData[0]['MANUAL_IMG0' + i];
        if (menualData != (undefined) && menualImgData != (undefined)) {
            if (menualData != ("") && menualImgData != ("")) {
                menual.push({ menual: menualData, menualImg: menualImgData });
            }
        }
    }
    let [book, setBook] = useState(false);
    let [heart, setHeart] = useState(false);

    const bookmarkClick = () => {
        setBook(!book)
    }
    const heartClick = () => {
        setHeart(!heart)
    }



        let [youtubeID,setYoutubeID] = useState();
        useEffect(() => {
        axios.get(
            `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=${detailData[0].name} 레시피&type=video&key=AIzaSyAkF29AFuFTLUb7d4EnMRer61_Jw_M7zfw`
        )
        .then((res) => {
            setYoutubeID(res.data.items[0].id.videoId);
        //   setPlaylist(res.data.items);
        })
        .catch(() => {});
    }, []);
    const youtubeSrc = `https://www.youtube.com/embed/${youtubeID}`

    return (
        <>
            <header className='home_detail_header'>
                <Link href='/home'><img id='arrow' src="/images/Arrow.png" alt="dd" /></Link>
                <div className='func'>
                    <img onClick={heartClick} src={heart ? "/images/heart_red.png" : "/images/heart_black.png"} alt="" />
                    <img onClick={bookmarkClick} src={book ? "/images/bookmark_after.png" : "/images/bookmark_before.png"} />
                </div>
            </header>
            <div className='detail_contents'>
                <h2>{detailData[0].name}</h2>
                <p><img src={detailData[0].m_thumb} alt="" /></p>
                <h2>재료</h2>
                <div className='detail_ingredient'>
                    <p>{detailData[0].ingredient}</p>
                </div>
                <h2>조리순서</h2>

                {
                    menual.map((obj: any,k:number) => (
                        <div key={k} className='detail_menual'>
                            <p>{obj.menual}</p>
                            <p><img src={obj.menualImg} alt="" /></p>
                        </div>
                    ))
                }

                <div className="youtube-ly">
                    <iframe className='youtube_api'
                    id="ytplayer"
                    type="text/html"
                    src= {youtubeSrc}
                    frameborder="0"
                    >
                </iframe>
                </div>
            
                <div className='detail_comment'>
                    <h2>댓글</h2>
                    <div className='comment_box'>
                        <div>
                            <p><img src="/images/user_full.png" alt="" /></p>
                            <div>
                                <p>정승관  /  진짜 맛없네요!! 감사합니다 ㅎㅎ</p>
                                <p>2024.03.11</p>
                            </div>
                        </div>
                        <div>
                            <p><img src="/images/user_full.png" alt="" /></p>
                            <div>
                                <p>송우민  /  감사합니다 ㅎㅎ</p>
                                <p>2024.03.11</p>
                            </div>
                        </div>
                    </div>
                    
                    <form>
                        <input type="text" placeholder='댓글을 입력하세요' />
                        <input type="submit" value="등록" />
                    </form>

                </div>
            </div>
        </>
    );
}

export default Home_detail;


// https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=%ED%8E%98%EC%9D%B4%EC%BB%A4&type=video&key=AIzaSyD8Kj9MiGCaOF-6YkWkkLZmBhXxGGZSK2g
//q=검색할단어
// 저 주소안에 items안에 id안에 videoId값을 src에 embed/이부분에 넣으면됨

//AIzaSyD8Kj9MiGCaOF-6YkWkkLZmBhXxGGZSK2g (우민key값)
//AIzaSyAkF29AFuFTLUb7d4EnMRer61_Jw_M7zfw (승관key값)
