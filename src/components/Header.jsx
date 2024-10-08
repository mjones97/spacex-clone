import { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import logo from '../assets/spacex-logo.png';
import { IoMenu, IoClose } from "react-icons/io5";
import "./Header.css";

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const shop = document.querySelector('.shop')

    const toggleMobileMenu = () => {
        
        if (shop) {
            shop.style.display = "none";
        }
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <div className={`navbar-custom ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
            <div className="navbar-container">
                <Navbar.Brand href="#home" className='logo'>
                    <img src={logo} alt="SpaceX Logo" />
                </Navbar.Brand>
                <Nav className={`navigation me-auto ${isMobileMenuOpen ? 'd-none d-md-flex' : 'desktop-menu'}`}>
                    <Nav.Link href="#falcon9">Falcon 9</Nav.Link>
                    <Nav.Link href="#falconHeavy">Falcon Heavy</Nav.Link>
                    <Nav.Link href="#dragon">Dragon</Nav.Link>
                    <Nav.Link href="#starship">Starship</Nav.Link>
                    <Nav.Link href="#humanSpaceflight">Human Spaceflight</Nav.Link>
                    <Nav.Link href="#rideshare">Rideshare</Nav.Link>
                    <Nav.Link href="#starshield">Starshield</Nav.Link>
                    <Nav.Link href="#starlink">Starlink</Nav.Link>
                </Nav>
                <Nav className="navigation-right align-items-center gap-2">
                    <Nav.Link href="#shop" className='shop'>Shop</Nav.Link>
                    <IoMenu className='mobile-menu-icon' onClick={toggleMobileMenu} />
                </Nav>
            </div>
            {isMobileMenuOpen && (
                <div className="mobile-menu">
                    <IoClose className="close-icon" onClick={toggleMobileMenu} />
                    <Nav className='mobile-nav d-flex flex-column gap-2'>
                        <div className="main-menu">
                            <Nav.Link href="#falcon9">Falcon 9</Nav.Link>
                            <Nav.Link href="#falconHeavy">Falcon Heavy</Nav.Link>
                            <Nav.Link href="#dragon">Dragon</Nav.Link>
                            <Nav.Link href="#starship">Starship</Nav.Link>
                            <Nav.Link href="#humanSpaceflight">Human Spaceflight</Nav.Link>
                            <Nav.Link href="#rideshare">Rideshare</Nav.Link>
                            <Nav.Link href="#starshield">Starshield</Nav.Link>
                            <Nav.Link href="#starlink">Starlink</Nav.Link>
                        </div>
                        <Nav.Link href="#mission">Mission</Nav.Link>
                        <Nav.Link href="#launch">Launches</Nav.Link>
                        <Nav.Link href="#career">Careers</Nav.Link>
                        <Nav.Link href="#updates">Updates</Nav.Link>
                        <Nav.Link href="#shop">Shop</Nav.Link>
                    </Nav>
                </div>
            )}
        </div>
    );
};

export default Header;
