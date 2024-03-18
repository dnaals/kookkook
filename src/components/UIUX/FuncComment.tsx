import React from 'react';

function FuncComment({obj, commetnum}:any) {
    let oneComment = commetnum.filter((comment:any)=>comment.seq == obj.seq)

    return (
        <>
            <img src="/images/pencil.png" alt="" />
            <p>{oneComment.length}</p>
        </>
    );
}

export default FuncComment;