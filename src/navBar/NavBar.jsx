import React from "react";
import { useState } from 'react';
import { Link } from "react-scroll";
import { FiMenu, FiX } from "react-icons/fi";
import './NavBar.css';


const NavBar = () => {
    const [open, setOpen] = useState(false);

    const onClickOpen = () => {
        setOpen(true);
    }
    const onClickClose = () => {
        setOpen(false);
    }
    return (
        <div className="nav-bar-container">
            <div className="menu-list">
                <Link className="logo-container" to="/" spy={true} smooth={true} offset={-100} duration={500}>
                    Karthi Exports
                </Link>
                <div className="menu-icon">
                    {open ? <FiX onClick={onClickClose} /> : <FiMenu onClick={onClickOpen} />}
                </div>
                <ul className={open ? "nav-links-active" : "nav-links"}>
                    <li ><Link onClick={onClickClose} className="nav-link" to='/' spy={true} smooth={true} offset={-100} duration={500}>Home</Link></li>
                    <li ><Link onClick={onClickClose} className="nav-link" to='product' spy={true} smooth={true} offset={-60} duration={500}>Product</Link></li>
                    <li ><Link onClick={onClickClose} className="nav-link" to='CashewBlog' spy={true} smooth={true} offset={-60} duration={500}>Blog</Link></li>
                    <li><Link onClick={onClickClose} className="nav-link" to='about-us' spy={true} smooth={true} offset={-60} duration={500}>About Us</Link></li>
                    <li ><Link onClick={onClickClose} className="nav-link" to='contact' spy={true} smooth={true} offset={-60} duration={500}>Contact</Link></li>
                </ul>
            </div>
        </div>
    )
}
export default NavBar;