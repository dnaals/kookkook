"use client";

import RecipeWid from '@/components/UIUX/RecipeWid';
import Search from '@/components/UIUX/Search';
import { useStore3 } from '@/components/recipe_store/result_data';
import { useRouter } from 'next/navigation';


function page({params}:any) {

    const router = useRouter();
    let {data3, resultData} = useStore3();
    
    const goBack = (e:any)=>{
        e.preventDefault();
        router.push('/search/');
    }

    return (
        <div className='search-page'>
            <img src="/images/Arrow.png" alt="" className='back-arrow' onClick={goBack}/>
            <Search defaultValue={decodeURIComponent(params.detail)} />
            <div className="result-length">'{decodeURIComponent(params.detail)} '검색 결과 '{data3.length}'건 입니다.</div>
            <RecipeWid dataID = {data3}/>
        </div>
    );
}

export default page;