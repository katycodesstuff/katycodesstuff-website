import { NavLink } from 'react-router-dom'
import './NavMenu.css'
import ClearIcon from '@mui/icons-material/Clear';

interface Props {
    links: { to: string, title: string }[]
    isVisible: boolean
    setToggle: any
}

function NavMenu(props: Props) {
    const {links, isVisible, setToggle} = props

    return (
        <div className={`navigation-menu ${isVisible ? 'navigation-menu-open': '' }`}>
            {links.map((link, i) => 
            <div key={i} className='navigation-menu-item'>
                <NavLink to={link.to} className={activePageFunc} onClick={() => onClickExit(setToggle)}>{link.title}</NavLink>
            </div>)}
            <span className='navigation-menu-exit-icon' onClick={() => onClickExit(setToggle)}>
                <ClearIcon />
            </span>
        </div>
    )
}

var activePageFunc: ((props: any) => string) = ({isActive}) => (isActive ? 'navigation-menu-active' : '')

function onClickExit(setToggle: any) {
    setToggle(false)
}

export default NavMenu
