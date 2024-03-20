import React, { useState, useEffect } from 'react';
import { useStore } from '../recipe_store/all_store';

function Button({setCateName2,setSortCate}:any) {
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


    const buttonClick = (category:string,index:number,label:string)=>{
        setSortCate(category);
        setClickedIndex(index);
        setCateName2(label);
    }

    return (
        
        <div className="home_btn">
            {buttons.map((obj, index) => (
                <button key={index} onClick={()=>buttonClick(obj.category,index,obj.label)} style={{ backgroundColor: clickedIndex === index ? '#FFC700' : 'white' }}>
                    <img src={obj.image} alt={obj.label} /> {obj.label}
                </button>
            ))}
        </div>
    );
}

export default Button;
