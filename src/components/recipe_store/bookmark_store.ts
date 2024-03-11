import axios from "axios";
import { create } from "zustand";

const request1 = axios.create({
    baseURL: "http://localhost:3000/",
    timeout: 1000,
});
interface Ty2 {
    data2: any[];
    dataCrl2: (type2: string, id2: any, overData2: any) => void;
}

export const useStore2 = create<Ty2>((set) => {
    return {
        data2: [],
        dataCrl2: async function (type2, id2, overData2) {
            console.log('type2 =', type2);
            console.log('id2 =', id2);
            console.log('overData2 =', overData2);
            let res2: any;
            switch (type2) {
                case "all": res2 = await request1.get("/api/bookmark");
                    break;

                case "insert": res2 = await request1.post("/api/bookmark", overData2);
                    break;

                case "delete": res2 = await request1.delete(`/api/bookmark/${id2}`);
                    break;
                    
                case "put": res2 = await axios.put(`/api/bookmark/${id2}`, overData2);
                    break;
            }
            // console.log(res2.data);
            set({ data2: res2.data });
        },
    };
});
