import './NavBar.css'

function NavBar() {

    return (
        <header>
            <span className='mouse-icon'>🐭</span>
            <span className='logo'>KatyCodesStuff</span>
            
            <span className='navigation-links'>
                <a href='/'>About</a>
                <a href='/'>Hire me</a>
                <a href='/partnerships'>Partnerships</a>
                <a href='/#footer'>Get in touch</a>
                </span>
        </header>
    )
}

export default NavBar
