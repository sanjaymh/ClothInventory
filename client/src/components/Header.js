import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="container" >
            <nav className="navbar navbar-light bg-light" style={{display:"flex"}} >
            
                <span className="navbar-brand">Cloth Inventory</span>
                
                <Link className="nav-item" to="/add-cloth"> Add Cloth</Link>
            
            </nav>
        </div>
    )
}

export default Header;