import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'//HashRouter
import Home from "./pages/Home";
import Footer from "./component/Footer";
import Header from "./component/Header"
import Login from "./pages/Login";
import User from "./pages/User";
import {useDispatch, useSelector} from "react-redux";
import {authSelector} from "./redux/AuthSelectors";
import {useEffect} from "react";
import {authAutoLogin} from "./redux/AuthActions";


function App() {
    const {isAuthenticated}= useSelector(authSelector)
    const dispatch = useDispatch()
    const token = localStorage.getItem('token')
    useEffect(() => {// Reconnect user
        if (token) dispatch(authAutoLogin(token))
    }, [])
    return (
    <div >
        <Router>
            <Header/>
            <Routes>
                <Route path="/" exact element={<Home />}/>
                <Route path="/login" exact element={<Login /> }/>
                <Route path="/dashboard" exact element={
                    isAuthenticated?<User/> :  <Navigate to={'/login'} />} />
                <Route path="*" element={<Navigate to={'/'} />}/>
            </Routes>
        </Router>
        <Footer/>
    </div>
  );
}

export default App;
