'use client';

import { useEffect } from "react";
import { useStore } from '@/components/recipe_store/all_store';
import { useStore2 } from '@/components/recipe_store/my_store';

import Link from 'next/link';
import React from 'react';
import { log } from "console";
import RecipeSq from "@/components/UIUX/RecipeSq";
function page() {
    return (
        <div>
            홈<br />
            <RecipeSq/>
            <Link href="/home/detail">상세페이지</Link>
        </div>
    );
}

export default page;