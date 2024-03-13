'use client';
import React, { useEffect, useRef, useState } from 'react';
import { storage } from "@/lib/firebaseInit";
import { ref, uploadBytes, getDownloadURL, listAll, deleteObject } from "firebase/storage";
import '../style/MyrecipeReg.scss'

function MyrecipeReg({ data, dataCrl, session}: any) {

    // console.log(myRecipe)

    const elform = useRef<HTMLFormElement | null>(null)
    const elform1 = useRef<HTMLFormElement | null>(null)
    const elform2 = useRef<HTMLFormElement | null>(null)
    const eldelrecipe = useRef<string | null>(null)
    const eldelcomment = useRef<string | null>(null)



    //수정 레시피
    const [putdata, setPutdata]: any = useState([])
    const [putseq, setPutseq]: any = useState()
    const [correctionPop, setCorrectionPop]: any = useState(false)
    const [preImg, setPreImage]: any = useState([])
    
    

    //삭제 레시피, 댓글
    const [delRePop, setDelRePop]: any = useState(false);
    const [delComPop, setDelComPop]: any = useState(false);

    let myRecipe = data.filter((obj:any) => obj?.user == session.user.email)
// console.log(data)
    // const file1 = (e) => {
    //     // 미리보기
    //     const fileReader = new FileReader();
    //     fileReader.readAsDataURL(e.target.files[0]);
    //     fileReader.onload = (e) => {
    //       setPreImage(e.target.result);
    //     }

    //     let t = new Date(e.target.files[0].lastModified)
    //     t.setSeconds(t.getSeconds() + 10)

    //     setTest(e.target.files[0])



    //     const megaApiUrl = ' '; // yourApiId를 발급받은 API 키로 대체
    //     const headers = {
    //       'Content-Type': 'application/json',
    //     };

    //     // 이미지를 MEGA에 업로드
    //     fetch(megaApiUrl, {
    //       method:'post',
    //       headers:{
    //         'Content-Type': 'application/json',
    //       },
    //       body:e.target.files[0]
    //     })
    //     .then(res=>res.text())
    //     .then(res=>{
    //     //   console.log(res)
    //     });




    //     //서버에 이\\322-t\프론트엔드\react\r-pwa\src\Camera.js미지 저장
    //     const formData = new FormData();
    //     formData.append('image', e.target.files[0]);

    //     /* fetch(basicUrl+'/camera/save',{
    //       method:'post',
    //       body:formData
    //     })
    //     .then(res=>res.json())
    //     .then(res=>{
    //       setData([...data,res.fileUrl])
    //     }) */
    //   }

    //firebase
    // const [imgs, setImgs] = useState<any>([]);
    const firebase = {

        upload: async (file: any, idx: any, id: any) => {
            // console.log(idx)
            if (idx < 10) {
                idx = '0' + idx;
            }
            // console.log(idx)
            const fileName = `${idx}_${file.name}`;
            const storageRef = ref(storage, `/${session.user.email}/${id}/` + fileName);
            await uploadBytes(storageRef, file).then((snapshot) => {
                // console.log(snapshot);
            });

        },
        getImages: async (id: any) => {
            const res = await listAll(ref(storage, `/${session.user.email}/${id}`));

            let imgUrl = [];
            for (let i = 0; i < res.items.length; i++) {
                let a = await getDownloadURL(res.items[i]);
                imgUrl.push({ url: a, name: res.items[i].fullPath })
            }
            return imgUrl;
        },
        delImage: (id: any, urls: any) => {

            urls.forEach((url: any) => {
                if (url) {
                    const start = url.lastIndexOf('%2F') + 3; //url 뒤 부터 %2f부분의 인덱스값 
                    const end = url.lastIndexOf('?');
                    const str = url.substring(start, end);
                    // console.log(str)
                    deleteObject(ref(storage, `/${session.user.email}/${id}/${str}`))
                }
            })
            // const url = 'https://firebasestorage.googleapis.com/v0/b/kookkook-99003.appspot.com/o/jsg8733%40gmail.com%2F1709775110201%2Ftest_img1.jpg?alt=media&token=101ccc9a-e67b-45fc-b4ea-a8993bc22527'

        }
    }

    // 미리보기
    const viewfile = (e: any,idx:any) => {

            const fileReader = new FileReader();
            fileReader.readAsDataURL(e.target.files[0]);

            fileReader.onload = (e:any) => {
                let a = [...preImg];
                a[idx] =  e.target.result;
                setPreImage(a);
            }
    }


    //레시피 추가
    let addRecipe = async (e: any) => {


        e.preventDefault()
        // console.log(session.user.email)


        // return;

        if (elform.current) {

            let formData = new FormData(elform.current);
            // console.log(dataID.length)
            const files: any = formData.getAll('M_img');

            let id = Date.now()
            let fileName: any = []
            for (let idx in files) {
                if (files[idx]?.name) {
                    // console.log('file = ', files[idx].name)
                    await firebase.upload(files[idx], idx, id);
                }
            };
            const newimgUrl = await firebase.getImages(id)

            const fileTemplate = [
                'm_thumb', 's_thumb', 'MANUAL_IMG01', 'MANUAL_IMG02', 'MANUAL_IMG03', 'MANUAL_IMG04', 'MANUAL_IMG05', 'MANUAL_IMG06', 'MANUAL_IMG07', 'MANUAL_IMG08', 'MANUAL_IMG09', 'MANUAL_IMG10', 'MANUAL_IMG11', 'MANUAL_IMG12'
            ]

            const inputImage: any = Array(14);

            fileTemplate.forEach((obj, k) => {
                const str = newimgUrl[k]?.url.split('?')[0];
                const start = str?.lastIndexOf('%2F') + 3;
                const imgName = str?.substring(start);
                const end = imgName?.indexOf('_');
                const num = Number(imgName?.substring(0, end));

                if (num || num == 0) {
                    inputImage[num] = { [fileTemplate[num]]: newimgUrl[k]?.url };
                }

            })
            // console.log(inputImage)



            const a = {
                'seq': `${id}`,
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
                'MANUAL_IMG01': `${String(inputImage[2]?.MANUAL_IMG01)}`,
                'MANUAL_IMG02': `${String(inputImage[3]?.MANUAL_IMG02)}`,
                'MANUAL_IMG03': `${String(inputImage[4]?.MANUAL_IMG03)}`,
                'MANUAL_IMG04': `${String(inputImage[5]?.MANUAL_IMG04)}`,
                'MANUAL_IMG05': `${String(inputImage[6]?.MANUAL_IMG05)}`,
                'MANUAL_IMG06': `${String(inputImage[7]?.MANUAL_IMG06)}`,
                'MANUAL_IMG07': `${String(inputImage[8]?.MANUAL_IMG07)}`,
                'MANUAL_IMG08': `${String(inputImage[9]?.MANUAL_IMG08)}`,
                'MANUAL_IMG09': `${String(inputImage[10]?.MANUAL_IMG09)}`,
                'MANUAL_IMG10': `${String(inputImage[11]?.MANUAL_IMG10)}`,
                'MANUAL_IMG11': `${String(inputImage[12]?.MANUAL_IMG11)}`,
                'MANUAL_IMG12': `${String(inputImage[13]?.MANUAL_IMG12)}`,
                'HASH_TAG': `${formData.get("tag")}`,
                'm_thumb': `${String(inputImage[0]?.m_thumb)}`,
                's_thumb': `${String(inputImage[1]?.s_thumb)}`,
                'like': 0,
                'user': `${session.user.email}`,
                'open': `${formData.get("open")}`

            }


            dataCrl('insert', '', a)



        }
    }

    //댓글 추가
    let addComment = (e: any) => {
        e.preventDefault()
        if (elform2.current) {

            let formData = new FormData(elform2.current)

            const c = {
                'id': `${Date.now()}`,
                'seq': '300', //상세페이지 들어온 데이터값의 seq 
                'comment': `${formData.get("comment")}`,
                'user_email': `${session.user.email}`,
                'user_name': `${session.user.name}`,
                'like': 4
            }
            // dataCrl4('insert', '', c)
        }
    }

    //삭제 버튼
    let delRecipe = () => {

        // console.log('e = ', e)
        let vlfxj = myRecipe.filter((obj: any) => eldelrecipe.current == obj.seq)
        let selectRecipe = vlfxj[0].seq

        console.log('s_thub = ', vlfxj[0].s_thumb)
        let aaaaa = []
        if (vlfxj[0].m_thumb !== "undefined") {
            aaaaa.push(vlfxj[0].m_thumb)
        }
        if (vlfxj[0].s_thumb !== "undefined") {
            aaaaa.push(vlfxj[0].s_thumb)
        }

        for (let i = 1; i < 4; i++) {
            if (vlfxj[0]['MANUAL_IMG0' + i] !== "undefined") {
                let aa = vlfxj[0]['MANUAL_IMG0' + i];
                aaaaa.push(aa)
            }
        }

        console.log(aaaaa)



        firebase.delImage(selectRecipe, aaaaa)
        // return;
        dataCrl('delete', selectRecipe, '')

        setDelRePop(false)

    }

    //레시피 삭제 취소 버튼
    let notdelRecipe = () => {
        setDelRePop(false)
    }

    // 댓글 삭제 버튼
    let delComment = () => {
        console.log('eldelcomment.current = ', eldelcomment.current)
        // let vlfxj = data4.filter((obj: any) => eldelcomment.current == obj.id)
        // console.log('선택된 댓글', vlfxj[0].id)
        // let selectRecipe = vlfxj[0].id
        // if ()
        // dataCrl4('delete', selectRecipe, '')
        setDelComPop(false)
    }

    //댓글 삭제 취소 버튼
    let notdelComment = () => {
        setDelComPop(false)
    }

    //레시피 수정 버튼 클릭시 나오는 팝업
    let putRePopup = async (e: any) => {
        let vlfxj2 = myRecipe.filter((obj: any) => e == obj.seq)
        // console.log(vlfxj2[0].seq)
        let selectRecipenum = vlfxj2[0].seq
        // console.log(vlfxj2[0])

        let imgs2 = await firebase.getImages(selectRecipenum)

        const fileTemplate2 = [
            'm_thumb', 's_thumb', 'MANUAL_IMG01', 'MANUAL_IMG02', 'MANUAL_IMG03', 'MANUAL_IMG04', 'MANUAL_IMG05', 'MANUAL_IMG06', 'MANUAL_IMG07', 'MANUAL_IMG08', 'MANUAL_IMG09', 'MANUAL_IMG10', 'MANUAL_IMG11', 'MANUAL_IMG12'
        ]

        const inputImage2: any = Array(14);

        fileTemplate2.forEach((obj, k) => {
            const str2 = imgs2[k]?.url.split('?')[0];
            const start2 = str2?.lastIndexOf('%2F') + 3;
            const imgName2 = str2?.substring(start2);
            const end2 = imgName2?.indexOf('_');
            const num2 = Number(imgName2?.substring(0, end2));
            console.log('url = ', num2)

            if (num2 || num2 == 0) {
                inputImage2[num2] = { [fileTemplate2[num2]]: imgs2[k]?.url };
            }

        })

        console.log(inputImage2)
        // return;
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
            'MANUAL_IMG01': `${String(inputImage2[2]?.MANUAL_IMG01)}`,
            'MANUAL_IMG02': `${String(inputImage2[3]?.MANUAL_IMG02)}`,
            'MANUAL_IMG03': `${String(inputImage2[4]?.MANUAL_IMG03)}`,
            'MANUAL_IMG04': `${String(inputImage2[5]?.MANUAL_IMG04)}`,
            'MANUAL_IMG05': `${String(inputImage2[6]?.MANUAL_IMG05)}`,
            'MANUAL_IMG06': `${String(inputImage2[7]?.MANUAL_IMG06)}`,
            'MANUAL_IMG07': `${String(inputImage2[8]?.MANUAL_IMG07)}`,
            'MANUAL_IMG08': `${String(inputImage2[9]?.MANUAL_IMG08)}`,
            'MANUAL_IMG09': `${String(inputImage2[10]?.MANUAL_IMG9)}`,
            'MANUAL_IMG10': `${String(inputImage2[11]?.MANUAL_IMG10)}`,
            'MANUAL_IMG11': `${String(inputImage2[12]?.MANUAL_IMG11)}`,
            'MANUAL_IMG12': `${String(inputImage2[13]?.MANUAL_IMG12)}`,
            'HASH_TAG': `${vlfxj2[0].HASH_TAG}`,
            'm_thumb': `${String(inputImage2[0]?.m_thumb)}`,
            's_thumb': `${String(inputImage2[1]?.s_thumb)}`,
            'like': `${vlfxj2[0].like}`,
            'user': `${vlfxj2[0].user}`,
            'open': `${vlfxj2[0].open}`

        }
        // console.log('수정 = ', selectRecipenum)
        setPutdata(selectData)
        setPutseq(selectRecipenum)
        setCorrectionPop(true)

    }

    //수정하기 누를시 수정된 데이터 저장
    let putRecipe = (e: any) => {

        e.preventDefault()
        // console.log(session.user.email)
        if (elform1.current) {

            let formData = new FormData(elform1.current);
            // console.log(dataID.length)
            const d = {
                'seq': `${putseq}`,
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
                // 'MANUAL_IMG01': `${String(inputImage2[2]?.MANUAL_IMG01)}`,
                // 'MANUAL_IMG02': `${String(inputImage2[3]?.MANUAL_IMG02)}`,
                // 'MANUAL_IMG03': `${String(inputImage2[4]?.MANUAL_IMG03)}`,
                // 'MANUAL_IMG04': `${String(inputImage2[5]?.MANUAL_IMG04)}`,
                // 'MANUAL_IMG05': `${String(inputImage2[6]?.MANUAL_IMG05)}`,
                // 'MANUAL_IMG06': `${String(inputImage2[7]?.MANUAL_IMG06)}`,
                // 'MANUAL_IMG07': `${String(inputImage2[8]?.MANUAL_IMG07)}`,
                // 'MANUAL_IMG08': `${String(inputImage2[9]?.MANUAL_IMG08)}`,
                // 'MANUAL_IMG09': `${String(inputImage2[10]?.MANUAL_IMG9)}`,
                // 'MANUAL_IMG10': `${String(inputImage2[11]?.MANUAL_IMG10)}`,
                // 'MANUAL_IMG11': `${String(inputImage2[12]?.MANUAL_IMG11)}`,
                // 'MANUAL_IMG12': `${String(inputImage2[13]?.MANUAL_IMG12)}`,
                'HASH_TAG': `${formData.get("tag")}`,
                // 'm_thumb': `${String(inputImage2[0]?.m_thumb)}`,
                // 's_thumb': `${String(inputImage2[1]?.s_thumb)}`,
                'like': 0,
                'user': `${session.user.email}`,
                'open': `${formData.get("open")}`

            }

            setCorrectionPop(false)
            dataCrl('put', putseq, d)

        }
    }

    // useEffect(()=>{
    //     firebase.getImages( 1709772535810) //맞는 아이디 맞춰 업로드
    // },[])
    // console.log('imgs = ',imgs)

    if (!myRecipe) return <>sadsadsa...</>

    return (
        <div className='myrecipeList' style={{ paddingTop: 50 }}>



            {/* 추가하기 폼 */}
            <form className={'add_form'} encType='multipart/form-data' ref={elform} onSubmit={addRecipe}>
                메뉴이름<input type="text" name='M_name' /><br />
                <img src={preImg[0]} width={50} height={50} alt="이미지를 등록" />
                메인이미지<input type="file" name='M_img' onChange={(e)=>{viewfile(e,0)}} /><br />
                <img src={preImg[1]} width={50} height={50} alt="이미지를 등록" />
                서브이미지<input type="file" name='M_img' onChange={(e)=>{viewfile(e,1)}} /><br />
                메뉴소개<input type="text" name='tip' /><br />
                태그<input type="text" name='tag' /><br />
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
                    <option value="끓이기">끓이기</option>
                    <option value="볶기">볶기</option>
                    <option value="튀기기">튀기기</option>
                    <option value="기타">기타</option>
                </select><br />
                재료<textarea name="재료" id=""></textarea><br />
                조리순서1<input type="text" name='조리1' /><br />
                조리순서2<input type="text" name='조리2' /><br />
                조리순서3<input type="text" name='조리3' /><br />
                <img src={preImg[2]} width={50} height={50} alt="이미지를 등록" />
                <input type="file" name='M_img' onChange={(e)=>{viewfile(e,2)}} />
                <img src={preImg[3]} width={50} height={50} alt="이미지를 등록" />
                <input type="file" name='M_img' onChange={(e)=>{viewfile(e,3)}} /><br />
                <img src={preImg[4]} width={50} height={50} alt="이미지를 등록" />
                <input type="file" name='M_img' onChange={(e)=>{viewfile(e,4)}} /><br />
                <select name="open">
                    <option value="공개">공개</option>
                    <option value="비공개">비공개</option>
                </select><br />
                <input type="submit" value='추가하기' />
            </form>

            {/* 수정하기 폼 */}
            <form className={`put_form ${correctionPop ? 'active' : ''}`} ref={elform1} onSubmit={putRecipe}>
                메뉴이름<input type="text" name='M_name' value={putdata.name} onChange={(e) => { setPutdata(e.target.value) }} /> <button>X</button><br />
                메인이미지<input type="file" name='M_img' /><br />
                서브이미지<input type="file" name='M_img' /><br />
                메뉴소개<input type="text" name='tip' value={putdata.tip} onChange={(e) => { setPutdata(e.target.value) }} /><br />
                태그<input type="text" name='tag' value={putdata.HASH_TAG} onChange={(e) => { setPutdata(e.target.value) }} /><br />
                <label>카테고리 선택</label>
                <select name="kategori" value={putdata.m_cate} onChange={(e) => { setPutdata(e.target.value) }}>
                    <option >반찬</option>
                    <option >국&찌개</option>
                    <option >후식</option>
                    <option >일품</option>
                    <option >밥</option>
                    <option >기타</option>
                </select><br />
                <label>조리방식 선택</label>
                <select name="whfl" value={putdata.s_cate} onChange={(e) => { setPutdata(e.target.value) }}>
                    <option >굽기</option>
                    <option >찌기</option>
                    <option >끓이기</option>
                    <option >볶기</option>
                    <option >튀기기</option>
                    <option >기타</option>
                </select><br />
                재료<textarea name="재료" id="" value={putdata.ingredient} onChange={(e) => { setPutdata(e.target.value) }}></textarea><br />
                조리순서1<input type="text" name='조리1' value={putdata.MANUAL01} onChange={(e) => { setPutdata(e.target.value) }} /><br />
                조리순서2<input type="text" name='조리2' value={putdata.MANUAL02} onChange={(e) => { setPutdata(e.target.value) }} /><br />
                조리순서3<input type="text" name='조리3' value={putdata.MANUAL03} onChange={(e) => { setPutdata(e.target.value) }} /><br />
                <input type="file" name='M_img' /><br />
                <input type="file" name='M_img' /><br />
                <input type="file" name='M_img' /><br />

                <select name="open">
                    <option value="공개">공개</option>
                    <option value="비공개">비공개</option>
                </select><br />
                <input type="submit" value='수정하기' />
            </form>

            {/* 레시피삭제 팝업창 */}
            <div className={`delete_pop ${delRePop ? 'active' : ''}`}>
                <p>선택한 레시피를 삭제할까요?</p><br />
                <button onClick={delRecipe}>삭제</button>
                <button onClick={notdelRecipe}>취소</button>
            </div>

            {/* 댓글삭제 팝업창 */}
            <div className={`delete_pop2 ${delComPop ? 'active' : ''}`}>
                <p>작성한 댓글를 삭제할까요?</p><br />
                <button onClick={delComment}>삭제</button>
                <button onClick={notdelComment}>취소</button>

            </div>

            {/* 나의 레시피 데이터 출력 */}
            <div>
                {
                    myRecipe.map((obj: any, k: any) => (
                        <div key={k}>
                            <p>{obj.name}</p>
                            <p>{obj.m_cate}</p>
                            <p>{obj.open}</p>
                            <button onClick={() => { setDelRePop(true); eldelrecipe.current = obj.seq; }}>삭제</button>
                            <button onClick={() => { putRePopup(obj.seq) }}>수정</button>
                        </div>
                    ))
                }

                {/* 댓글 입력창 폼 */}
                {/* <form className='add_comment' ref={elform2} onSubmit={addComment}>
                    댓글<input type="text" name='comment' /><br />
                    <input type="submit" value='추가하기' />
                </form> */}
            </div>


            {/* 댓글 데이터 출력 */}
            {/* <div style={{ paddingTop: 50 }}>
                {
                    data4.map((obj: any, k: any) => (
                        <div key={k}>
                            <p>{obj.user_name}</p>
                            <p>{obj.user_email}</p>
                            <p>{obj.comment}</p>

                            <button onClick={() => { setDelComPop(true); eldelcomment.current = obj.id; }}>삭제</button>

                        </div>
                    ))
                }
            </div> */}

        </div>
    );
}

export default MyrecipeReg;