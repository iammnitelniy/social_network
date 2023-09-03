import axios, {AxiosResponse} from "axios";


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
        return instance.get(`auth/me`, )


    },
    login(email: string, password: string, rememberMe: boolean)  {
        return instance.post<ResponseType<{ userId: number }>, AxiosResponse<ResponseType<{ userId: number}>>, { email: string, password: string, rememberMe: boolean }>(`auth/login`, {email, password, rememberMe})


    },
    logout()  {
        return instance.delete<ResponseType>(`auth/login`)

    },


}

type ResponseType<D = {}> = {
    resultCode: number,
    messages: string[],
    data: D
}


