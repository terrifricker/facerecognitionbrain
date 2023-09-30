import './SignIn.css'
import { useState } from 'react'

export default function SignIn({handleSignIn, handleNeedToRegister}) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function handleOnEmailChange(event) {
        setEmail(event.target.value)
    }
    function handleOnPasswordChange(event) {
        setPassword(event.target.value)
    }
    return (
        <>
            <form className="sign-in-form">
                <h2>Sign In</h2>
                <label>
                    Email <input 
                        type="email" 
                        name="email"
                        onChange={handleOnEmailChange}
                    />
                </label>
                <label>
                    Password <input 
                        type="password" 
                        name="password"
                        onChange={handleOnPasswordChange}
                    />
                </label>
                <button 
                    type="submit"
                    onClick={handleSignIn}>
                    Sign In
                </button>
                <p 
                    onClick={handleNeedToRegister}>
                    Need to Register?
                </p>
            </form>
        </>
    )
}