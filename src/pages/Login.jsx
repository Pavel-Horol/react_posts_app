import React from 'react'
import { useContext } from 'react'
import MyButton from '../components/Ui/Button/MyButton'
import MyInput from '../components/Ui/input/MyInput'
import { AuthContext } from '../context'

const Login = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext)
    const login = (event) => {
        event.preventDefault()
        setIsAuth(true)
        localStorage.setItem('auth', true)
    }
  return (
    <div>
        <h1>Login page</h1>
        <form onSubmit={login}>
            <MyInput type = "text" placeholder='Enter login'/>
            <MyInput type = "text" placeholder='Enter password'/>
            <MyButton>Login</MyButton>
        </form>
    </div>
  )
}

export default Login