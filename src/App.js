import React from "react";
import Header from "./Header";
import StartPagePanel from "./StartPagePanel";
import Footer from "./Footer";

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
        <div>
            <div className="blackbarpanel left-panel">

            </div>
            <div className="blackbarpanel right-panel">

            </div>
            <Header/>
            <StartPagePanel/>
            <Footer/>
        </div>
    );
}

export default App;
