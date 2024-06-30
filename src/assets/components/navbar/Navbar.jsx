import React, { useContext, useState } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { FaLinkedin, FaMoon, FaSun, FaAlignCenter, FaGithub } from "react-icons/fa6";
import './navbar.css'


const Navbar = () => {
    const { lightTheme, setLightTheme } = useContext(ThemeContext);
    const [toggleMenu, setToggleMenu] = useState(false)

    const Menu = () => (
        <>
            <p><a href='#tech'>Tecnologias</a></p>
            <p><a href='#projects'>Projetos</a></p>
            <p><a href='#contact'>Contato</a></p>
        </>
    )

    const Icons = () => (
        <>
            <a href='https://www.linkedin.com/in/douglas-moraes4242' target="_blank"><FaLinkedin size={27} /></a>
            <a href='https://github.com/Douglas4242' target="_blank"><FaGithub size={27} /></a>

        </>
    )

    return (
        <div className={`pd__navbar ${lightTheme ? 'theme__light' : 'theme__dark'}`}>
            <div className={`pd__navbar-content ${lightTheme ? '' : 'glow'}`}>
                <div className="pd__navbar-links-text">
                    <Menu />
                </div>
                <div className="pd__navbar-links-icons">
                    <Icons />
                </div>
                <div className="pd__navbar-theme">
                    {lightTheme ? <FaMoon size={27} onClick={() => setLightTheme(!lightTheme)} />
                        : <FaSun size={27} onClick={() => setLightTheme(!lightTheme)} />}
                </div>
                <div className="pd__navbar-menu ">
                    <FaAlignCenter size={27} onClick={() => setToggleMenu(!toggleMenu)} />
                    {toggleMenu && (
                        <div className={`pd__navbar-menu-content scale-up-top ${lightTheme ? 'bg-light' : 'bg-dark'}`}>
                            <div className="pd__navbar-menu-links-text">
                                <Menu />
                            </div>
                            <div className="pd__navbar-menu-links-icons">
                                <Icons />
                            </div>
                            <div className="pd__navbar-menu-theme">
                                {lightTheme ? <FaMoon size={27} onClick={() => setLightTheme(!lightTheme)} />
                                    : <FaSun size={27} onClick={() => setLightTheme(!lightTheme)} />}
                            </div>
                        </div>
                    )}
                </div>
            </div>

        </div>
    );
};

export default Navbar;
