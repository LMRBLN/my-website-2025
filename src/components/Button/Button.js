import styles from "./Button.module.css";

function Button({ text, onClick, showIcon, variant }) {

    return (
        <button onClick={onClick} className={variant === "primary" ? styles.primary : styles.secondary}> 

            <> {text}</> 
            {showIcon && (
                <svg className={styles.icon} width="13" height="10" viewBox="0 0 13 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M7 9.52628L13 4.76314L7 0V3.26314H0V6.26314H7V9.52628Z"
                    />
                </svg>
            )}
            
        </button>
    )

}

export default Button;