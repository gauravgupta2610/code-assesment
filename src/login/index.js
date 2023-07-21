import { useEffect, useState } from 'react';
import '../App.css';
import { AuthenticateLogin } from '../services';
import { urlNavigation } from '../utils/helper';
import { useNavigate } from 'react-router-dom';


const Login = () => {

    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const status = localStorage.getItem('loginStatus')
    const currentrole= localStorage.getItem('loginRole')
    const navigate = useNavigate();

    const check = window.location.pathname

    const checkLogin =()=>{
        if (status && (check === '/')){
            return window.location.pathname = `/${currentrole}`
        }
        if (!status && (check !== '/') ) {
            return window.location.pathname = '/'
        }
    }

    const handleLogin = () => {
        const payload = {
            userName: userName,
            password: password
        }
        const res = AuthenticateLogin(payload)
        if (res) {
            localStorage.setItem('loginStatus', true)
            localStorage.setItem('loginRole', res.role)
            urlNavigation(navigate, res.role)
        } else {
            setError('Invalid user login details')
        }
    }

    useEffect(()=>{
        checkLogin()
    }, [check])

    return (
        <div className="Homepage">
            <div className='LoginBox'>
                <div className='BoxHeader'>Login </div>
                <div className='Form'>
                    <div>
                        <span >Username </span>{'  '}
                        <input 
                            type="text"
                            value={userName}
                            onChange={(e) => { 
                                setUserName(e.target.value); 
                                setError('') 
                            }} 
                        />
                    </div>
                    <div>
                        <span>Password </span>{'  '}
                        <input 
                            type="password" 
                            value={password} 
                            onChange={(e) => { 
                                setPassword(e.target.value);
                                setError('') 
                            }} 
                        />
                    </div>
                    {error && <span style={{ color: 'red', marginRight:'60px' }}>{error}</span>}
                    <div>
                        <button onClick={handleLogin}>LOGIN</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;