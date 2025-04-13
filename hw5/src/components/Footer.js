import React from "react";
import "./Footer.css";
import instagramIcon from "../assets/inst2.jpg"; // Ensure the image path is correct

const Footer = () => {
    return (
        <footer>
            <h1 className="top">Agriculture Guide</h1>
            <p>
                30 South 15th Street, 15th Floor
                <br />
                Philadelphia, Pa 19102
                <br />
                <a href="mailto:agri@Guide.COM" target="_blank" rel="noopener noreferrer">
                    agri@Guide.COM
                </a>
                <br />
                "732.900.0373"
                <br />
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                    <img src={instagramIcon} alt="Instagram" />
                </a>
            </p>
        </footer>
    );
};

export default Footer;
