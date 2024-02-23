
import { NextRequest, NextResponse } from 'next/server';
// import type { NextApiRequest, NextApiResponse } from 'next'; 여기서 변경됨
import {test2} from '../../db2';

export async function GET(req:Request, {params}:any){
    console.log(params) 
    //req로 데이터 들어오고, parans로 url 맨뒤 값 가져옴
    
    const data2 = await test2('detail', {user:params.user})
    // console.log(req)
    return NextResponse.json(data2);
}




export async function DELETE(req:Request, {params}:any){
    // console.log(params)
    const data2 = await test2('delete', {user:params.user})
    return NextResponse.json(data2);
}

export async function PUT(req:Request){
    const data2 = await test2('put', await req.json())
    return NextResponse.json(data2);
}