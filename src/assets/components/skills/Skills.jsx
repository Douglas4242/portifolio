import React, { useContext } from 'react'
import './skills.css'
import { ThemeContext } from '../../context/ThemeContext';
import SkillCard from '../skillcard/SkillCard';
import CSS from '../../images/CSS.png'
import GITHUB from '../../images/GITHUB.png'
import HTML from '../../images/HTML.png'
import JS from '../../images/JS.png'
import BOOTSTRAP from '../../images/BOOTSTRAP.png'
import REACTLOGO from '../../images/react.svg';




const Skills = () => {
    const { lightTheme } = useContext(ThemeContext);


    return (
        <div className={`pd__skills section__padding ${lightTheme ? 'theme__light' : 'theme__dark'}`}>
            <div className="pd__skills-heading">
                <h1>Habilidades</h1>
            </div>
            <div className="pd__skills-content">
                <div className="pd__skills-content-cards">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <SkillCard image={CSS} />
                    <SkillCard image={GITHUB} />
                    <SkillCard image={HTML} />
                    <SkillCard image={JS} />
                    <SkillCard image={BOOTSTRAP} />
                    <div className="reactLogo">
                        <SkillCard image={REACTLOGO} />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Skills
