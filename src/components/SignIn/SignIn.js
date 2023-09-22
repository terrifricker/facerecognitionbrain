import './SignIn.css'

export default function SignIn({ route , handleSubmit, handleRegister}) {

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
                <button 
                    type="submit"
                    onClick={handleSubmit}>
                    Sign In
                </button>
                <p 
                    onClick={handleRegister}>
                    Need to Register?
                </p>
            </form>
        </>
    )
}