import  { useState } from 'react';
import { Link, NavLink } from 'react-router-dom'
import argentBankLogo  from '../assets/argentBankLogo.png'
import Icon from './Icon'


function Header() {
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    return (
           <nav className="header-nav">
                <NavLink to="/" className="header-nav-logo">
                   <img className="main-nav-logo-image" src={argentBankLogo} alt="Argent Bank Logo" />
                   <h1 className="sr-only">Argent Bank</h1>
                </NavLink>

              <ul className="header-nav-menu">
                   {isAuthenticated && (<>
                       <NavLink to="/dashboard">
                           <li className="header-nav-menu-item">
                               <Icon name="user-circle" />
                               <p>username</p>
                           </li>
                       </NavLink>
                       <NavLink to="/">
                           <li className="header-nav-menu-item">
                               <Icon name="sign-out" />
                               Sign Out
                           </li>
                       </NavLink>
                   </>)}
                   {!isAuthenticated && (<>
                       <NavLink to="/login">
                           <li className="header-nav-menu-item">
                               <Icon name="user-circle" />
                               Sign In
                           </li>
                       </NavLink>
                   </>)}
               </ul>
           </nav>
     )
}

export default Header
