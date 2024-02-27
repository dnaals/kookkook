import RecipeList from '@/components/service/RecipeList';
import React from 'react';

function page() {
    const idx = "정사각형";
    return (
        
        <div>
            <RecipeList idx={idx}/>
        </div>
    );
}

export default page;