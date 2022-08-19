import React from "react";
import Header from "./Header";
import StartPagePanel from "./StartPagePanel";
import Footer from "./Footer";

import './css/App.css';
import './css/BlackBarPanel.css';

/* 
TODO:
- Routing for the different car models
- CSS for background
- Black panels, images/links to the car models
- Front page with routing
- page about the auhor + contact page (MIDDLE OF THE FRONTPAGE, PIC OF CHRIS?)
- panel för de olika modellerna + creator page
*/

function App() {
    return (
        <div>
            <div className="blackbarpanel left-panel"/>
            <div className="blackbarpanel right-panel"/>
            <Header/>
            <StartPagePanel/>
            <Footer/>
        </div>
    );
}

export default App;
