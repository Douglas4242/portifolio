import React from 'react'
import './btndefault.css'
import { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext'

const Btndefault = ({ text, click }) => {
    const { lightTheme } = useContext(ThemeContext)

    return (
        <div className={lightTheme ? 'pd__introduction-btn-light' : 'pd__introduction-btn-dark'}>
            <a
                onClick={click}
                href='#'
                className="pd__introduction-btn_btn ">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <p>{text}</p>
            </a>
        </div>
    )
}

export default Btndefault
