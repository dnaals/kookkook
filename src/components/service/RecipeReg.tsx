//레시피 등록

import React from 'react';
import { storage } from "@/lib/firebaseInit";
import { ref, uploadBytes, getDownloadURL, listAll, deleteObject } from "firebase/storage";

import "@/components/style/recipe_reg.scss";
import { useSession } from 'next-auth/react';

function RecipeReg() {

    const { data: session, status }: any = useSession();

    //firebase
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
    return (
        <div className='reg'>
            {/* 추가하기 폼 */}
            <form>
                <article>
                    <h3>메뉴 이름</h3>
                    <input type="text" name='M_name' placeholder='예)소고기 미역국' />
                </article>

                <article >
                    <h3>메인 이미지</h3>
                    <div className='m_img'>
                        <img src="/images/add_photo.png" />
                        <p>메뉴 대표 사진을 등록해 주세요.</p>
                        <label htmlFor="file">
                            <div className="btn-upload">파일 선택</div>
                        </label>
                        <input type="file" name='M_img' id="file" />
                    </div>
                </article>

                <article>
                    <h3>메뉴 소개</h3>
                    <input type="text" name='tip' placeholder='메뉴를 간단하게 소개해주세요.' />
                </article>

                <article className='ketegori'>
                    <h3>종류 선택</h3>
                    <ul>
                        <li>
                            <label>카테고리</label>
                            <select name="kategori" >
                                <option value="반찬">반찬</option>
                                <option value="국&찌개">국&찌개</option>
                                <option value="후식">후식</option>
                                <option value="일품">일품</option>
                                <option value="밥">밥</option>
                                <option value="기타">기타</option>
                            </select>
                        </li>

                        <li>
                            <label>조리방식</label>
                            <select name="whfl">
                                <option value="굽기">굽기</option>
                                <option value="찌기">찌기</option>
                                <option value="끓이기">끓이기</option>
                                <option value="볶기">볶기</option>
                                <option value="튀기기">튀기기</option>
                                <option value="기타">기타</option>
                            </select>
                        </li>
                    </ul>



                </article>

                <article>
                    <h3>재료</h3>
                    <textarea name="재료" id="" placeholder='예) 불린미역 3컵, 소고기 200g , 소금 약간, 멸치액젓 2스푼, 간장 4스푼, 다진마늘 1스푼, 청주 1스푼'></textarea><br />
                </article>

                <article>
                    <h3>조리 순서</h3>
                    <ol>
                        <li className='cooking'>
                            1. <input type="text" name='조리1' placeholder='예) 소고기는 기름기를 떼어내고 적당한 크기로 잘라주세요.' />
                            <div className='cooking_img'>
                                <img src="/images/add_photo.png" />
                                <label htmlFor="file">
                                    <div className="btn-upload">파일 선택</div>
                                </label>
                                <input type="file" name='M_img' id="file" />
                            </div>

                        </li>
                        <li className='cooking'>
                            2. <input type="text" name='조리2' placeholder='예) 준비된 양념으로 먼저 고기를 조물조물 재워 둡니다.' />
                            <div className='cooking_img'>
                                <img src="/images/add_photo.png" />
                                <label htmlFor="file">
                                    <div className="btn-upload">파일 선택</div>
                                </label>
                                <input type="file" name='M_img' id="file" />
                            </div>
                        </li>
                        <li className='cooking'>
                            3. <input type="text" name='조리3' placeholder='예) 그 사이 양파와 버섯, 대파도 썰어서 준비하세요.' />
                            <div className='cooking_img'>
                                <img src="/images/add_photo.png" />
                                <label htmlFor="file">
                                    <div className="btn-upload">파일 선택</div>
                                </label>
                                <input type="file" name='M_img' id="file" />
                            </div>
                        </li>
                    </ol>

                    <div className='add_btn'>
                        <button>+추가</button>
                    </div>
                </article>


                <article>
                    <h3>완성 사진</h3>
                    <ul className='complete_img'>
                        <li >
                            <img src="/images/add_photo.png" />
                            <label htmlFor="file">
                                <div className="btn-upload">파일 선택</div>
                            </label>
                            <input type="file" name='M_img' id="file" />
                        </li>
                        <li>
                            <img src="/images/add_photo.png" />
                            <label htmlFor="file">
                                <div className="btn-upload">파일 선택</div>
                            </label>
                            <input type="file" name='M_img' id="file" />
                        </li>
                        <li>
                            <img src="/images/add_photo.png" />
                            <label htmlFor="file">
                                <div className="btn-upload">파일 선택</div>
                            </label>
                            <input type="file" name='M_img' id="file" />
                        </li>
                        <li>
                            <img src="/images/add_photo.png" />
                            <label htmlFor="file">
                                <div className="btn-upload">파일 선택</div>
                            </label>
                            <input type="file" name='M_img' id="file" />
                        </li>
                    </ul>

                </article>

                <article>
                    <h3>태그</h3>
                    <input type="text" name='tag' /><br />
                </article>


                <article className='open_btn'>
                    <select name="open">
                        <option value="공개">공개</option>
                        <option value="비공개">비공개</option>
                    </select>
                    <input type="submit" value='등록하기' />
                    {/* <input type="submit" value='수정하기' /> */}
                </article>
            </form>

            {/* 레시피삭제 팝업창
            <div className='delete_pop'>
                <p>선택한 레시피를 삭제할까요?</p><br />
                <button>삭제</button>
                <button>취소</button>
            </div>
            <br />
            댓글삭제 팝업창
            <div className='delete_pop2'>
                <p>작성한 댓글을 삭제할까요?</p><br />
                <button>삭제</button>
                <button>취소</button>
            </div> */}
        </div>

    );
}

export default RecipeReg;