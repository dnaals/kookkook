import { NextRequest, NextResponse } from 'next/server';
import {test2} from '../db2';

export async function GET(){
  
    return NextResponse.json(await test2());
    // NextResponse.json(await test2());
}

export async function POST(req:Request){
    
    // console.log( await req.json());
    
    return NextResponse.json(await test2('post', await req.json()));
}
// 'post', req.json())