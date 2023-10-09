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



export const profileAPI = {

    getProfile(userId: string)  {
        return   instance.get(`profile/${userId}`)

    },
    getStatus(userId: string)  {
        return   instance.get(`profile/status/${userId}`)

    },
    updateStatus(status: string)  {
        return   instance.put('profile/status', {status})

    },
    savePhoto(file: any) {
            const formData = new FormData()
            formData.append('avatar', file)
         return instance.put('profile/photo', formData, {headers: {
                 'Content-Type': 'multipart/form-data'
             }})
    }




}


