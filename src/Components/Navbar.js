import React, {useState} from 'react';
import './Navbar.css'
import { Link } from 'react-router-dom';

function Navbar() {
    const [click, setClick] = useState(false);
  return (
    <div>
        <nav className="navbar">
            <div className="nav-container">
                <Link exact to= "/" className="nav-logo">
                    MEDIATER
                </Link>

                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-items'>
                        <Link exact to= "/" className="nav-links" onClick={()=> {setClick(!click);}}>Home</Link>
                    </li>
                    
                    
                    
                    <li className='nav-items'>
                        <Link exact to= "/contact" className="nav-links" onClick={()=> {setClick(!click);}}>Contact Us</Link>
                    </li>
                </ul>
                <div className='nav-icon' onClick={()=> {setClick(!click);}}>
                    <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar