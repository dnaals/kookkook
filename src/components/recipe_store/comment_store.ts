import axios from "axios";
import { create } from "zustand";

const request = axios.create({
    baseURL: 'http://localhost:3000/',
    timeout: 2000
})

interface Ty {
    data3: any[];
    dataCrl3: (type3: string, id3: string, overData3: string) => void;

}

export const useStore3 = create<Ty>((set) => {

    return {
        data3: [],
        dataCrl3: async function (type3, id3, overData3) {
            // console.log('type3 =', type3)
            // console.log('id3 = ', id3)
            // console.log('overData3 = ', overData3)
            let res: any;
            switch (type3) {
                case 'all': res = await request.get('/api/comment/')
                    break;
                
                case 'user': res = await request.get(`/api/comment/${id3}`)
                    break;    

                case 'insert': res = await request.post('/api/comment/', overData3)
                    break;

                case 'delete': res = await request.delete(`/api/comment/${id3}`)
                    break;

                case 'put': res = await axios.put(`/api/comment/${id3}`, overData3)
                    break;
            }
            // console.log('res = ', res.data)
            set({ data3: res.data });


        }

    }
})