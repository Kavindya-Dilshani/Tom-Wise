import { createContext, useContext } from "react";

export const AuthContext = createContext({
    isAuthenticated: false,
    login: () => { },
    signup: () => { },
    logout: () => { },
    getUser: () => { },
});

export const useAuth = () => useContext(AuthContext);
