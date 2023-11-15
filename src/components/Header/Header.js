import './Header.css'
import Logo from '../Logo/Logo.js'
import Registration from '../Registration/Registration.js'

export default function Header({handleGoToSignIn, handleGoToRegister, handleRegister}) {
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
            <Registration 
                handleRegister={handleRegister}
            />
        </>
    )
}