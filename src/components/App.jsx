import React from "react";



function App(){
    return (
        <div>
            <h1>Welcome to Codeblitz!</h1>
            <p>Practice your typing skills like a true developer. Click **start** to begin!</p>

            <br />

            <p id="snippet"></p>
            <p id="message"></p>
            <p id="time"></p>

            <br />

            <div>
                <input type="hidden" aria-label="current word" id="typed=value" />
                <button type="button" id="start">Start</button>
            </div>
        </div>
    );
}

export default App;