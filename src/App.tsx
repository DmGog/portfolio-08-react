import "./App.css";
import {Header} from "./layout/header/Header";
import {GlobalStyles} from "./styles/Global.Styles";
import {Main} from "./layout/sections/main/Main";
import {Skills} from "./layout/sections/skills/Skills";
import {Works} from "./layout/sections/works/Works";
import {Footer} from "./layout/footer/Footer";


function App() {
    return (
        <div className="App">
            <GlobalStyles/>
            <Header/>
            <Main/>
            <Skills/>
            <Works/>
            <Footer/>
        </div>
    );
}

export default App;
