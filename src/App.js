import React from "react";
import Header from "./Header";
import StartPagePanel from "./StartPagePanel";
import Footer from "./Footer";

import './css/App.css';

/* 
TODO:
- Routing for the different car models
- CSS for background
- JS & CSS for black panels to left and right, sometihn inside them?
- Front page with routing, images? links?
- page about the auhor + contact page
- panel för de olika modellerna + creator page
*/

function App() {
    return (
        <div>
            <Header/>
            <StartPagePanel/>
            <Footer/>
        </div>
    );
}

export default App;
