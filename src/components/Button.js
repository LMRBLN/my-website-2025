const primaryStyle = {
    color: 'white',
    padding: "8px 20px",
    backgroundColor: 'var(--main-black)',
    borderRadius: 2,
    boxShadow: "2px 2px 2px 0px rgba(0, 0, 0, 0.20)",

}

const secondaryStyle = {
    padding: "7px 19px",
    border: '1px solid var(--main-black)',
    backgroundColor: 'transparent',
    borderRadius: 2,
}

function Button({ text, onClick, showIcon, variant }) {


    return (
        <button onClick={onClick} style={variant === "secondary" ? secondaryStyle : primaryStyle}> 
            <h2> {text}</h2> 
            {showIcon && (
                <svg width="13" height="10" viewBox="0 0 13 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M7 9.52628L13 4.76314L7 0V3.26314H0V6.26314H7V9.52628Z" fill={variant === "secondary" ? "var(--main-black)" : "white"} />
                </svg>
            )}
        </button>
    )

}

export default Button;