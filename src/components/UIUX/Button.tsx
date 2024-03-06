import React, { useEffect, useState } from 'react';
import { useStore } from '@/components/recipe_store/all_store';

function Button({ dataCrl,setCateName }: any) {
    let [clickColor, setClickColor] = useState(false);
    const backColor = (cate_name:any) => {
        setClickColor(prevColor => !prevColor);
        setCateName(cate_name);
    }
    const buttons = [
        { label: 'RICE', category: '밥', image: '/images/rice_black.png' },
        { label: 'SOUP', category: '국&찌개', image: '/images/soup_black.png' },
        { label: 'SIDE DISH', category: '반찬', image: '/images/sidedish_black.png' },
        { label: 'SPECIAL', category: '일품', image: '/images/special_black.png' },
        { label: 'DESSERT', category: '후식', image: '/images/dessert_black.png' },
        { label: 'Etc', category: '기타', image: '/images/etc_black.png' }

    ];

    return (
        <div className="home_btn">
            {
                buttons.map((obj,k) => (
                    <button key={k} onClick={() => { dataCrl("카테고리", obj.category); backColor(obj.category) }} style={{ backgroundColor: clickColor ? '#FFC700' : 'white' }}>
                        <img src={obj.image} /> {obj.label}
                    </button>
                ))
            }
        </div>
    );
}

export default Button;