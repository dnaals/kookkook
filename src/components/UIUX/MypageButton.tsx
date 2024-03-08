import React, { useState } from 'react';

function MypageButton({aa, session, dataCrl, dataCrl3 }: any) {
    
    return (
        <div className='mypageButton' style={{ paddingTop: 50 }}>
            <button onClick={() => { dataCrl('나의레시피', `${session.user.email}`, '') }}><img src="/images/my_recipe_black.png" />나의 레시피</button>
            <button onClick={() => { dataCrl3('user', `${session.user.email}`, '') }}><img src="/images/comment_black.png" />내 댓글</button>
            <button onClick={() => { dataCrl('나의레시피', '일품', '') }}><img src="/images/recipe_black.png" />내가 본 레시피</button>

            <button onClick={aa}><img src="/images/register_black.png" />레시피 등록</button>


        </div>
    );
}

export default MypageButton;