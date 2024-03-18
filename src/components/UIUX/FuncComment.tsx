import React from 'react';

function FuncComment({obj, commetnum}:any) {
    let oneComment = commetnum.filter((comment:any)=>comment.seq == obj.seq)

    return (
        <>
            {oneComment.length}
        </>
    );
}

export default FuncComment;