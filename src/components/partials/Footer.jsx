import React from "react";

function Footer(){
    let year = new Date().getFullYear()
    return(
        <footer>
            <p>Thank You For Playing!</p>
            <p>© {year} Samuel Gonzalez III</p>
        </footer>
    );
}

export default Footer;