//레시피 직사각형(길게) 모양
'use client';

import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/swiper-bundle.css';


import { useRouter } from "next/navigation";
import FuncScrap from '@/components/UIUX/FuncScrap';
import FuncLike from './FuncLike';

import "../style/scrap.scss";
import "../style/recipe_wid.scss";

//슬라이드 적용 보류
// function RecipeWid({ dataID, dataCrl }: any) {
//     const router: any = useRouter();
//     const itemea = 5;
//     const [data, setData] = useState([]);

//     function slideData() {

//         let itemGroup: any = [];
//         for (let i = 0; i < dataID.length; i += 5) {
//             let item = [];
//             for (let j = 0; j < itemea; j++) {
//                 item.push(dataID[i + j])
//             }
//             itemGroup.push(item);
//         }
//         console.log(itemGroup)
//         setData(itemGroup);
//     }

//     const link = (a: any) => {
//         let aa = dataID.filter((obj: any) => a == obj.name);
//         let url: any = aa[0].seq;
//         router.push(`/home/${url}`);
//     }

//     if (!dataID.length) return;

//     useEffect(slideData, [])


//     return (

//         <div className="recipeWid_box">

//             <div className="recipeWid">
//                 <Swiper
//                     slidesPerView={1}
//                     spaceBetween={5}
//                     // pagination={{
//                     //     clickable: true,
//                     // }}
//                     modules={[Pagination]}
//                     navigation
//                     scrollbar={{ draggable: true }}
//                     className="mySwiper"
//                 >
//                     {
//                         data.map((group: any, k: number) => (
//                             <SwiperSlide key={k}>

//                                 <div key={k}>
//                                     {
//                                         group.map((obj: any, h: number) => (
//                                             <div key={h} onClick={() => { link(obj.name) }}>
//                                                 <figure>
//                                                     <img src={obj.m_thumb} />

//                                                     <figcaption>
//                                                         <div className='flex'>
//                                                             <div>{obj.name}</div>
//                                                             <FuncScrap />
//                                                         </div>
//                                                         <p>{obj.tip}</p>
//                                                         <FuncLike obj={obj.like} />
//                                                     </figcaption>
//                                                 </figure>
//                                             </div>
//                                         ))
//                                     }
//                                 </div>
//                             </SwiperSlide>

//                         ))
//                     }
//                 </Swiper>
//             </div>
//         </div>

//     );
// }



function RecipeWid({ dataID, dataCrl,cateName }: any) {
    // console.log(dataID, "asdasd");
    const router: any = useRouter();

    const link = (a: any) => {
        let aa = dataID.filter((obj: any) => a == obj.name);
        let url: any = aa[0].seq;
        router.push(`/home/${url}`);
    }

    // console.log(dataID)

    const items = dataID;

    //최신순 : seq 내림차순
    // items.sort(function (a, b) {
    //     if (a.seq > b.seq) {
    //         return 1;
    //     }
    //     if (a.seq < b.seq) {
    //         return -1;
    //     }
    //     // a must be equal to b
    //     return 0;
    // })

    //댓글순 : seq 오름차순 
    items.sort(function (b: any, a: any) {
        if (a.seq > b.seq) {
            return 1;
        }
        if (a.seq < b.seq) {
            return -1;
        }
        // a must be equal to b
        return 0;
    })

    console.log(items)


    return (
        <>
            <div>
                <select name="search_cate" id="search_cate">
                    <option value="latest">최신순</option>
                    <option value="comment">댓글순</option>
                    <option value="star">별점순</option>
                </select>
            </div>
            <div className="recipeWid_box">
                <div className="recipeWid">
                    <p>{cateName}</p>
                    {dataID.map((obj: any, k: number) => (
                        <div key={k}>
                            <div>
                                <figure>
                                    <div className='scrap_position'><img className='menu_img' src={obj.m_thumb} /><FuncScrap /></div>   
                                    <figcaption>
                                        <div className='flex'>
                                            <h2 onClick={() => { link(obj.name) }}>{obj.name}</h2>
                                        </div>
                                        
                                        <p>{obj.tip}</p>
                                        <FuncLike obj={obj.like} />
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


export default RecipeWid;