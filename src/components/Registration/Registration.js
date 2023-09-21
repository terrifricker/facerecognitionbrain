import './Registration.css'

export default function Registration() {
    return (
        <>
            <form className="registration-form">
                <h2>Register</h2>
                <label for="name">Name</label>
                <input type="text" id="name" name="name" />
                <label for="email">Email</label>
                <input type="email" id="email" name="email" />
                <label for="password">Password</label>
                <input type="password" id="password" name="password" />
                <button type="submit" value="Sign In"/>
            </form>
        </>
    )
}