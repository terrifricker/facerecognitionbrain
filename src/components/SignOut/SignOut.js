export default function SignOut({handleSignOut}) {
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