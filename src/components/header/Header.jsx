import './Header.css'
import resume from '../../assets/mostrecent.pdf'
import { Link } from 'react-router-dom'
function Header() {
    return (
        <aside className='navbar-vertical'>
            <div className='brand-logo'>
                <Link to='/' className='text-light'>Pasha Ghods</Link>
            </div>
            <nav className='nav flex-column'>
                <Link className='nav-link' to='/'>
                    <i className='fas fa-home'></i> Home
                </Link>

                <Link className='nav-link' to='/contact'>
                    <i className='fas fa-envelope'></i> Contact Me
                </Link>
                <Link className='nav-link' to={resume} download>
                    <i className='fas fa-file-alt'></i> My Resume
                </Link>

            </nav>
        </aside>
    );
}



export default Header;
