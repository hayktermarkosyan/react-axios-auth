import { createContext, useState, useContext, useEffect } from "react";
import axios from "../api/axios";
import { useNavigate } from "react-router";

const UserAuthContext = createContext();

export const UserAuthContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    async function logIn(data) {
        setUser(data);
        await axios.post('login', data).then(
            res => {
                console.log(user);
                localStorage.setItem('token', res.data.accessToken);
                navigate("/home");
            }
        ).catch(
            err => {
              console.log(err.message);
            }
        )
    }

    async function signUp(data) {
        await axios.post('register', data).then(
            res => {
              console.log(res);
              navigate("/");
            }
        ).catch(
            err => {
              console.log(err.message);
            }
        )
    }

    async function logOut() {
        await axios.post('logout').then(
            res => {
              localStorage.clear();
              res.headers = {
                "Authorization": null
              }
              navigate("/");
            }
        )
        .catch(
            err => {
                console.log(err)
            }
        )
    }

    useEffect(() => {        
        
        return () => {
          setUser();
          console.log(user);
        };
    }, []);

    return (
        <UserAuthContext.Provider value={{ user, logIn, signUp, logOut }}>
            {children}
        </UserAuthContext.Provider>
    )
}

export default function useUserAuth() {
    return useContext(UserAuthContext);
}