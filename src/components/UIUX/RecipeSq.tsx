//레시피 정사각형 모양
'use client';
import React from 'react';
import { useRouter } from "next/navigation";
import "../style/recipe_sq.scss";
import FuncLike from './FuncLike';
import FuncScrap from './FuncScrap';


function RecipeSq({ dataID, dataCrl }: any) {
    console.log(dataID);
    const router: any = useRouter();
    const link = (name: any) => {
        let ID = dataID.filter((obj: any) => name == obj.user_name);
        let url: any = ID[0].seq;
        router.push(`/home/${url}`);
    }

    return (
        <div className="recipeSq">
            {dataID.map((obj: any, k: number) => (
                <div key={k} className='sq_contents' >
                    <div><img id='sq_img' src={obj.m_thumb}  /><FuncScrap/> </div>
                    <p onClick={() => { link(obj.name) }}>{obj.name}</p>
                    <FuncLike/>
                    
                </div>
            ))}
        </div>

    );
}

export default RecipeSq;