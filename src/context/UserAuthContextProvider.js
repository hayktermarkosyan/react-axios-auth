import { createContext, useState, useContext } from "react";
import { useNavigate } from "react-router";
import * as users from '../api/user';

const UserAuthContext = createContext();

export const UserAuthContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    async function logIn(data) {
        users.logIn(data).then(
            () => {
                setUser(data);
                navigate("/home");
            }
        );
    };

    async function signUp(data) {
        users.signUp(data).then(
            () => {
                navigate("/");
            }
        );
    };

    async function logOut() {
        users.logOut().then(
            () => {
                setUser(null);
                navigate("/");
            }
        );
    };

    return (
        <UserAuthContext.Provider value={{ user, logIn, signUp, logOut }}>
            {children}
        </UserAuthContext.Provider>
    )
}

export default function useUserAuth() {
    return useContext(UserAuthContext);
}