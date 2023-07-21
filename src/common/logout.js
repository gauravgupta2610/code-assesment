const Logout = ({navigate}) => {

    return (
        <button onClick={() => {
            localStorage.clear()
            navigate('/')
        }}>
            LOGOUT
        </button>
    )
}

export default Logout;