"use client";
import React, { useState } from 'react';
import "@/components/style/mypage.scss";
import MypageButton from '@/components/UIUX/MypageButton';
import Profile from '@/components/UIUX/Profile';
import Comment from '@/components/UIUX/Comment';
import RecipeReg from '@/components/service/RecipeReg';




function page() {


    return (
        <div>
            <Profile />
            <MypageButton />
            <Comment />
        </div>
    );
}

export default page;