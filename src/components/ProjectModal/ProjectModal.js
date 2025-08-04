import styles from "./ProjectModal.module.css";


function ProjectModal ({title, description, image, slogan, context, idea, technologies, process, reflection, link }) {
    return (
        <div className={styles.content}>
            <div className={styles.aboutProject}>
                <h3>{title}</h3>
                <p>{description}</p>
                <button className="closeButton" aria-label="Modal schließen">
                      <svg viewBox="0 0 24 24" width="20" height="20">
                        <line x1="18" y1="6" x2="6" y2="18" stroke="black" strokeWidth="2" />
                        <line x1="6" y1="6" x2="18" y2="18" stroke="black" strokeWidth="2" />
                    </svg>
                </button>
            </div>
            <div className={styles.scrollContent}>

                <div className={styles.imageWrapper}>
                    <img src={image} alt={title} className={styles.image} />
                    <div className={styles.slogan}> {slogan}</div>
                    <a href="#main">
                        <svg className={styles.arrow} xmlns="http://www.w3.org/2000/svg" width="11" height="64" viewBox="0 0 11 64" fill="none">
                        <path d="M5.50049 63.2632L0.736814 57.2632L4.00049 57.2632L4.00049 0.263183L7.00049 0.263183L7.00049 57.2632L10.2632 57.2632L5.50049 63.2632Z" fill="#161616"/>
                        </svg>
                    </a>
                </div>
                <div id="main"> </div>
            </div>
        </div>
    )
}

export default ProjectModal;