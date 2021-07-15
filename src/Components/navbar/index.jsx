import React from 'react';
import Logo from '../../assets/logo.png';
import './styles.scss';

const Navbar = () => {
    return (
        <>
            <div className="navbar">
                <div className="sections">
                    <span className="section">
                        Home
                    </span>
                    <span className="section">
                        About
                    </span>
                    <span className="section">
                        Work
                    </span>
                </div>
                <div className="logo">
                    <img src={Logo} alt="Val Diba Pink Logo" />
                </div>
                <div className="right-sections">
                    <span className="section">
                        Contact
                    </span>
                    <div className="language">
                        <span className="section">
                            EN
                        </span>
                        <span className="section">
                            ES
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar;
