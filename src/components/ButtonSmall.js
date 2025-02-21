const style = {
    color: 'white',
    padding: "4px 16px",
    backgroundColor: 'var(--main-black)',
    borderRadius: 11,
    boxShadow: "2px 2px 2px 0px rgba(0, 0, 0, 0.20)",
    display: 'inline-flex',
    alignItems: 'center',
    gap: 8,
    height: 'fit-content'
}

function ButtonPrimarySmall({ text, onClick }) {

    return (
        <button onClick={onClick} style={style}> 
            <h3>{text}</h3> 
            <svg width="11" height="6" viewBox="0 0 11 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path id="Polygon 2" d="M5.5 6L0.73686 5.64421e-08L10.2631 8.89256e-07L5.5 6Z" fill="white"/>
            </svg>
        </button>
    )

}

export default ButtonPrimarySmall;