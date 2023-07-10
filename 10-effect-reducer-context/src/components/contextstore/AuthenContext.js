import react from "react";
const AuthenContext = react.createContext({
    isloggedIn: false,
    onLogout: () => { },
});
export default AuthenContext;