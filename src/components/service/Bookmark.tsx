"use client";
import React, { useEffect } from 'react';
import Bookmarkview from '../UIUX/Bookmarkview';
import { useStore2 } from '../recipe_store/bookmark_store';
import { useStore } from '../recipe_store/all_store';

function Bookmark({idx}:any) {

    const { data, dataCrl} = useStore();
    const { data2, dataCrl2} = useStore2();

    useEffect(()=>{
        dataCrl('all','','')
        dataCrl2('all', '', '')
    },[])

    let comp;
    switch (idx) {
        case "북마크":
            comp=<Bookmarkview data2={data2} dataCrl2={dataCrl2}/>
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