import './SignIn.css'

export default function SignIn() {
    return (
        <>
            <form className="sign-in-form">
                <h2>Sign In</h2>
                <label for="email">Email</label>
                <input type="email" id="email" name="email" />
                <label for="password">Password</label>
                <input type="password" id="password" name="password" />
                <button type="submit" value="Sign In"/>
            </form>
        </>
    )
}