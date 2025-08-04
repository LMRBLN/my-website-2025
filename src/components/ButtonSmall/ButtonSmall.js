import styles from "./ButtonSmall.module.css";

function ButtonSmall({ text, onClick }) {

    return (
        <button onClick={onClick} className={styles.buttonSmall}> 
            <h3>{text}</h3> 
            <svg width="11" height="6" viewBox="0 0 11 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path id="Polygon 2" d="M5.5 6L0.73686 5.64421e-08L10.2631 8.89256e-07L5.5 6Z" fill="white"/>
            </svg>
        </button>
    )

}

export default ButtonSmall;