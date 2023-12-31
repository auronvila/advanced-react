import {createContext, useContext, useState} from "react";

const Context = createContext();

const Provider = ({children}) => {
    const [site, setsite] = useState('1');
    const data ={
        site,
        setsite
    }
    return(
        <Context.Provider value={data}>
            {children}
        </Context.Provider>
    )
}


export const useSite =() => useContext(Context)

export default Provider;