import { createContext, useState, useContext } from "react";
import { useNavigate } from "react-router";
import * as users from '../api/user';

const UserAuthContext = createContext();

export const UserAuthContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loginErr, setLoginErr] = useState();
    const [signupErr, setSignupErr] = useState();
    const navigate = useNavigate();

    async function logIn(data) {
        users.logIn(data).then(
            () => {
                setUser(data);
                navigate("/home");
            }
        ).catch(err => setLoginErr(err.message));
    };

    async function signUp(data) {
        users.signUp(data).then(() => navigate("/"))
            .catch(err => setSignupErr(err.message));
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
        <UserAuthContext.Provider value={{ user, loginErr, signupErr, logIn, signUp, logOut }}>
            {children}
        </UserAuthContext.Provider>
    )
}

export default function useUserAuth() {
    return useContext(UserAuthContext);
}