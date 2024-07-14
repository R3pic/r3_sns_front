import { api } from ".";
import { User } from "../model/user";

const login = async (username: string, password: string): Promise<User | null> => {
    try {
        const response = await api.post('api/auth/login/', {
            username,
            password,
        });
    
        if (response.status !== 200) {
            console.error('로그인 실패');
            return null;
        }
    
        console.log('로그인 성공');
        return response.data;
    } catch (error) {
        console.error('로그인 실패');
        return null;
    }
}

const logout = async () => {
    const response = await api.post('api/auth/logout/');

    if (response.status !== 200) {
        console.error('로그아웃 실패');
        return false;
    }

    console.log('로그아웃 성공');
    return true;
}

export const AuthApi = {
    login,
    logout,
}