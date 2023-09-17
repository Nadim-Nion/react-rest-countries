import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className='header'>
            <h1>Welcome to Rest Countries API</h1>
            <nav className='navbar'>
                <a href="/home">Home</a>
                <a href="/countries">Countries</a>
                <a href="/about">About</a>
            </nav>
        </div>
    );
};

export default Header;