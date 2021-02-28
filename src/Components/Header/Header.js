import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <nav>
                <a href="/home">Home</a>
                <a href="/friends">Friends</a>
                <a href="/selected">Selected Friends</a>
            </nav>
            <div className='search-tab'>
            <input type="text"></input>
            <button>Search</button>
            </div>
            
        </div>
    );
};

export default Header;