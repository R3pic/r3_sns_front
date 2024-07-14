import { api } from ".";

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
    getRecentArticles,
    getRecentArticlesByusername,
}