import { NextRequest, NextResponse } from 'next/server';
import {test} from '../db';

export async function GET(){
    
    return NextResponse.json(await test());
    // NextResponse.json(await test2());
}

export async function POST(req:Request){
    const aa = await req.json();
    // console.log( aa);
    
    return NextResponse.json(await test('post', aa));
}
// 'post', req.json())