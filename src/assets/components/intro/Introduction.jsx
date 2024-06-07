import React, { useContext } from 'react'
import './introduction.css'
import { ThemeContext } from '../../context/ThemeContext'

const Introduction = () => {
    const { lightTheme } = useContext(ThemeContext)

    return (
        <div className={`pd__introduction section__padding ${lightTheme ? 'theme__light' : 'theme__dark'}`}>

        </div>
    )
}

export default Introduction
