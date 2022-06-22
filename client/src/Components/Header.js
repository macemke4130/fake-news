import React from 'react';

// Styles
import "./header.css"

// Assets
import logo from "../Assets/logo.svg";

function Header() {

    return (
        <header>
            <nav id="headerNav">
                <div id="headerNavWrapper">
                    <a id="headerHomeLink" href="/" aria-label="home link" >
                        <img src={logo} />
                        <div id="headerSiteTitle">Fake News</div>
                    </a>
                    <div id="headerMenu">
                        <a href="/politics">Politics</a>
                        <a href="/business">Business</a>
                        <a href="/style">Style</a>
                        <a href="/travel">Travel</a>
                        <a href="/technology">Technology</a>
                        <a href="/health">Health</a>
                        <a href="/opinion">Opinion</a>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;