import './NavBar.css'

interface Props {}

function NavBar(props: Props) {
    const {} = props

    return (
        <>
        <h1>Technical</h1>
        <ul className='nav-bar-list'>
            <li>what i do</li>
            <li>download my CV</li>
            <li>my gitHub</li>
            <li>contact me</li>
        </ul>

        <h1>Community</h1>
        <ul className='nav-bar-list'>
            <li>about</li>
            <li>partnerships</li>
            <li>twitter</li>
            <li>blog</li>
            <li>media appearances</li>
        </ul>
        </>
    )
}

export default NavBar
