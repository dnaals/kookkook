'use client';
import React, { useRef, useState } from 'react';
import { useSession } from "next-auth/react";
import '../style/MyrecipeReg.scss'

function MyrecipeReg({dataID, dataCrl2}:any) {

    const { data: session, status }:any = useSession();
    const elform = useRef<HTMLFormElement | null>(null)
    const elform1 = useRef<HTMLFormElement | null>(null)
    const [abc, setAbc]:any = useState([])
    
    let aa = (e: any) => {
        
        e.preventDefault()
        // console.log(session.user.email)
        if (elform.current) {
        
            let formData = new FormData(elform.current);
            // console.log(dataID.length)
            const a = {
                'seq': dataID.length+1,
                'name': `${formData.get("M_name")}`,
                'm_cate': `${formData.get("kategori")}`,
                's_cata': `${formData.get("whfl")}`,
                'ingredient': `${formData.get("재료")}`,
                'tip': `${formData.get("tip")}`,
                'MANUAL01': `${formData.get("조리1")}`,
                'MANUAL02': `${formData.get("조리2")}`,
                'MANUAL03': `${formData.get("조리3")}`,
                'MANUAL04': '',
                'MANUAL05': '',
                'MANUAL06': '',
                'MANUAL07': '',
                'MANUAL08': '',
                'MANUAL09': '',
                'MANUAL10': '',
                'MANUAL11': '',
                'MANUAL12': '',
                'MANUAL_IMG01': `${formData.get("조리이미지1")}`,
                'MANUAL_IMG02': `${formData.get("조리이미지2")}`,
                'MANUAL_IMG03': `${formData.get("조리이미지3")}`,
                'MANUAL_IMG04': '',
                'MANUAL_IMG05': '',
                'MANUAL_IMG06': '',
                'MANUAL_IMG07': '',
                'MANUAL_IMG08': '',
                'MANUAL_IMG09': '',
                'MANUAL_IMG10': '',
                'MANUAL_IMG11': '',
                'MANUAL_IMG12': '',
                'HASH_TAG': `${formData.get("tag")}`,
                'm_thumb': `${formData.get("M_name")}`,
                's_thumb': `${formData.get("S_name")}`,
                'like': 0,
                'user': `${session.user.email}`,
                'open': `${formData.get("open")}`

            }

            
            dataCrl2('insert', a)
            
        }
    }

    let bb = (e:any)=>{
        let vlfxj = dataID.filter((obj:any)=>e == obj.seq)
        console.log(vlfxj[0].seq)
        let selectRecipe = vlfxj[0].seq
        dataCrl2('delete', selectRecipe, '')

    }
    let cc = (e:any)=>{
        let vlfxj2 = dataID.filter((obj:any)=>e == obj.seq)
        console.log(vlfxj2[0].seq)
        let selectRecipenum = vlfxj2[0].seq
        console.log(vlfxj2[0])
        const selectData = {
            'seq': vlfxj2[0].seq,
            'name': `${vlfxj2[0].name}`,
            'm_cate': `${vlfxj2[0].m_cate}`,
            's_cata': `${vlfxj2[0].s_cata}`,
            'ingredient': `${vlfxj2[0].ingredient}`,
            'tip': `${vlfxj2[0].tip}`,
            'MANUAL01': `${vlfxj2[0].MANUAL01}`,
            'MANUAL02': `${vlfxj2[0].MANUAL02}`,
            'MANUAL03': `${vlfxj2[0].MANUAL03}`,
            'MANUAL04': `${vlfxj2[0].MANUAL04}`,
            'MANUAL05': `${vlfxj2[0].MANUAL05}`,
            'MANUAL06': `${vlfxj2[0].MANUAL06}`,
            'MANUAL07': `${vlfxj2[0].MANUAL07}`,
            'MANUAL08': `${vlfxj2[0].MANUAL08}`,
            'MANUAL09': `${vlfxj2[0].MANUAL09}`,
            'MANUAL10': `${vlfxj2[0].MANUAL10}`,
            'MANUAL11': `${vlfxj2[0].MANUAL11}`,
            'MANUAL12': `${vlfxj2[0].MANUAL12}`,
            'MANUAL_IMG01': `${vlfxj2[0].MANUAL_IMG01}`,
            'MANUAL_IMG02': `${vlfxj2[0].MANUAL_IMG02}`,
            'MANUAL_IMG03': `${vlfxj2[0].MANUAL_IMG03}`,
            'MANUAL_IMG04': `${vlfxj2[0].MANUAL_IMG04}`,
            'MANUAL_IMG05': `${vlfxj2[0].MANUAL_IMG05}`,
            'MANUAL_IMG06': `${vlfxj2[0].MANUAL_IMG06}`,
            'MANUAL_IMG07': `${vlfxj2[0].MANUAL_IMG07}`,
            'MANUAL_IMG08': `${vlfxj2[0].MANUAL_IMG08}`,
            'MANUAL_IMG09': `${vlfxj2[0].MANUAL_IMG09}`,
            'MANUAL_IMG10': `${vlfxj2[0].MANUAL_IMG10}`,
            'MANUAL_IMG11': `${vlfxj2[0].MANUAL_IMG11}`,
            'MANUAL_IMG12': `${vlfxj2[0].MANUAL_IMG12}`,
            'HASH_TAG': `${vlfxj2[0].HASH_TAG}`,
            'm_thumb': `${vlfxj2[0].m_thumb}`,
            's_thumb': `${vlfxj2[0].s_thumb}`,
            'like': `${vlfxj2[0].like}`,
            'user': `${vlfxj2[0].user}`,
            'open': `${vlfxj2[0].open}`
    
        }
        // console.log(selectData)
        setAbc(selectData)
        
    }

    let dd = (e: any) => {
        
        e.preventDefault()
        // console.log(session.user.email)
        if (elform1.current) {
        
            let formData = new FormData(elform.current);
            // console.log(dataID.length)
            const d= {
                'seq': Date.now(),
                'name': `${formData.get("M_name")}`,
                'm_cate': `${formData.get("kategori")}`,
                's_cata': `${formData.get("whfl")}`,
                'ingredient': `${formData.get("재료")}`,
                'tip': `${formData.get("tip")}`,
                'MANUAL01': `${formData.get("조리1")}`,
                'MANUAL02': `${formData.get("조리2")}`,
                'MANUAL03': `${formData.get("조리3")}`,
                'MANUAL04': '',
                'MANUAL05': '',
                'MANUAL06': '',
                'MANUAL07': '',
                'MANUAL08': '',
                'MANUAL09': '',
                'MANUAL10': '',
                'MANUAL11': '',
                'MANUAL12': '',
                'MANUAL_IMG01': `${formData.get("조리이미지1")}`,
                'MANUAL_IMG02': `${formData.get("조리이미지2")}`,
                'MANUAL_IMG03': `${formData.get("조리이미지3")}`,
                'MANUAL_IMG04': '',
                'MANUAL_IMG05': '',
                'MANUAL_IMG06': '',
                'MANUAL_IMG07': '',
                'MANUAL_IMG08': '',
                'MANUAL_IMG09': '',
                'MANUAL_IMG10': '',
                'MANUAL_IMG11': '',
                'MANUAL_IMG12': '',
                'HASH_TAG': `${formData.get("tag")}`,
                'm_thumb': `${formData.get("M_name")}`,
                's_thumb': `${formData.get("S_name")}`,
                'like': 0,
                'user': `${session.user.email}`,
                'open': `${formData.get("open")}`

            }

            
            dataCrl2('put', d)
            
        }
    }
    
    console.log('abc', abc.name)

    

    return (
        <div>
            <form className='add_form' ref={elform} onSubmit={aa}>
                메뉴이름<input type="text" name='M_name'/><br />
                메인이미지<input type="text" name='M_img'/><br />
                서브이미지<input type="text" name='S_img'/><br />
                메뉴소개<input type="text" name='tip'/><br />
                태그<input type="text" name='tag'/><br />
                <label>카테고리 선택</label>
                <select name="kategori" >
                    <option value="반찬">반찬</option>
                    <option value="국&찌개">국&찌개</option>
                    <option value="후식">후식</option>
                    <option value="일품">일품</option>
                    <option value="밥">밥</option>
                    <option value="기타">기타</option>
                </select><br />
                <label>조리방식 선택</label>
                <select name="whfl">
                    <option value="굽기">굽기</option>
                    <option value="찌기">찌기</option>
                    <option value= "끓이기">끓이기</option>
                    <option value="볶기">볶기</option>
                    <option value="튀기기">튀기기</option>
                    <option value="기타">기타</option>
                </select><br />
                재료<textarea name="재료" id=""></textarea><br/>
                조리순서1<input type="text" name='조리1' /><br />
                조리순서2<input type="text" name='조리2' /><br />
                조리순서3<input type="text" name='조리3' /><br />
                <input type="text" name='조리이미지1' />
                <input type="text" name='조리이미지2' /><br />
                <input type="text" name='조리이미지3' /><br />
                <select name="open">
                    <option value="공개">공개</option>
                    <option value="비공개">비공개</option>
                </select><br />
                <input type="submit" value='추가하기' />
            </form>


            <form className='put_form2' ref={elform1} onSubmit={cc}>
                메뉴이름<input type="text" name='M_name' value={abc.name}  onChange={(e)=>{setAbc(e.target.value)}}/><br />
                메인이미지<input type="text" name='M_img' value={abc.m_cata}  onChange={(e)=>{setAbc(e.target.value)}}/><br />
                서브이미지<input type="text" name='S_img' value={abc.s_cata}  onChange={(e)=>{setAbc(e.target.value)}}/><br />
                메뉴소개<input type="text" name='tip' value={abc.tip}  onChange={(e)=>{setAbc(e.target.value)}}/><br />
                태그<input type="text" name='tag' value={abc.HASH_TAG}  onChange={(e)=>{setAbc(e.target.value)}}/><br />
                <label>카테고리 선택</label>
                <select name="kategori" value={abc.m_cate} onChange={(e)=>{setAbc(e.target.value)}}>
                    <option >반찬</option>
                    <option >국&찌개</option>
                    <option >후식</option>
                    <option >일품</option>
                    <option >밥</option>
                    <option >기타</option>
                </select><br />
                <label>조리방식 선택</label>
                <select name="whfl" value={abc.s_cate} onChange={(e)=>{setAbc(e.target.value)}}>
                    <option >굽기</option>
                    <option >찌기</option>
                    <option >끓이기</option>
                    <option >볶기</option>
                    <option >튀기기</option>
                    <option >기타</option>
                </select><br />
                재료<textarea name="재료" id="" value={abc.ingredient}  onChange={(e)=>{setAbc(e.target.value)}}></textarea><br />
                조리순서1<input type="text" name='조리1' value={abc.MANUAL01}  onChange={(e)=>{setAbc(e.target.value)}}/><br />
                조리순서2<input type="text" name='조리2' value={abc.MANUAL02}  onChange={(e)=>{setAbc(e.target.value)}}/><br />
                조리순서3<input type="text" name='조리3' value={abc.MANUAL03}  onChange={(e)=>{setAbc(e.target.value)}}/><br />
                <input type="text" name='조리이미지1' value={abc.MANUAL_IMG01}  onChange={(e)=>{setAbc(e.target.value)}}/>
                <input type="text" name='조리이미지2' value={abc.MANUAL_IMG02}  onChange={(e)=>{setAbc(e.target.value)}}/><br />
                <input type="text" name='조리이미지3' value={abc.MANUAL_IMG03}  onChange={(e)=>{setAbc(e.target.value)}}/><br />
                <select name="open">
                    <option value="공개">공개</option>
                    <option value="비공개">비공개</option>
                </select><br />
                <input type="submit" value='수정하기' />
            </form>

            <div>
                {
                    dataID.map((obj:any, k:any)=>(
                        <div key={k}>
                            <p>{obj.name}</p>
                            <p>{obj.m_cate}</p>
                            <p>{obj.open}</p>
                            <button onClick={()=>{bb(obj.seq)}}>삭제</button>
                            <button onClick={()=>{cc(obj.seq)}}>수정</button>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default MyrecipeReg;