import React, { useState, useEffect } from 'react';
import { useStore } from '../recipe_store/all_store';

function Button() {
    const [clickedIndex, setClickedIndex] = useState(0);
    const {cateName,cateIdx,category} = useStore()

    const buttons = [
        { label: 'RICE', category: '밥', image: '/images/rice_black.png' },
        { label: 'SOUP', category: '국&찌개', image: '/images/soup_black.png' },
        { label: 'SIDE', category: '반찬', image: '/images/sidedish_black.png' },
        { label: 'SPECIAL', category: '일품', image: '/images/special_black.png' },
        { label: 'DESSERT', category: '후식', image: '/images/dessert_black.png' },
        { label: 'ETC', category: '기타', image: '/images/etc_black.png' }
    ];

    const handleClick = (index: number, category: string) => {
        
        // dataCrl("카테고리", category);
        // setCateName(category);
        // setClickedIndex(index);

        // handleClick(index, obj.category)
    };

    useEffect(() => {
        category(cateName,cateIdx);
        // setClickedIndex(0);
        // dataCrl("카테고리", buttons[0].category);
        // setCateName(buttons[0].category);
    }, []);

    return (
        
        <div className="home_btn">
            {buttons.map((obj, index) => (
                <button key={index} onClick={() => category(obj.category, index)} style={{ backgroundColor: cateIdx === index ? '#FFC700' : 'white' }}>
                    <img src={obj.image} alt={obj.label} /> {obj.label}
                </button>
            ))}
        </div>
    );
}

export default Button;
