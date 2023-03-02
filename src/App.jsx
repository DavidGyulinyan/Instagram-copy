import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import UserPage from "./pages/UserPage/UserPage";
import MainPage from "./pages/MainPage/MainPage";

function App() {
    return (
        <BrowserRouter>

            <Routes>
                <Route path='/' element={<MainPage/>}/>
                <Route path='/:id' element={<UserPage/>}/>
            </Routes>

        </BrowserRouter>
    );
}

export default App;
