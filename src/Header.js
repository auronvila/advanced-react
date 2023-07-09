import {useAuth} from "./context/AuthContext";


export default function Header({test}) {
    const {auth,setAuth} = useAuth()

    const login = () => {
        setAuth({
            name: "auron",
            id: 1
        })
    }

    const logout =() => {
        setAuth(false)
    }
    return (
        <>
            <h1>
                Header
                {test}
                <br/>
                {auth && <button onClick={logout}>Cikis Yap</button> || <button onClick={login}>Giris Yap</button>}
            </h1>
        </>
    )
}