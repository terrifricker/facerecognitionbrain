import './Registration.css'
import { useState } from 'react'

export default function Registration({handleRegister, handleGoToSignIn}) {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function handleOnNameChange(event) {
        setName(event.target.value)
    }
    function handleOnEmailChange(event) {
        setEmail(event.target.value)
    }
    function handleOnPasswordChange(event) {
        setPassword(event.target.value)
    }
    function onSubmitRegister(event) {
        event.preventDefault()
        fetch('https://find-a-face-backend.onrender.com/register', { 
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                name: name,
                email: email,
                password: password
            })
        })
        .then(response => response.json())
        .then(data => {
            if(data.name === name){
                handleRegister(data)
            }
        })
        .catch(error => console.error(error))
    }

    return (
        <>
            <form className="registration-form">
                <h2>Register</h2>
                <label>
                    Name <input 
                            type="text"
                            name="name"
                            onChange={handleOnNameChange}
                    />
                </label>
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
                    onClick={onSubmitRegister}>
                    Register</button>
                <p id="signin-instead"
                    onClick={handleGoToSignIn}>
                    Sign in instead?
                </p>
            </form>
        </>
    )
}