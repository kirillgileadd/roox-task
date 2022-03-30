import React from 'react';
import {Route, Routes} from "react-router-dom";
import UsersPage from "./pages/UsersPage/UsersPage";
import UserProfile from "./pages/UserProfile";
import NavBar from "./components/NavBar";
import style from './App.module.scss'


function App() {
    return (
        <main className={style.main}>
            <NavBar/>
            <div className={style.content}>
                <Routes>
                    <Route path='/' element={<UsersPage/>}/>
                    <Route path='/:id' element={<UserProfile/>}/>
                </Routes>
            </div>
        </main>
    );
}

export default App;
