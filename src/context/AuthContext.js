import {createContext, useContext, useState} from "react";

const Context = createContext();

const Provider = ({children}) => {
    const [auth, setAuth] = useState(false);

    const data ={
        auth,
        setAuth,
    }

    return(
        <Context.Provider value={data}>
            {children}
        </Context.Provider>
    )
}


export const useAuth =() => useContext(Context)

export default Provider;