import React from "react";
import '../newico.png';


const Footer = () => {
    const date = new Date();
    const currentYear = date.getFullYear();


return (

    <footer>
        <p>Copyright {currentYear} | By: Ryan @ 
        <a href="https://allmaddesigns.com/" title="to my website" target="_blank" rel="noreferrer">
            <img className="icon" width="80" height="80" src="newico.png" alt="pyramid AMD logo icon" />
        <span className="site-title">All Mad Designs
        </span>
        </a>
        </p>
    </footer>
);

}

export default Footer;