// CREO LA NAVBAR CON I SUOI LINK 
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div className="Navbar">
            <ul>
                <Link to='/'>HOME</Link>
                <Link to='/todo'>TODO LIST</Link>
                <Link to='/blog'>BLOG</Link>
            </ul>
        </div>
    )
}

export default Navbar
