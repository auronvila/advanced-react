import {useLanguage} from "./context";
import {useReducer} from "react";
import siteReducer from './reducers/siteReducers'
export default function Footer() {

const{language, dispatch} = useLanguage()

    const changeLanguage = () => {
        dispatch({
            type: "SWITCH_LANGUAGE",
        })
    }
    return (
        <h1>
            Footer
            <br/>
            <button onClick={changeLanguage }>Change Language</button>
            <br/>
            {language}
        </h1>
    )
}