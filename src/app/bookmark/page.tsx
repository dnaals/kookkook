import Bookmark from '@/components/service/Bookmark';
import RecipeList from '@/components/service/RecipeList';
import React from 'react';

function page() {
    const idx = "북마크";
    return (
        
        <div>
            <Bookmark idx={idx}/>
        </div>
    );
}

export default page;