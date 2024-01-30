

import './Header.css'
import resume from '../../assets/pasharesume.pdf'

function Header() {
    return (
        <aside className='navbar-vertical'>
            <div className='brand-logo'>
                <a href='/' className='text-light'>Pasha Ghods</a>
            </div>
            <nav className='nav flex-column'>
                <a className='nav-link' href='/'>
                    <i className='fas fa-home'></i> Home
                </a>

                <a className='nav-link' href='/contact'>
                    <i className='fas fa-envelope'></i> Contact Me
                </a>
                <a className='nav-link' href={resume} download>
                    <i className='fas fa-file-alt'></i> My Resume
                </a>

            </nav>
        </aside>
    );
}



export default Header;
