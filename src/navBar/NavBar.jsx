import React from "react";
import { useState } from 'react';
import { Link } from "react-router-dom";
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
            <div className="notification-bar">
                Welcome to Pantruti Cashews
            </div>
            <div className="menu-list">
                <Link className="logo-container" to="/">
                    CashewNut
                </Link>
                <div className="menu-icon">
                    {open ? <FiX onClick={onClickClose} /> : <FiMenu onClick={onClickOpen} />}
                </div>
                <ul className={open ? "nav-links active" : "nav-links"}>
                    <li ><Link onClick={onClickClose} className="nav-link" to='/home'>Home</Link></li>
                    <li ><Link onClick={onClickClose} className="nav-link" to={'/Product'}>Product</Link></li>
                    <li ><Link onClick={onClickClose} className="nav-link" to={'/process'}>Process</Link></li>
                    <li><Link onClick={onClickClose} className="nav-link" to={'/about'}>About Us</Link></li>
                    <li ><Link onClick={onClickClose} className="nav-link" to={'/contact'}>Contact</Link></li>
                </ul>

            </div>
        </div>
    )
}
export default NavBar;