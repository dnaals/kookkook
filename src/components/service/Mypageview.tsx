import React, { useEffect } from 'react';
import MyrecipeReg from '../UIUX/MyrecipeReg';
import Comment from '../UIUX/Comment';
import Viewrecipe from '../UIUX/Viewrecipe';
import { useStore } from '../recipe_store/all_store';
import { useStore2 } from '../recipe_store/my_store';
import { useStore4 } from '../recipe_store/comment_store';

function Mypageview({ idx, session, dataCrl, dataCrl4 }: any) {

    let {data} = useStore();
    let {data2, dataCrl2} = useStore2();
    let {data4} = useStore4();

    useEffect(()=>{
        dataCrl('all', '', '')
        dataCrl4('all', '', '')
    },[])

    if (!idx) return <div>loding...</div>

    let comp;
    switch (idx) {
        case "내 레시피":
            comp = <MyrecipeReg data={data} dataCrl={dataCrl} session={session} />
            break;

        case "내 댓글":
            comp = <Comment data4={data4} session={session} />
            break;

        case "내가 본 레시피":
            comp = <Viewrecipe />
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

export default Mypageview;