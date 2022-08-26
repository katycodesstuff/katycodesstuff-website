import './HeroSection.css'
import { SkillHighlight, BadgesHighlight } from './Highlights/Highlights'
import katy from '../../assets/katy.png'
import csharp from '../../assets/icons/csharp.svg'
import react from '../../assets/icons/react.svg'
import angular from '../../assets/icons/angular.svg'
import azure from '../../assets/icons/azure.svg'
import k8s from '../../assets/icons/kubernetes.svg'
import docker from '../../assets/icons/docker.svg'
import ukflag from '../../assets/icons/uk.png'

function HeroSection() {

    let icons = []
    icons.push({asset:csharp, altText:'C#'})
    icons.push({asset:angular, altText:'Angular'})
    icons.push({asset:react, altText:'React'})
    icons.push({asset:azure, altText:'Azure'})
    icons.push({asset:k8s, altText:'Kubernetes'})
    icons.push({asset:docker, altText:'Docker'})

    return (
        <div className='background'>
            <h1 className='logo-large'>Katy Ashby</h1>
            <div className='skills-grid'>
                <SkillHighlight HighlightedImage={{asset: ukflag, altText: 'UK'}} SubTextHtml='Senior Software Developer | Team Lead | Technical Lead' />
                <BadgesHighlight icons={icons} />
                <SkillHighlight HighlightedText='5' SubTextHtml='years experience <br />building enterprise-scale solutions' />
                <SkillHighlight HighlightedText='18K+' SubTextHtml='Twitter followers' />
            </div>
            <div className='katy'><img src={katy} alt="Katy"></img></div>
        </div>
    )
}

export default HeroSection