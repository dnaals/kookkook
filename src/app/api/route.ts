import { NextRequest, NextResponse } from 'next/server';
import { test } from './db';

export async function GET() {

    return NextResponse.json(await test());
}

export async function POST(req: Request) {

    // console.log( await req.json());

    return NextResponse.json(await test('post', await req.json()));
}
// 'post', req.json())