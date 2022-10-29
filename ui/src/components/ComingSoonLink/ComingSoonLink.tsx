import './ComingSoonLink.css'

interface Props {
    text: string
}

function ComingSoonLink(props: Props) {
    const {text} = props

    return (
        <span className='coming-soon-link tooltip'>
            {text}
            <span className='tooltiptext'>Page coming soon...</span>
        </span>
    )
}

export default ComingSoonLink
