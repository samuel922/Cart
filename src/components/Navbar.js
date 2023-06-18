import React from "react";

const Navbar = ({ count }) => {

        return (
            <nav className="nav">
                <div className="cartIconContainer">
                    <img className="cartIcon" src="https://cdn-icons-png.flaticon.com/128/1170/1170678.png" alt="cart icon" />
                    <span className="cartCount">{count}</span>
                </div>
            </nav>
        )
}


export default Navbar;