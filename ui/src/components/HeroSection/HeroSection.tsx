import React from 'react'
import './HeroSection.css'
import SkillHighlight, { BadgesHighlight } from './Highlights/Highlights'
import katy from '../../assets/katy.png'

interface Props {}

function HeroSection(props: Props) {
    const {} = props

    let icons = []
    icons.push({asset:katy, altText:'skill1'})
    icons.push({asset:katy, altText:'skill2'})
    icons.push({asset:katy, altText:'skill3'})
    icons.push({asset:katy, altText:'skill4'})
    icons.push({asset:katy, altText:'skill5'})
    icons.push({asset:katy, altText:'skill6'})
    return (
        <div className='background'>
            <h1 className='logo-large'>KatyCodesStuff</h1>
            <div className='skills-grid'>
                <SkillHighlight HighlightedText='🇬🇧' SubTextHtml='Senior Software Developer | Team Lead | Technical Lead' />
                <BadgesHighlight rows={2} columns={3} icons={icons} />
                <SkillHighlight HighlightedText='5' SubTextHtml='years experience <br />building enterprise-scale solutions' />
                <SkillHighlight HighlightedText='18K' SubTextHtml='Twitter followers' />
                <div className='katy'><img src={katy} alt="Image of Katy"></img></div>
            </div>
        </div>
    )
}

export default HeroSection