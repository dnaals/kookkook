import axios from "axios";
import { create } from "zustand";

const request = axios.create({
    baseURL: 'http://localhost:3000/',
    timeout: 2000
})

interface Ty {
    data: any[];
    dataCrl: (type: string, id: string, overData: string) => void;

}

export const useStore = create<Ty>((set) => {

    return {
        data: [],
        dataCrl: async function (type, id, overData) {
            // console.log('type =', type)
            // console.log('id = ', id)
            // console.log('overData = ', overData)
            let res: any;
            switch (type) {
                case 'all': res = await request.get('/api/all_recipe/')
                    break;

                case '카테고리': res = await request.get(`/api/all_recipe/${id}`)
                    break;

                case '검색': res = await request.get(`/api/all_recipe/${id}`)
                    break;

                case '나의레시피': res = await request.get(`/api/all_recipe/${id}`)
                    break;

                case 'insert': res = await request.post('/api/all_recipe/', overData)
                    break;

                case 'delete': res = await request.delete(`/api/all_recipe/${id}`)
                    break;

                case 'put': res = await axios.put(`/api/all_recipe/${id}`, overData)
                    break;
            }
            // console.log('res = ', res.data)
            set({ data: res.data });


        }

    }
})