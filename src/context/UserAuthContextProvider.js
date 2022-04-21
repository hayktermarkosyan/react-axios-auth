import { createContext, useState, useContext } from "react";
import { useNavigate } from "react-router";
import * as users from '../api/user';

const UserAuthContext = createContext();

export const UserAuthContextProvider = ({ children }) => {
    const initialUser = JSON.parse(localStorage.getItem('user'))
    const [user, setUser] = useState(initialUser);
    const [list, setList] = useState();
    const [loginErr, setLoginErr] = useState();
    const [signupErr, setSignupErr] = useState();
    const navigate = useNavigate();

    async function logIn(data) {
        users.logIn(data).then(
            () => {
                setUser(data);
                localStorage.setItem("user", JSON.stringify(data));
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

    async function getList() {
        users
            .getList().then(res => setList(res.data))
            .catch(err => console.log(err));
        console.log("first")
    }

    return (
        <UserAuthContext.Provider 
            value={{ user, list, loginErr, signupErr, logIn, signUp, logOut, getList }}
        >
            {children}
        </UserAuthContext.Provider>
    )
}

export default function useUserAuth() {
    return useContext(UserAuthContext);
}