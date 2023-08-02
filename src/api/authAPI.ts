import axios from "axios";


const instance = axios.create(
    {
        baseURL: `https://social-network.samuraijs.com/api/1.0/`,
        withCredentials: true,
        headers: {
            'API-KEY': 'fdd7cd24-8780-4756-9232-62360a2ef97a'
        }


    }
)



export const authAPI = {

    getProfile()  {
        return instance.get(`auth/me`, {withCredentials: true})


    },




}


