import {useSite} from "./context/SiteContext";

export default function SwitchNum() {

    const {site, setsite} = useSite()


    return (
        <>
            <button onClick={(e) => setsite(site === "1" ? "2" : "1")}>degistir</button>
            {site}
        </>
    )
}