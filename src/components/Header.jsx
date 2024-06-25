import { Link } from 'react-router-dom'

function Header() {


    return (
        <header className="header">
            <h1>Cafe-Space</h1>
            <nav>
                <Link to='/' className="nav-link">Home</Link>
                <Link to='/finder' className="nav-link">Finder</Link>
                <Link to='/about' className="nav-link">About</Link>
                <Link to='/contact' className="nav-link">Contact</Link>
            </nav>
        </header>
    )
}

export default Header
