import React from "react";
import Welcome from "./partials/Welcome.jsx";
import Snippet from "./partials/Snippet.jsx";
import Message from "./partials/Message.jsx";
import Footer from "./partials/Footer.jsx";

function App(){

    return (
        <div>
            
            <Welcome/>

            <br />

            <Snippet />
            <Message />

            <br />

            <div>
                <input 
                id="typed-value"
                type="hidden" 
                aria-label="current word"/>
                <button 
                id="start"
                type="button">Start</button>
            </div>

            <Footer />
        </div>
    );
}

export default App;