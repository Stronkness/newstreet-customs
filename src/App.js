import React from "react";
import Header from "./Header";
import StartPagePanel from "./StartPagePanel";
import Footer from "./Footer";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import './css/App.css';
import './css/BlackBarPanel.css';
import './css/StartPagePanelCars.css';

import saab93 from './saab-finished/PICT0546.JPG';
import test from './saab-finished/PICT0547.JPG';
import test2 from './saab-finished/PICT0548.JPG';
import test3 from './saab-finished/PICT0549.JPG';

/* 
TODO:
    - Routing for the different car models
    - Black panels, images/links to the car models
    - Front page with routing
    - page about the auhor + contact page (MIDDLE OF THE FRONTPAGE, PIC OF CHRIS?)
    - panel för de olika modellerna + creator page
    - Team Nasty Tomelilla research
    - Make header as a "get home" button, add css shadowing
    - Create "Go home" button when moving to another page e.g car or founder
*/

function App() {
    return (
        <BrowserRouter>
            <div className="blackbarpanel left-panel">
                <div className="paneltextalignment topcar left">
                    <Link to="/saab93-limousine">
                        <img src={saab93} height={250} width={250}/>
                        <br/>
                        Saab 93 Limousine
                    </Link>
                </div>

                <div className="paneltextalignment bottomcar left">
                    <Link to="/test">
                        <img src={test} height={250} width={250}/>
                        <br/>
                        Test
                    </Link>  
                </div>             
            </div>

            <div className="paneltextalignment blackbarpanel right-panel">
                <div className="topcar right">
                    <Link to="/test2">
                        <img src={test2} height={250} width={250}/>
                        <br/>
                        Test2
                    </Link> 
                </div>

                <div className="paneltextalignment bottomcar right">
                <Link to="/test3">
                        <img src={test3} height={250} width={250}/>
                        <br/>
                        Test3
                    </Link> 
                </div>
            </div>
            <Header/>
            <StartPagePanel/>
            <Footer/>

            {/* <Routes>
                <Route exact path='/saab93-limousine' element={<Footer/>}/>
            </Routes> */}
        </BrowserRouter>
    );
}

export default App;
