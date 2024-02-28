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
        status1: false,
        dataCrl2: async function (type2, id, overData) {
            console.log(id, "asd");
            let res2: any;
            switch (type2) {
                case "all":
                    res2 = await request1.get("/api/my_recipe");
                    break;

                case "insert":
                    res2 = await request1.post("/api/my_recipe", overData);
                    break;

                case "delete":
                    res2 = await request1.delete(`/api/my_recipe/${id}`);
                    break;
                case "put":
                    res2 = await axios.put(`/api/my_recipe/${id}`, overData);
                    break;
            }
            console.log(res2.data);
            set({ data2: res2.data });
        },
    };
});
