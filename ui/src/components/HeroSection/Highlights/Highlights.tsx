import './Highlights.css'

interface SkillHighlightProps {
    HighlightedText?: string
    SubTextHtml: string
}

interface BadgesHighlightProps {
   rows: number
   columns: number
   icons: { asset: string, altText: string }[]
}

function SkillHighlight(props: SkillHighlightProps) {
    const {HighlightedText, SubTextHtml} = props

    return (
        <div className='skill-square'>
            <div className='highlighted-value'>{HighlightedText}</div>
            <div className='subtext' dangerouslySetInnerHTML={{__html: SubTextHtml}}></div>
        </div>
    )
}

export function BadgesHighlight(props: BadgesHighlightProps) {
    const { icons } = props

    return (
        <div className='skill-square'>
            <div className='badge-grid'>
                {icons.map(i => <img src={i.asset} alt={i.altText}></img>)}
            </div>
        </div>
    )
}

export default SkillHighlight