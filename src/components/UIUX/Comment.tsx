import React from 'react';
import "@/components/style/comment.scss";

function Comment({ data4, dataCrl4 }: any) {
    return (
        <>
            {data4.map((obj: any, k:any) => (

                <div key={k} className='comment_box'>
                    <div className='comment'>
                        <p>{obj.comment}
                        </p>
                    </div>
                    <figure>
                        <img></img>
                        <figcaption>{obj.user_name}</figcaption>
                    </figure>

                </div>
            ))
            }
        </>
    );
}

export default Comment;