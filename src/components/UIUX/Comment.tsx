import React from 'react';
import "@/components/style/comment.scss";

function Comment() {
    return (
        <div className='comment_box'>
            <div className='comment'>
                <p>레시피 참고해서 따라 만들었더니 쉽고 맛있어요!!!
                    레시피 참고해서 따라 만들었더니 쉽고 맛있어요!!!
                    레시피 참고해서 따라 만들었더니 쉽고 맛있어요!!!
                    레시피 참고해서 따라 만들었더니 쉽고 맛있어요!!!
                    레시피 참고해서 따라 만들었더니 쉽고 맛있어요!!!
                </p>
            </div>
            <figure>
                <img></img>
                <figcaption>새우 두부 계란 찜</figcaption>
            </figure>

        </div>
    );
}

export default Comment;