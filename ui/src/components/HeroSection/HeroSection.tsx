import React from 'react'
import './HeroSection.css'
import SkillSquare from './SkillSquare/SkillSquare'

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
            </div>
        </div>
    )
}

export default HeroSection