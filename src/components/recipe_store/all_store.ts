import axios from "axios";
import { create } from "zustand";

const request = axios.create({
    baseURL: 'http://localhost:3000/',
    timeout: 1000
})

interface Ty {
    data: any[];
    dataCrl: (type: string, aaa: string) => void;
}

export const useStore = create<Ty>((set) => {

    return {
        data: [],
        data2: [],
        dataCrl: async function (type: string, Kategorie?: string) {
            console.log(Kategorie)
            let res: any;
            switch (type) {
                case 'all': res = await request.get('/api/all_recipe/')
                    break;

                case '카테고리': res = await request.get(`/api/all_recipe/${Kategorie}`)
                    break;

                // case '국&찌개': res = await request.get('/api/국&찌개')
                //   break;  

                case 'insert': res = await request.post('/api/all_recipe/', {})
                    break;

                case 'delete': res = await request.delete('/api/all_recipe/1')
                    break;

                // case 'put': res = await axios.put('/kook/id', { id: '2', title: '5프로젝트' })
                //   break;
            }
            console.log(res.data)
            set({ data: res.data });


        }

    }
})