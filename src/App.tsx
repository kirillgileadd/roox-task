import React from 'react';
import {Route, Routes} from "react-router-dom";
import UsersPage from "./pages/UsersPage";
import UserProfile from "./pages/UserProfile";
import NavBar from "./components/NavBar";


function App() {
    return (
        <div>
            <NavBar/>
            <Routes>
                <Route path='/' element={<UsersPage/>}/>
                <Route path='/:id' element={<UserProfile/>}/>
            </Routes>
        </div>
    );
}

export default App;
