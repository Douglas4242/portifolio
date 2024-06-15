import React from 'react'
import './workcard.css'
import Btndefault from '../btndefault/Btndefault'
import { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext'
import { FaCss3Alt, FaHtml5, FaJsSquare, FaReact, FaGithub, FaBootstrap, FaFigma } from "react-icons/fa";


const WorkCard = ({ thumbnail, name, text, tech1, tech2, tech3, tech4, tech5, link, repository }) => {
    const { lightTheme } = useContext(ThemeContext)

    return (
        <div className={`pd__workcard ${lightTheme ? 'light-hover' : 'dark-hover'}`}>
            <div className='pd__workcard-image'>
                <a href={link} target="_blank"><img src={thumbnail} alt="" /></a>
            </div>
            <div className="pd__workcard-title">
                <h2>{name}</h2>
            </div>
            <div className="pd__workcard-text">
                <p>{text}</p>
            </div>
            <div className={`pd__workcard-tech`}>
                {tech1}
                {tech2}
                {tech3}
                {tech4}
                {tech5}
            </div>
            <div className="pd__workcard-btn">
                <Btndefault text="Conheça aqui" link={link} />
                <Btndefault text="Acesse o Repositório" link={repository} />
            </div>

        </div>
    )
}

export default WorkCard
