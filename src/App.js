import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'//HashRouter
import Home from "./pages/Home";
import Footer from "./component/Footer";
import Header from "./component/Header"
import Login from "./pages/Login";
import User from "./pages/User";


function App() {
  return (
    <div >
        <Router>
            <Header/>
            <Routes>
                <Route path="/" exact element={<Home />}/>
                <Route path="/login" exact element={<Login />}/>
                <Route path="/dashboard" exact element={<User/>} />
                <Route path="*" element={<Navigate to={'/'} />}/>
            </Routes>
        </Router>
        <Footer/>
    </div>
  );
}

export default App;
