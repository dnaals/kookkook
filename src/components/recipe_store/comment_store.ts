import axios from "axios";
import { create } from "zustand";

const request = axios.create({
    baseURL: 'http://localhost:3000/',
    timeout: 2000
})

interface Ty {
    data4: any[];
    dataCrl4: (type4: string, id4: string, overData4: string) => void;

}

export const useStore4 = create<Ty>((set) => {

    return {
        data4: [],
        dataCrl4: async function (type4, id4, overData4) {
            // console.log('type3 =', type3)
            // console.log('id3 = ', id3)
            // console.log('overData3 = ', overData3)
            let res: any;
            switch (type4) {
                case 'all': res = await request.get('/api/comment/')
                    break;
                
                case 'user': res = await request.get(`/api/comment/${id4}`)
                    break;    

                case 'insert': res = await request.post('/api/comment/', overData4)
                    break;

                case 'delete': res = await request.delete(`/api/comment/${id4}`)
                    break;

                case 'put': res = await axios.put(`/api/comment/${id4}`, overData4)
                    break;
            }
            // console.log('res = ', res.data)
            set({ data4: res.data });


        }

    }
})