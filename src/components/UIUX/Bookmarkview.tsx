"use client";
import React from 'react';
import FuncScrap from './FuncScrap';
import FuncLike from './FuncLike';
import { useRouter } from 'next/navigation';


// onClick={() => { link(obj.name) }}

function Bookmarkview({ data2, dataCrl2 }: any) {

    
    // console.log(data2)

    const router: any = useRouter();

    const link = (name: any) => {
        // console.log(name)
        let urlname = data2.filter((obj: any) => name == obj.seq);
        let url: any = urlname[0].seq;
        router.push(`/home/${url}`);
    }

    if (!data2) return <div>dsad</div>
    return (
        <>
            <div className="recipeWid_box1">
                <div className="recipeWid1">
                    {data2.map((obj: any, k: number) => (
                        <div key={k}>
                            <div>
                                <figure>
                                    <div className='scrap_position'><img className='menu_img' src={obj.m_thumb} /><FuncScrap obj={obj}/></div>
                                    <figcaption>
                                        <div className='flex'>
                                            <h2 onClick={() => { link(obj.seq) }}>{obj.name}</h2>
                                        </div>

                                        <p>{obj.tip}</p>
                                        <FuncLike obj={obj} />
                                    </figcaption>
                                </figure>
                            </div>
                        </div>
                    ))}
                </div>
            </div>


        </>
    );
}

export default Bookmarkview;