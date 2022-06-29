import Icon from "../component/Icon";
import "../styles/form.css"
import {useEffect, useState} from "react";
import {authSelector} from "../redux/AuthSelectors";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router";
import {authLogin} from "../redux/AuthActions";
/**
 * Login page
 * @component
 */
export default function Login() {
    const [userCompt, setUserCompt]=useState({
        email: '',
        password: '',
        remember: false,
    })
    const {isAuthenticated, loading, errorAuth} = useSelector(authSelector)
    const navigate = useNavigate();
    const dispatch = useDispatch()

    // Redirect on authentication
    useEffect(() => {
        if (isAuthenticated){
            navigate('/dashboard')
        }
    }, [isAuthenticated, navigate])

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(authLogin(userCompt))
    }
    console.log(errorAuth)
    return (
        <main className="main bg-dark">
            <section className="sign-in-content login">
                <div className="login-container">
                    <div className="form-header">
                        <div className="form-header-icon"><Icon name="user-circle" /></div>
                        <h1 className="form-header-title">Sign In</h1>
                    </div>
                    <form className="form-content"
                          onSubmit={handleSubmit}
                    >
                        <div className="form-wrapper">
                            <label htmlFor="email" className="form-label">Username</label>
                            <input
                                type="text"
                                id="email"
                                className="form-control"
                                value={userCompt.email}
                                disabled={loading && 'disabled'}
                                onChange={e => setUserCompt({...userCompt, email: e.target.value})}
                            />
                            {errorAuth && <p className={"form-error"}>Email doit être valide</p>}
                        </div>
                        <div className="form-wrapper">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input
                                type="password"
                                id="password"
                                className="form-control"
                                value={userCompt.password}
                                disabled={loading && 'disabled'}
                                onChange={(e)=>{
                                    const password = e.target.value;
                                    setUserCompt({...userCompt, ...{password }})
                                }}
                            />
                            {errorAuth && <p className={"form-error"}> mot de passe doit contenir au moins 3 caractères</p>}
                        </div>
                        <div className="form-check">
                            <input
                                type="checkbox"
                                id="remember-me"
                                className="form-check-input"
                                onChange={e => setUserCompt({...userCompt, remember: e.target.checked})}
                                disabled={loading && 'disabled'}
                            />
                            <label htmlFor="remember-me" className="form-check-label">Remember me</label>
                        </div>
                        <button
                            type="submit"
                            className="sign-in-button"
                            disabled={loading && 'disabled'}
                        >Sign In</button>
                    </form>
                </div>
            </section>
        </main>
    )
}
