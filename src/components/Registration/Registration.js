import './Registration.css'
import { useState } from 'react'

export default function Registration({handleRegister}) {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    return (
        <>
            <form className="registration-form">
                <h2>Register</h2>
                <label>
                    Name <input name="name"/>
                </label>
                <label>
                    Email <input type="email" name="email"/>
                </label>
                <label>
                    Password <input type="password" name="password"/>
                </label>
                <button 
                    type="submit"
                    onClick={handleRegister}>
                    Register</button>
            </form>
        </>
    )
}