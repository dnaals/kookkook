"use client";

import RecipeWid from '@/components/UIUX/RecipeWid';
import Search from '@/components/UIUX/Search';
import { useStore3 } from '@/components/recipe_store/result_data';
import { useSearchParams, useRouter } from 'next/navigation';


function page() {

    const router = useRouter();
    const searchParams = useSearchParams()
    const searchQuery = searchParams && searchParams.get("q");
    let {data3, resultData} = useStore3();

    const goBack = (e:any)=>{
        e.preventDefault();
        router.push('/search/');
    }

    return (
        <div className='search-page'>
            <img src="/images/back-arrow.png" alt="" className='back-arrow' onClick={goBack}/>
            <Search defaultValue={searchQuery} />
            <RecipeWid dataID = {data3}/>
        </div>
    );
}

export default page;