import { AxiosError } from "axios";
import { api } from ".";
import { AuthApi } from "./authapi";

const postArticle = async (content: string) => {
    try {
        const response = await api.post('api/articles/', {
            content,
        });

        console.log('글 작성 성공');
        return response.data;
    
    } catch (error : AxiosError | any) {
        console.error('글 작성 실패');
        if (error.response.status === 401) {
            console.log("액세스 토큰이 만료돰. 리프레시 토큰을 사용하여 액세스 토큰을 갱신시도.");
            await AuthApi.refresh();

            const response = await api.post('api/articles/', {
                content,
            });

            if (response.status !== 201) {
                console.error('글 작성 실패');
                return null;
            }

            console.log('글 작성 성공');
            return response.data;
        }
        return null;
    }
}

const getRecentArticles = async (page: number, perPage: number) => {
    try {
        const response = await api.get('api/articles/recent/', {
            params: {
                page,
                perPage,
            }
        });

        if (response.status !== 200) {
            console.error('최근 글 불러오기 실패');
            return null;
        }

        console.log('최근 글 불러오기 성공');
        return response.data;
    
    } catch (error) {
        console.error('최근 글 불러오기 실패');
        return null;
    }
}

const getRecentArticlesByusername = async (username: string, page: number, perPage: number) => {
    try {
        const response = await api.get(`api/articles/recent/${username}`, {
            params: {
                page,
                perPage,
            }
        });

        if (response.status !== 200) {
            console.error('최근 글 불러오기 실패');
            return null;
        }

        console.log('최근 글 불러오기 성공');
        return response.data;
    
    } catch (error) {
        console.error('최근 글 불러오기 실패');
        return null;
    }
}

export const ArticleApi = {
    postArticle,
    getRecentArticles,
    getRecentArticlesByusername,
}