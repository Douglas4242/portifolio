import React from 'react'
import './workcard.css'
import luminatech from '../../images/thumbanil-luminatech.png'
import Btndefault from '../btndefault/Btndefault'
import { FaCss3Alt, FaHtml5, FaJsSquare, FaReact, FaGithub, FaBootstrap, FaFigma } from "react-icons/fa";


const WorkCard = ({ thumbnail, name, text, tech1, tech2, tech3, tech4, tech5, link, repositpry }) => {
    const size = 35

    return (
        <div className="pd__workcard">
            <div className='pd__workcard-image'>
                <img src={luminatech} alt="" />
            </div>
            <div className="pd__workcard-title">
                <h2>Landing-page Luminatech</h2>
            </div>
            <div className="pd__workcard-text">
                <p>Landing page responsiva para uma empresa fictícia da área de energias sustentáveis com foco em apresentar suas soluções e entregar ao usuário uma experiência sustentável</p>
            </div>
            <div className="pd__workcard-tech">
                <FaCss3Alt size={size} />
                <FaReact size={size} />
                <FaFigma size={size} />
            </div>
            <div className="pd__workcard-btn">
                <Btndefault text="Acesse o Repositório" />
            </div>

        </div>
    )
}

export default WorkCard
