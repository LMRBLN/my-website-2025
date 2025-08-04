import styles from "./ProjectCard.module.css";

function ProjectCard ({title, description, image}) {
    return (
        <div className={styles.projectCard}>
            <div className={styles.imageWrapper}>
                <img src={image} alt={title} className={styles.image} />
            </div>
            <div className={styles.aboutProject}>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default ProjectCard;