import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import NavMenu from '../NavMenu/NavMenu'
import './NavBar.css'

const navLinks = [
    { to: '/', title: 'About' },
    { to: '/partnerships', title: 'Partnerships' }
]

function NavBar() {

    const [navMenuIsToggled, setNavMenuIsToggled] = useState(false);

    return (
        <header>
            <div className='header-bar'>
                <span className='mouse-icon'>🐭</span>
                <span className='logo'>KatyCodesStuff</span>
                
                <span className='navigation-links'>
                    {navLinks.map((link, i) => <NavLink key={i} to={link.to} className={activePageFunc}>{link.title}</NavLink>)}
                </span>
                <span className='navigation-menu-icon' onClick={() => onToggleMenu(setNavMenuIsToggled)}>
                    🔗
                </span>
            </div>
            <NavMenu links={navLinks} isVisible={navMenuIsToggled} setToggle={setNavMenuIsToggled}></NavMenu>
        </header>
    )
}

var activePageFunc: ((props: any) => string) = ({isActive}) => (isActive ? 'navigation-links-active' : '')

function onToggleMenu(setNavMenuIsToggled: any) {
    setNavMenuIsToggled((previousState: boolean) => !previousState)
}

export default NavBar
