import React from "react";
import './navbar.css';

function Navbar() {
    return (
        <header>
            <nav className="navbar">
                <div className="main">
                    <a href="#home">
                        <span className="title">GeekFoods</span>
                    </a>


                    <div className="Btn-container">
                        <button className="getStarted">Get Started</button>
                    </div>

                    <div className="list-container">
                        <ul className="navbar-item">
                            <li className="navbar-list"><a href="Home">Home</a></li>
                            <li className="navbar-list"><a href="Quote">Quote</a></li>
                            <li className="navbar-list"><a href="Resturants">Resturants</a></li>
                            <li className="navbar-list"><a href="Foods">Foods</a></li>
                            <li className="navbar-list"><a href="Contact">Contact</a></li>
                        </ul>
                    </div>

                </div>
            </nav>
        </header>
    );
}

export default Navbar;