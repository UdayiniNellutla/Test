import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg";
import instagramIcon from "../assets/inst.png";
import styles from "./Navbar.module.css";

const Navbar = () => {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        document.body.className = darkMode ? styles.darkMode : styles.lightMode;
    }, [darkMode]);

    return (
        <nav className={styles.navbar}>
            {/* Logo */}
            <div className={styles.logo}>
                <Link to="/">
                    <img src={logo} alt="Logo" />
                </Link>
            </div>

            {/* Navigation Links */}
            <ul className={styles.navLinks}>
                <li><Link to="/crops-farming">CROPS & FARMING</Link></li>
                <li><Link to="/equipment">EQUIPMENTS</Link></li>
                <li><Link to="/plants">PLANTS</Link></li>
                <li><Link to="/about">ABOUT</Link></li>
                <li>
                    <a href="https://www.fao.org/" target="_blank" rel="noopener noreferrer">
                        FAO WEBSITE
                    </a>
                </li>
            </ul>

            {/* Contact Button & Theme Toggle */}
            <div className={styles.navRight}>
                <Link to="/contact">
                    <button className={styles.contactBtn}>CONTACT US</button>
                </Link>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                    <img src={instagramIcon} alt="Instagram" className={styles.instagramIcon} />
                </a>
                <button 
                    id="theme-toggle" 
                    className={styles.themeToggle} 
                    onClick={() => setDarkMode(!darkMode)}
                >
                    {darkMode ? "☀️" : "🌙"}
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
