import React from 'react'
import './projects.css'
import { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext'
import WorkCard from '../workCard/WorkCard'
import { FaCss3Alt, FaHtml5, FaJsSquare, FaReact, FaGithub, FaBootstrap, FaFigma } from "react-icons/fa";
import luminatech from '../../images/thumbanil-luminatech.png'
import silverpg from '../../images/thumbanil-silverpg.png'
import bartenderschoice from '../../images/thumbanil-bartenderschoice.png'




const Projects = () => {
    const { lightTheme } = useContext(ThemeContext);
    const size = 35

    return (
        <div className={`section__padding pd__projects ${lightTheme ? 'theme__light' : 'theme__dark'}`}>
            <div className="pd__projects-heading">
                <h1>Meu trabalho</h1>
            </div>
            <div className="pd__projects-cards">
                <WorkCard
                    thumbnail={luminatech}
                    name="Landing-page Luminatech"
                    text="Landing page responsiva para uma empresa fictícia da área de energias sustentáveis com foco em apresentar suas soluções e entregar ao usuário uma experiência sustentável"
                    tech1={<FaReact size={size} />} tech2={<FaCss3Alt size={size} />} tech3={<FaHtml5 size={size} />} tech4={<FaFigma size={size} />}
                    link="https://luminatech.netlify.app"
                    repository="https://github.com/Douglas4242/luminatech" />
                <WorkCard
                    thumbnail={silverpg}
                    name="Silver Page"
                    text="Vitrine para os marcadores de páginas e planners personalizados da loja Silver Page"
                    tech1={<FaReact size={size} />} tech2={<FaCss3Alt size={size} />} tech3={<FaHtml5 size={size} />} tech4={<FaFigma size={size} />}
                    link="https://silverpg.netlify.app"
                    repository="https://github.com/Douglas4242/silverpage" />
                <WorkCard
                    thumbnail={bartenderschoice}
                    name="Bartender's Choice"
                    text="Case promovido pela DNC com o objetico de criar uma página para uma empresa que disponibiliza serviços váriados de bartender."
                    tech1={<FaReact size={size} />} tech2={<FaCss3Alt size={size} />} tech3={<FaHtml5 size={size} />} tech4={<FaFigma size={size} />}
                    link="https://baterderschoice.netlify.app"
                    repository="https://github.com/Douglas4242/BartendersChoices" />

            </div>


        </div>
    )
}

export default Projects
