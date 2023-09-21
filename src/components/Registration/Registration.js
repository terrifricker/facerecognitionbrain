import './Registration.css'

export default function Registration() {
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
                <button type="submit">Register</button>
            </form>
        </>
    )
}