<<<<<<< HEAD
import React, { useState, useEffect } from 'react';

function Button({ dataCrl, setCateName }: any) {
    const [clickedIndex, setClickedIndex] = useState(0);

    const buttons = [
        { label: 'RICE', category: '밥', image: '/images/rice_black.png' },
        { label: 'SOUP', category: '국&찌개', image: '/images/soup_black.png' },
        { label: 'SIDE DISH', category: '반찬', image: '/images/sidedish_black.png' },
        { label: 'SPECIAL', category: '일품', image: '/images/special_black.png' },
        { label: 'DESSERT', category: '후식', image: '/images/dessert_black.png' },
        { label: 'Etc', category: '기타', image: '/images/etc_black.png' }
    ];

    const handleClick = (index: number, category: string) => {
        dataCrl("카테고리", category);
        setCateName(category);
        setClickedIndex(index);
    };

    useEffect(() => {
        setClickedIndex(0);
        dataCrl("카테고리", buttons[0].category);
        setCateName(buttons[0].category);
    }, []);

=======
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

>>>>>>> 218c5aaf20a8b7f76c8990c168ebaacd453c0468
    return (
        
        <div className="home_btn">
<<<<<<< HEAD
            {buttons.map((obj, index) => (
                <button key={index} onClick={() => handleClick(index, obj.category)} style={{ backgroundColor: clickedIndex === index ? '#FFC700' : 'white' }}>
                    <img src={obj.image} alt={obj.label} /> {obj.label}
                </button>
            ))}
=======
            {
                buttons.map((obj,k) => (
                    <button key={k} onClick={() => { dataCrl("카테고리", obj.category); backColor(obj.category) }} style={{ backgroundColor: clickColor ? '#FFC700' : 'white' }}>
                        <img src={obj.image} /> {obj.label}
                    </button>
                ))
            }
>>>>>>> 218c5aaf20a8b7f76c8990c168ebaacd453c0468
        </div>
    );
}

export default Button;
