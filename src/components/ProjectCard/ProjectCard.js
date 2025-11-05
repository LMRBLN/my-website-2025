import styles from "./ProjectCard.module.css";
import { Link } from "react-router-dom";

function ProjectCard ({title, description, phases, image, slogan, link}) {
    return (
        <Link to={link} className={styles.projectCard}>
            <div className={styles.imageWrapper}>
                <img src={image} alt={title} className={styles.image} />
                <div className={styles.slogan}> {slogan}</div>
            </div>
            <div className={styles.aboutProject}>
                <div className={styles.titleAndDescription}>
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>
                <p className={styles.phases}>{phases}</p>
            </div>
        </Link>
    )
}

export default ProjectCard;