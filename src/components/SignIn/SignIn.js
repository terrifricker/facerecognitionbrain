import './SignIn.css'

export default function SignIn() {
    return (
        <>
            <form className="sign-in-form">
                <h2>Sign In</h2>
                <label>
                    Email <input type="email" name="email"/>
                </label>
                <label>
                    Password <input type="password" name="password"/>
                </label>
                <button type="submit">Sign In</button>
            </form>
        </>
    )
}