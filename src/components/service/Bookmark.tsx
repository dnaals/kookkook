"use client";
import React, { useEffect } from 'react';
import Bookmarkview from '../UIUX/Bookmarkview';
import { useStore2 } from '../recipe_store/bookmark_store';
import { useStore } from '../recipe_store/all_store';
import { useSession } from 'next-auth/react';
import GoogleLogin from './GoogleLogin';

function Bookmark({idx}:any) {

    const { data, dataCrl} = useStore();
    const { data2, dataCrl2} = useStore2();
    const { data: session, status }: any = useSession();
    if(!session){
        return  <div className='isLogin'><p>로그인을 하지않으면 보여주지않는다</p><GoogleLogin/></div>
    }
    const userbook = data2.filter((user:any) => user.user_email == session.user.email)
    // console.log(userbook, '유저북')
    // console.log(session.user.user_email , ' 유저')

    useEffect(()=>{
        dataCrl('all','','')
        dataCrl2('all', '', '')
    },[])

    if(!userbook) return <div>loding...</div>

    let comp;
    switch (idx) {
        case "북마크":
            comp=<Bookmarkview data2={userbook} dataCrl2={dataCrl2}/>
            break;
        
        default:
            break;
    }


    return (
        <div>
            {comp}
        </div>
    );
}

export default Bookmark;