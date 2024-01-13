import React from 'react';


function Header() {
    return (
        <nav className='navbar navbar-expand-lg navbar-dark bg-dark custom-navbar'>
            <a className='navbar-brand' id='logo-name'>Pasha Ghods</a>
            <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarnav'>
                <span className='navbar-toggler-icon'></span>
            </button>
            <div className='collapse navbar-collapse' id='navbarNav'>
                <ol className='navbar-nav ml-auto'>
                    <li className='nav-item'>
                        <a className='nav-link' href='/'>Home</a>
                    </li>
                    <li className='nav-item'>
                        <a className='nav-link' href='/About'>About Me</a>
                    </li>
                    <li className='nav-item'>
                        <a className='nav-link' href='/contact'>Contact Me</a>
                    </li>
                </ol>
            </div>
            <div className='ml-auto'>
<a href='/resume' className='btn btn-outline-light'>My Resume</a>
            </div>
        </nav>
    );
}

export default Header;
