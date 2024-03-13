import Bookmark from '@/components/service/Bookmark';
import RecipeList from '@/components/service/RecipeList';
import React from 'react';
import '../../components/style/bookmark.scss';
function page() {
    const idx = "북마크";
    return (
        
        <div className='bookmark_page'>
            <Bookmark idx={idx}/>
        </div>
    );
}

export default page;