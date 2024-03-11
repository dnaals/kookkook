'use client';
import { useRouter } from "next/navigation";
import FuncScrap from '@/components/UIUX/FuncScrap';
import FuncLike from './FuncLike';
import "../style/scrap.scss";
import "../style/recipe_wid.scss";

function RecipeWid({ dataID,cateName }: any) {
    const router: any = useRouter();

    const link = (name: any) => {
        let urlname = dataID.filter((obj: any) => name == obj.name);
        let url: any = urlname[0].seq;
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