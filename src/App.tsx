import React from 'react';
import {Route, Routes} from "react-router-dom";
import UsersPage from "./pages/UsersPage";
import UserDetails from "./pages/UserDetails";
import NavBar from "./components/NavBar";


function App() {
    return (
        <div>
            <NavBar/>
            <Routes>
                <Route path='/' element={<UsersPage/>}/>
                <Route path='/:id' element={<UserDetails/>}/>
            </Routes>
        </div>
    );
}

export default App;
