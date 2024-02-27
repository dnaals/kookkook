//검색기능
"use client";
import { useRouter } from 'next/navigation';
import React from 'react';
import { useState, ChangeEvent } from "react";


function Search() {


interface iDefault {
    defaultValue: string | null
}


const SearchInput = ({ defaultValue }: iDefault) => {

    const router = useRouter()
    const [inputValue, setValue] = useState(defaultValue)

    const handleChange = (e: ChangeEvent<HTMLInputElement>) =>{
        const inputValue = e.target.value;
        setValue(inputValue);
    }
    
    const handleSearch = () => {
        
        if (inputValue) return router.push(`/?q=${inputValue}`);
        if (!inputValue) return router.push("/")
    }

    const handleKeyPress = (event: { key: any; }) => {

        if (event.key === "Enter") return handleSearch()
    }

    const searchBtn = ()=>{

    }
    // https://dev.to/stephengade/build-a-functional-search-bar-in-nextjs-mig
    return (
        <div>
            <form>
                <input type='text' value={inputValue ?? ""} onChange={handleChange} onKeyDown={handleKeyPress} placeholder='레시피 키워드를 입력하세요!'></input>
                <img src='' alt='' />
            </form>
        </div>
    );
}
}
export default Search;