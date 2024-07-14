export type Article = {
    author: {
        nickname: string;
        username: string;
    }
    id: number;
    content: string;
    createdAt: string;
    updatedAt: string;
}