import React from 'react'
import { useContext } from 'react';
import { Route , BrowserRouter, Routes, Link, Redirect} from "react-router-dom";
import { AuthContext } from '../../../context';
import MyButton from '../Button/MyButton';

const Navbar = () => {
  const  {isAuth, setIsAuth} = useContext(AuthContext)
  const logout = () => {
    setIsAuth(false)
    localStorage.removeItem('auth')
  }
  return (
    <div className="navbar">
      <MyButton onClick= {logout} >Log out</MyButton>
				<div className="navbar__links">
					<Link to="/about">About site</Link>
					<Link to="/posts">Pages</Link>
				</div>
    </div>
  )
}

export default Navbar