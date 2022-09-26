import { NavLink } from 'react-router-dom'
import './NavBar.css'

function NavBar() {

    return (
        <header>
            <span className='mouse-icon'>🐭</span>
            <span className='logo'>KatyCodesStuff</span>
            
            <span className='navigation-links'>
                <NavLink to='/' className={({ isActive }) => (isActive ? 'navigation-links-active' : '')}>About</NavLink>
                <NavLink to='/partnerships' className={({ isActive }) => (isActive ? 'navigation-links-active' : '')}>Partnerships</NavLink>
                {/* <NavLink to='/random' className={({ isActive }) => (isActive ? 'navigation-links-active' : '')}>Get in touch</NavLink> */}
                </span>
        </header>
    )
}

export default NavBar
