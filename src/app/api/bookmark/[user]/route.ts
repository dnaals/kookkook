import { NextRequest, NextResponse } from 'next/server';
// import type { NextApiRequest, NextApiResponse } from 'next'; 여기서 변경됨
import {test2} from '../../db2';

export async function GET(req:Request, {params}:any){
    //req로 데이터 들어오고, parans로 url 맨뒤 값 가져옴
    const data2 = await test2('detail', {seq:params.user})
<<<<<<< HEAD:src/app/api/my_recipe/[user]/route.ts
    // console.log(req)
=======
>>>>>>> a2a1428b39b6b0e66f05743441503b73c397ec80:src/app/api/bookmark/[user]/route.ts
    return NextResponse.json(data2);
}


export async function DELETE(req:Request, {params}:any){
<<<<<<< HEAD:src/app/api/my_recipe/[user]/route.ts
    // console.log(params.user)
    const data2 = await test2('delete', {seq:params.user})
=======
    const data2 = await test2('delete', {id:params.user})
>>>>>>> a2a1428b39b6b0e66f05743441503b73c397ec80:src/app/api/bookmark/[user]/route.ts
    return NextResponse.json(data2);
}

export async function PUT(req:Request){
    const data2 = await test2('put', await req.json())
    return NextResponse.json(data2);
}