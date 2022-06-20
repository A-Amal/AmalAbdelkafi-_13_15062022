import argentBankLogo  from '../assets/argentBankLogo.png'
import Icon from './Icon'


function Header() {
    return (
                   <nav className="main-nav">
                                       <img
                                           className="main-nav-logo-image"
                                           src={argentBankLogo}
                                           alt="Argent Bank Logo"
                                       />
                                       <h1 className="sr-only">Argent Bank</h1>

                                   <div>
                                       <a className="main-nav-item">
                                       <Icon name="user-circle" />
                                           <span style={{marginLeft:5}}> Sign In </span>
                                       </a>
                                   </div>
                               </nav>
     )
}

export default Header
