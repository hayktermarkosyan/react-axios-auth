import { createContext, useState, useContext } from "react";
import { useNavigate } from "react-router";
import * as users from '../api/user';

const UserAuthContext = createContext();

export const UserAuthContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [error, setError] = useState();
    const navigate = useNavigate();

    async function logIn(data) {
        users.logIn(data).then(
            () => {
                setUser(data);
                navigate("/home");
            }
        ).catch(err => setError(err.message));
    };

    async function signUp(data) {
        users.signUp(data).then(() => navigate("/"))
            .catch(err => setError(err.message));
    };

    async function logOut() {
        users.logOut().then(
            () => {
                navigate("/");
                setUser(null);
            }
        ).catch(err => console.log(err));   
    };

    return (
        <UserAuthContext.Provider value={{ user, error, logIn, signUp, logOut }}>
            {children}
        </UserAuthContext.Provider>
    )
}

export default function useUserAuth() {
    return useContext(UserAuthContext);
}