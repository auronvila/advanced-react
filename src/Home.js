import Header from "./Header";
import SwitchNum from "./SwitchNum";
import Footer from "./Footer";
import {useAuth} from "./context";

export default function Home() {
    const {auth} = useAuth()
    return (
        <>
            <Header />
            <SwitchNum />
            {auth && <h3>BU alan sadece giris yapilanlara ozeldir</h3>}
            <Footer />
        </>
    );
}
