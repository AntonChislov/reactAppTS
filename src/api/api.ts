import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': 'f8f8cff5-7656-4e29-a8a4-d01bd04734d8'
    }
})

export const userAPI = {
    getUser(userId: string) {
        return instance.get(`profile/${userId}`)
    },
    follow(id: number) {
        return instance.post(`follow/${id}`)
    },
    unFollow(id: number) {
        return instance.delete(`follow/${id}`)
    }
}

export const authAPI = {
    authMe() {
        return instance.get('auth/me')
    }
}
