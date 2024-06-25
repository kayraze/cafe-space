import { Link } from 'react-router-dom'

function Header() {


    return (
        <header className="header">
            <h1>Cafe-Space</h1>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/finder'>Finder</Link>
                <Link to='/about'>About</Link>
                <Link to='/contact'>Contact</Link>
            </nav>
        </header>
    )
}

export default Header
