'use client';
import { useRouter } from "next/navigation";
import FuncScrap from '@/components/UIUX/FuncScrap';
import FuncLike from './FuncLike';
import "../style/scrap.scss";
import "../style/recipe_wid.scss";

function RecipeWid({ dataID }: any) {
    const router: any = useRouter();

    const link = (name: any) => {
        let urlname = dataID.filter((obj: any) => name == obj.name);
        let url: any = urlname[0].seq;
        router.push(`/home/${url}`);
    }

    return (
        <>
            <div className="recipeWid_box">
                <div className="recipeWid">
                    {dataID.map((obj: any, k: number) => (
                        <div key={k}>
                            <div>
                                <figure>
                                    <div className='scrap_position'><img className='menu_img' src={obj.m_thumb} /><FuncScrap dataID={dataID} obj ={obj.name} /></div>   
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