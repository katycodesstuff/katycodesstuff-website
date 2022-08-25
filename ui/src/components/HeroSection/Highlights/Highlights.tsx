import './Highlights.css'

interface SkillHighlightProps {
    HighlightedText?: string
    HighlightedImage?: { asset: string, altText: string }
    SubTextHtml: string
}

interface BadgesHighlightProps {
   icons: { asset: string, altText: string }[]
}

export function SkillHighlight(props: SkillHighlightProps) {
    const {HighlightedText, HighlightedImage: image, SubTextHtml} = props

    return (
        <div className='skill-square'>
            {HighlightedText ? <div className='highlighted-value'>{HighlightedText}</div>
            : <div className='highlighted-value'>{<img src={image?.asset} alt={image?.altText} title={image?.altText} />}</div>}
            <div className='subtext' dangerouslySetInnerHTML={{__html: SubTextHtml}}></div>
        </div>
    )
}

export function BadgesHighlight(props: BadgesHighlightProps) {
    const { icons } = props

    return (
        <div className='skill-square'>
            <div className='badge-grid'>
                {icons.map(i => <img src={i.asset} alt={i.altText} title={i.altText} />)}
            </div>
        </div>
    )
}