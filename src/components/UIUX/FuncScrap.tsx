//스크랩버튼 기능

import React, { useState } from 'react';
import "@/components/style/scrap.scss";
import { useSession } from 'next-auth/react';
import { useStore2 } from '../recipe_store/bookmark_store';

function FuncScrap({ dataID, obj }: any) {

    const { data2, dataCrl2 } = useStore2()

    const { data: session, status }: any = useSession();
    let [b_click, setB_click] = useState(false);
    const bookmarkClick = (aa: any) => {

        let id = Date.now()
        let bookmarkOne = dataID.filter((obj: any) => aa == obj.name)

        if (!b_click) {

            const bookmarkData = {
                "id": id,
                "seq": `${bookmarkOne[0].seq}`,
                "name": `${bookmarkOne[0].name}`,
                "user_name": `${session.user.name}`,
                "user_email": `${session.user.email}`,
                "m_thumb": `${bookmarkOne[0].m_thumb}`,
                "tip": `${bookmarkOne[0].tip}`,
                "like": `${bookmarkOne[0].like}`
            }

            dataCrl2('insert', '', bookmarkData)
        }else {
            dataCrl2('delete', id, '')
        }
        console.log('b_click = ',b_click)

        setB_click(!b_click)

    }

    // let bbbb = dataID.filter((obj:any)=>)

    return (

        <div className="scrap">
            <button onClick={() => { bookmarkClick(obj) }}>
                <img src={b_click ? "/images/bookmark_after.png" : "/images/bookmark_before.png"} alt='asd' />
            </button>
        </div>
    );
}

export default FuncScrap;