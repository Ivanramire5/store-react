import { useState } from 'react'
import { useAuth } from '../../context/AuthContext'

const Login = () => {
    const [username, setUserName] = useState('')
    const [password, setPassword] = useState('')

    const { login } = useAuth()

    const handleLogin= (e) => {
        e.preventDefault()

        login(username, password)


    }
    return (
        <div>
            <h1 className='LoginForm'>Login</h1>
            <form onSubmit={handleLogin}>
                <label className='FormularioDato'>
                    <h3 className='TextoFormulario'>username</h3>
                    <input type="text" value={username} onChange={(e) => setUserName(e.target.value)} />
                </label>
                <label className='FormularioDato'>
                    <h3 className='TextoFormulario'>password</h3>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </label>
                <button className='BotonForm'>Login</button>
            </form>
        </div>
    )
}

export default Login