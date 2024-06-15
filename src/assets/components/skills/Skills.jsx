import React, { useContext } from 'react'
import './skills.css'
import { ThemeContext } from '../../context/ThemeContext';
import { FaCss3Alt, FaHtml5, FaJsSquare, FaReact, FaGithub, FaBootstrap, FaFigma } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";




const Skills = () => {
    const { lightTheme } = useContext(ThemeContext);
    const size = 100


    return (
        <div id='tech' className={`pd__skills section__padding ${lightTheme ? 'theme__light' : 'theme__dark'}`}>
            <div className="pd__skills-heading">
                <h1>Tecnologias</h1>
            </div>
            <div className="pd__skills-content">
                <div className={`${lightTheme ? 'pd__skills-content-cards-light' : 'pd__skills-content-cards-dark'}`}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <div className={`${lightTheme ? 'pd__skills-content_icon-light' : 'pd__skills-content_icon-dark'}`}>
                        <FaCss3Alt size={size} />
                        <p className='slide-in-top '><strong>CSS</strong></p>
                    </div>
                    <div className={`${lightTheme ? 'pd__skills-content_icon-light' : 'pd__skills-content_icon-dark'}`}>
                        <FaHtml5 size={size} />
                        <p className='slide-in-top '><strong>HTML5</strong></p>
                    </div>
                    <div className={`${lightTheme ? 'pd__skills-content_icon-light' : 'pd__skills-content_icon-dark'}`}>
                        <FaJsSquare size={size} />
                        <p className='slide-in-top '><strong>JavaScript</strong></p>
                    </div>
                    <div className={`${lightTheme ? 'pd__skills-content_icon-light' : 'pd__skills-content_icon-dark'}`}>
                        <div className='reactLogo'>
                            <FaReact size={size} />
                        </div>
                        <p className='slide-in-top '><strong>React</strong></p>
                    </div>
                    <div className={`${lightTheme ? 'pd__skills-content_icon-light' : 'pd__skills-content_icon-dark'}`}>
                        <FaBootstrap size={size} />
                        <p className='slide-in-top '><strong>Bootstrap</strong></p>
                    </div>
                    <div className={`${lightTheme ? 'pd__skills-content_icon-light' : 'pd__skills-content_icon-dark'}`}>
                        <FaGithub size={size} />
                        <p className='slide-in-top '><strong>GitHub</strong></p>
                    </div>
                    <div className={`${lightTheme ? 'pd__skills-content_icon-light' : 'pd__skills-content_icon-dark'}`}>
                        <FaFigma size={size} />
                        <p className='slide-in-top '><strong>Figma</strong></p>
                    </div>
                    <div className={`${lightTheme ? 'pd__skills-content_icon-light' : 'pd__skills-content_icon-dark'}`}>
                        <VscVscode size={size} />
                        <p className='slide-in-top '><strong>VSCode</strong></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills
