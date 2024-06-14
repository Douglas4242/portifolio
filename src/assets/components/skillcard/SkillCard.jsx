import React from 'react'
import './skillcard.css'


const SkillCard = ({ image }) => {
    return (
        <div className='pd__skillcard'>
            <img src={image} alt="" />
        </div>
    )
}

export default SkillCard
