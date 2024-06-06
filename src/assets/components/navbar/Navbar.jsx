import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { FaLinkedin, FaMoon, FaSun } from "react-icons/fa6";
import './navbar.css'


const Navbar = () => {
    const { lightTheme, setLightTheme } = useContext(ThemeContext);

    const Menu = () => (
        <>
            <p><a href='#'>Sobre</a></p>
            <p><a href='#'>Projetos</a></p>
            <p><a href='#'>Contato</a></p>
        </>
    )

    return (
        <div className={`pd__navbar ${lightTheme ? 'theme__light' : 'theme__dark'}`}>
            <div className="pd__navbar-content">
                <div className="pd__navbar-links-text">
                    <Menu />
                </div>
                <div className="pd__navbar-links-icons">
                    <FaLinkedin size={27} />
                </div>
                <div className="pd__navbar-theme">
                    {lightTheme ? <FaMoon size={27} onClick={() => setLightTheme(!lightTheme)} />
                        : <FaSun size={27} onClick={() => setLightTheme(!lightTheme)} />}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
