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



export const usersAPI = {

   getUsers(currentPage: number, pageSize: number)  {
        return  instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then (response => response.data)
    },
    deleteUser(id: number){
        return  instance.delete(`follow/${id}`)

    },
    setUser(id: number){
        return  instance.post(`follow/${id}`, {})


    }



}


