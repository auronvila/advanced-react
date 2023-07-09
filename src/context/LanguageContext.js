import {createContext, useContext, useReducer, useState} from "react";
import siteReducer from "../reducers/siteReducers";

const Context = createContext();

const Provider = ({children}) => {

    const [state, dispatch] = useReducer(siteReducer,{
        language: "TR"
    })

    const data ={
        ...state,
        dispatch
    }

    return(
        <Context.Provider value={data}>
            {children}
        </Context.Provider>
        )
}

export const useLanguage = () => useContext(Context)

export default Provider;