import React from 'react'
import './projects.css'
import { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext'
import WorkCard from '../workCard/WorkCard'

const Projects = () => {
    const { lightTheme } = useContext(ThemeContext);


    return (
        <div className={`section__padding pd__projects ${lightTheme ? 'theme__light' : 'theme__dark'}`}>
            <div className="pd__projects-heading">
                <h1>Meu trabalho</h1>
            </div>
            <div className="pd__projects-projects">
                <WorkCard />
            </div>


        </div>
    )
}

export default Projects
