import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";
import StartPagePanel from "./StartPagePanel";
import StartPage from "./StartPage";

import SaabLimousine from "./Saab-limousine";
import Amator300Plus from "./Amator300plus";
import Unknown from "./Unknown";
import Articles from "./Articles";

import './css/Center.css';

function App() {
    return (
        <div>
            <BrowserRouter>
                <Header/>
                <StartPage/>
                <div className="middle-padding">
                    <Routes>
                        <Route path="/" element={<StartPagePanel/>}/>
                        <Route path="saab93-limousine" element={<SaabLimousine/>}/>
                        <Route path="amator-300-plus" element={<Amator300Plus/>}/>
                        <Route path="unknown" element={<Unknown/>}/>
                        <Route path="articles" element={<Articles/>}/>

                        <Route path="*" element={<Navigate to="/"/>}/>
                    </Routes>            
                </div>
            </BrowserRouter>

            <Footer/>
        </div>
    );
}

export default App;
