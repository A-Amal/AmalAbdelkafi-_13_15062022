
import { NavLink } from 'react-router-dom'
import argentBankLogo  from '../assets/argentBankLogo.png'
import Icon from './Icon'
import {useDispatch, useSelector} from "react-redux";
import {authSelector} from "../redux/AuthSelectors";
import {authLogout} from "../redux/AuthActions";


function Header() {
    const {isAuthenticated, user} = useSelector(authSelector)
    const dispatch = useDispatch()
    return (
           <nav className="header-nav">
                <NavLink to="/"  className="header-nav-logo">
                   <img className="main-nav-logo-image" src={argentBankLogo} alt="Argent Bank Logo" />
                   <h1 className="sr-only">Argent Bank</h1>
                </NavLink>

              <ul className="header-nav-menu">
                   {isAuthenticated && (<>
                       <NavLink className="nav-link" to="/dashboard">
                           <li className="header-nav-menu-item">
                               <Icon name="user-circle" />
                               {user.firstName}
                           </li>
                       </NavLink>
                       <NavLink to="/" className="nav-link" onClick={() => dispatch(authLogout())}>
                           <li className="header-nav-menu-item">
                               <Icon name="sign-out" />
                               Sign Out
                           </li>
                       </NavLink>
                   </>)}
                   {!isAuthenticated && (<>
                       <NavLink className="nav-link" to="/login">
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
