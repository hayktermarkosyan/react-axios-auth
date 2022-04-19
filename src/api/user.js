import client from "./axios";

export const logIn = async (data) => {
    const responce = await client.post('login', data);
    localStorage.setItem("token", responce.data.accessToken);
    return responce; 
};

export const signUp = async (data) => {
    const responce = await client.post('register', data);
    return responce;
};

export const logOut = async () => {
    const responce = await client.post('logout');
    localStorage.clear();
    return responce;
};
