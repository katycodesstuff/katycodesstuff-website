import './NavButton.css'

interface Props {
    href: string
    title: string
}

function NavButton(props: Props) {
    const {href, title} = props

    return (
        <a className='navigation-button' href={href} title={title}>
            <div className='navigation-button'>{title}</div>
        </a>
    )
}

export default NavButton
