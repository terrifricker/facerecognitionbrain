import './Navigation.css'

export default function Navigation({handleSignOut}) {
    return (
        <nav>
            <button 
                className="navigation-button"
                onClick={handleSignOut}>
                Sign Out
            </button>
        </nav>
    )
}