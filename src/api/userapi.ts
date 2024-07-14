import { api } from ".";

const getUser = async (username: string) => {
    const response = await api.get(`api/user/${username}`);

    if (response.status === 404) {
        return null;
    }

    return response.data;
};
export const UserApi = {
    getUser,
};