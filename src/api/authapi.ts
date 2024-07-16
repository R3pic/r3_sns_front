import { api } from ".";
import { User } from "../model/user";

const login = async (username: string, password: string): Promise<User | null> => {
    try {
        const response = await api.post('api/auth/login/', {
            username,
            password,
        });
    
        console.log('로그인 성공');
        return response.data;
    } catch (error) {
        console.error('로그인 실패');
        return null;
    }
}

const logout = async () => {
    try {
        const response = await api.post('api/auth/logout/');
        
        console.log('로그아웃 성공');
        return true;
    } catch (error) {
        console.error('로그아웃 실패');
        return false;
    }
}

const refresh = async () => {
    try {
        const response = await api.post('api/auth/refresh/');

        console.log("액세스 토큰 갱신 성공");
        return true;
    } catch (error) {
        console.error("액세스 토큰 갱신 실패");
        return null;
    }
}


export const AuthApi = {
    login,
    logout,
    refresh,
}