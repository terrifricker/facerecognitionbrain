import './Header.css'
import Logo from '../Logo/Logo.js'
import SignIn from '../SignIn/SignIn.js'

export default function Header({handleGoToSignIn, handleGoToRegister, handleSignIn}) {
    return (
        <>
            <Logo />
            <nav>
                <button 
                    className="navigation-button"
                    onClick={handleGoToSignIn}>
                    Sign In
                </button>
                <button 
                    className="navigation-button"
                    onClick={handleGoToRegister}>
                    Register
                </button>
            </nav>
            <h1>Magic Face Detection</h1>
            <SignIn 
                handleSignIn={handleSignIn}
                handleGoToRegister={handleGoToRegister}
        />
        </>
    )
}