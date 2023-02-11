import React from 'react'
import { Route , BrowserRouter, Routes, Link, Redirect} from "react-router-dom";
import About from '../../pages/About';
import Posts from '../../pages/Posts';
import Error from '../../pages/Error';
import PostIdPages from '../../pages/PostIdPages';
import { publicRoutes, privateRoutes } from '../../router/routes';
import Login from '../../pages/Login';
import { useContext } from 'react';
import { AuthContext } from '../../context';
import Loader from './loader/Loader';
const AppRouter = () => {
	const {isAuth, setIsAuth, isLoading} = useContext(AuthContext)
	if(isLoading){
		return <Loader/>
	}
    return (
       
			isAuth
				? <Routes>
					{privateRoutes.map(({path, component, id}) =>
					<Route element = {component} path = {path} key = {id}
					/>)}    
					<Route path = '*' to='/posts' element = {<Posts/>}></Route>    
				</Routes>
				: <Routes>
					{publicRoutes.map(({path, component, id}) =>
					<Route element = {component} path = {path} key = {id}
					/>)}
					<Route path = '*' to='/login' element = {<Login/>}></Route>    
					</Routes>
			
    )
}

export default AppRouter