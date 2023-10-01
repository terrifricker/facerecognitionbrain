import './Registration.css'
import { useState } from 'react'

export default function Registration({handleRegister}) {
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
                    onClick={handleRegister}>
                    Register</button>
            </form>
        </>
    )
}