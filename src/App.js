import './App.css';
import {SiteContext,AuthContext, LanguageContext} from "./context";
import Home from "./Home";


function App() {

    return (
        <SiteContext>
            <AuthContext>
                <LanguageContext>
                    <Home/>
                </LanguageContext>
            </AuthContext>
        </SiteContext>
    );
}

export default App;
