"use client";
import React, { useEffect } from 'react';
import { useStore } from '../recipe_store/all_store';
import RecipeWid from '../UIUX/RecipeWid';
import RecipeSq from '../UIUX/RecipeSq';
import Home_detail from '../UIUX/Home_detail';
import { useStore2 } from '../recipe_store/bookmark_store';
import { useStore4 } from '../recipe_store/comment_store';
import { useSession } from 'next-auth/react';
import Loading from '@/app/loading';


function RecipeList({idx,detailUrl,selectName}:any) {

    
    let { data, dataCrl } = useStore();
    let { data2, dataCrl2 } = useStore2();
    let { data4, dataCrl4 } = useStore4();
    const { data: session, status }: any = useSession();

    // const userbook = data2.filter((user:any) => user.user_email == session.user.email)
    let commetnum = data4.filter((obj:any)=>obj.user_id == session?.user.id)
    
    useEffect(() => {
        dataCrl2('all', '','');
        dataCrl4('all','','')
    }, [])

    if (!data.length) return <Loading/>; 


    let comp;
    switch (idx) {
        case "가로":
            comp=<RecipeWid selectName={selectName} dataID={data} dataCrl={dataCrl} commetnum={commetnum}/>
            break;
        case "정사각형":
            comp=<RecipeSq dataID={data} dataCrl={dataCrl} />
            break;
            
        case "홈세부":
            comp=<Home_detail dataID={data} data4={data4} detailUrl={detailUrl} dataCrl4={dataCrl4} session={session}/>
            break;
        default:
            break;
    }


    return (
        <>
            {comp}
        </>
    );
}

export default RecipeList;