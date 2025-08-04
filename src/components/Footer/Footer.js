import styles from "./Footer.module.css"

function Footer ({height}) {
    return (
        <div className={styles.footer}>
            <span>&copy; </span> 2025 Lara Rockenstein
        </div>
    )
}

export default Footer;