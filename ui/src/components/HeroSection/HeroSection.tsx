import React from 'react'
import './HeroSection.css'
import SkillSquare from './SkillSquare/SkillSquare'
import katy from '../../assets/katy.png'

interface Props {}

function HeroSection(props: Props) {
    const {} = props

    return (
        <div className='background'>
            <div className='skills-grid'>
                <SkillSquare />
                <SkillSquare />
                <SkillSquare />
                <SkillSquare />
                <div className='katy'><img src={katy} alt="Image of Katy"></img></div>
            </div>
        </div>
    )
}

export default HeroSection