import { NextRequest, NextResponse } from 'next/server';
// import type { NextApiRequest, NextApiResponse } from 'next'; 여기서 변경됨
import { test } from '../../db';

export async function GET(req: Request, { params }: any) {
    // console.log(params) 
    //req로 데이터 들어오고, parans로 url 맨뒤 값 가져옴
    const reg = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    let data;
    if (reg.test(params.user)) {
        data = await test('detail', { user: params.user })
    } else {
        data = await test('detail', { m_cate: params.user })
    }
    // const data2 = await test2('detail', {name:params.name})
    // console.log(req)
    return NextResponse.json(data);
}

export async function DELETE(req: Request, { params }: any) {
    // console.log(params)
    const data = await test('delete', { seq: params.user })
    return NextResponse.json(data);
}

export async function PUT(req: Request) {
    const data = await test('put', await req.json())
    return NextResponse.json(data);
}