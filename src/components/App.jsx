import React from "react";
import Welcome from "./partials/Welcome.jsx";
import Game from "./partials/Game.jsx";
import Footer from "./partials/Footer.jsx";

function App(){

    return (
        <div>
            
            <Welcome/>

            <Game />

            <Footer />
        </div>
    );
}

export default App;