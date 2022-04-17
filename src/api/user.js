import client from "./axios";

export const logIn = async (data) => {
    try {
        const responce = await client.post('login', data);
        localStorage.setItem("token", responce.data.accessToken);

        return responce;
    } catch (error) {
        alert(error);
    }  
};

export const signUp = async (data) => {
    try {
        const responce = await client.post('register', data);

        return responce;
    } catch (error) {
        alert(error);
    }
};

export const logOut = async () => {
    try {
        const responce = await client.post('logout');
        localStorage.clear();

        return responce;
    } catch (error) {
        alert(error);
    }
};
