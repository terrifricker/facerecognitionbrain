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
    function onSubmitSignIn() {
        fetch('http://localhost:3001/signin', { 
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email: email,
                password: password
            })
        })
        .then(response => response.json())
        .then(data => {
            if(data === 'Success'){
                handleSignIn()
            }
        })
        .catch(error => console.error(error))
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
                    onClick={onSubmitSignIn}>
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