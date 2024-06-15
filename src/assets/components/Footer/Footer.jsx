import React from 'react'
import './footer.css'
import { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext'
import { FaPhoneAlt, FaEnvelope, FaLinkedinIn, FaWhatsapp, FaGithub } from "react-icons/fa";
import Btndefault from '../btndefault/Btndefault';


const Footer = () => {
    const { lightTheme } = useContext(ThemeContext)
    const size = 25

    return (
        <div id='contact' className={`pd__footer section__padding ${lightTheme ? 'theme__light' : 'theme__dark'}`}>
            <div className={`pd__footer-left ${lightTheme ? 'light' : 'dark'}`}>
                <div className={`pd__footer-left_heading`}>
                    <h1>Contato</h1>
                </div>
                <ul>
                    <li><a href='https://contate.me/douglasmoraes' target="_blank"><FaPhoneAlt size={size} /> +55 12 991019174</a></li>
                    <li><FaEnvelope size={size} /> douglasgm89@live.com</li>
                    <div className="pd__footer-left_icons">
                        <li><a href='https://contate.me/douglasmoraes' target="_blank"><FaWhatsapp size={size + 5} /></a></li>
                        <li><a href='https://www.linkedin.com/in/douglas-moraes-a4190418a/' target="_blank"><FaLinkedinIn size={size + 5} /></a></li>
                        <li><a href='https://github.com/Douglas4242' target="_blank"><FaGithub size={size + 5} /></a></li>
                    </div>
                </ul>
                <div className="pd__footer-left_cv">
                    <h2>Meu Curriculum</h2>
                    <div className="pd__footer-left_cv-btns">
                        <Btndefault text="Download" link="src\assets\files\Curriculo Douglas Gomes Moraes.pdf" download="Douglas Gomes Moraes.pdf" />
                        <Btndefault text="Visualizar" link="src\assets\files\Curriculo Douglas Gomes Moraes.pdf" />
                    </div>
                </div>

            </div>
            <div className="pd__footer-right">

            </div>
        </div>
    )
}

export default Footer
