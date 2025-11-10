import axios from 'axios'

export const api = axios.create(
    {
        baseURL: import.meta.env.VITE_PUBLIC_API_URL ?? 'http://localhost:3000',
        withCredentials: true,



    }
)


 api.interceptors.response.use(
        response => response,
        error => {
            const msg = error?.response?.data?.message

            if (Array.isArray(msg)) {
                error.response.data.message = msg.join(', ')
            }

            return Promise.reject(error)
        }
    )

