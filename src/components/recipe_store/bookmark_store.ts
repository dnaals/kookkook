import axios from "axios";
import { create } from "zustand";

const request1 = axios.create({
    baseURL: "http://localhost:3000/",
    timeout: 1000,
});
interface Ty2 {
    data2: any[];
    dataCrl2: (type2: string, id: string, overData: string) => void;
}

export const useStore2 = create<Ty2>((set) => {
    return {
        data2: [],
        dataCrl2: async function (type2, id, overData) {
            // console.log('type =', type2);
            // console.log('id =', id);
            // console.log('overData =', overData);
            let res2: any;
            switch (type2) {
                case "all": res2 = await request1.get("/api/bookmark");
                    break;

                case "insert": res2 = await request1.post("/api/bookmark", overData);
                    break;

                case "delete": res2 = await request1.delete(`/api/bookmark/${id}`);
                    break;
                    
                case "put": res2 = await axios.put(`/api/bookmark/${id}`, overData);
                    break;
            }
            // console.log(res2.data);
            set({ data2: res2.data });
        },
    };
});
