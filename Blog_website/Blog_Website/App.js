import React, { useState } from 'react'
import { BrowserRouter as Router , Routes , Route , Link } from 'react-router-dom'
import Home from './pages/Home'
import CreatePost from './pages/CreatePost'
import Login from "./pages/Login";
import  "./App.css" ;
import { signOut } from 'firebase/auth';
import { auth} from './firebase-config';
function App() {
    const [isAuth , setIsAuth] = useState(localStorage.getItem('isAuth'));

    const signUserOut = () => {
        signOut(auth).then(() => {
            localStorage.clear();
            setIsAuth(false);
            window.location.pathname = "/login";
        });
    };
  return (
     <Router>
        <nav>
            <Link to = "/" > Home </Link>
            <Link to = "/createPost" > CreatePost </Link>
            { !isAuth ? (<Link to = "/login" > Login </Link>) : ( 
                <>
            <button className='log-out' onClick={signUserOut}> Log Out</button> 
            </> )}
        </nav>
        <Routes>
            <Route path = '/' element = {<Home isAuth = {isAuth}/>} />
            <Route path = '/createPost' element = {<CreatePost isAuth={isAuth}/>} />
    <Route path='/login' element ={<Login setIsAuth = {setIsAuth} />} />
        </Routes>
     </Router>
  )
}

export default App