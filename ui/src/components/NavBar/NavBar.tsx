import './NavBar.css'

interface Props {}

function NavBar(props: Props) {
    const {} = props

    return (
        <header>
            <span className='mouse-icon'>🐭</span>
            <span className='logo'>KatyCodesStuff</span>
            
            <span className='navigation-links'>
                <a href='/'>About</a>
                <a href='/'>Hire me</a>
                <a href='/'>Partnerships</a>
                <a href='/'>Get in touch</a>
                </span>
        </header>
    )
}

export default NavBar
