import React from "react";
import '../assets/css/style.css';

function Header ({ currentPage, handlePageChange }) {
    return (
        <div className="header">
            <div className="jumbotron jumbotron-fluid">
                <h1 className="display-4">Mako Seraphina Silver</h1>
            </div>
            <div>
                <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <a href="#portfolio" onClick={() => handlePageChange('Portfolio')} className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}>Portfolio</a>
                    </li>
                    <li className="nav-item">
                        <a href="#contact" onClick={() => handlePageChange('Contact')} className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}>Contact</a>
                    </li>
                    <li className="nav-item">
                        <a href="#aboutme" onClick={() => handlePageChange('AboutMe')} className={currentPage === 'AboutMe' ? 'nav-link active' : 'nav-link'}>About Me</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header;