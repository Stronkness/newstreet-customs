import React from "react";
import Header from "./Header";
import StartPagePanel from "./StartPagePanel";
import Footer from "./Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Saab93 from "./Saab93";

import './css/App.css';
import './css/BlackBarPanel.css';

/* 
TODO:
- Routing for the different car models
- Black panels, images/links to the car models
- Front page with routing
- page about the auhor + contact page (MIDDLE OF THE FRONTPAGE, PIC OF CHRIS?)
- panel för de olika modellerna + creator page
- Team Nasty Tomelilla research
*/

function App() {
    return (
        <BrowserRouter>
            <div className="blackbarpanel left-panel">
                <Saab93/>
            </div>
            <div className="blackbarpanel right-panel">

            </div>
            <Header/>
            <StartPagePanel/>
            <Footer/>
        </BrowserRouter>
    );
}

export default App;
