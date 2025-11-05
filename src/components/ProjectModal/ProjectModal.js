import styles from "./ProjectModal.module.css";
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import projectsData from '../../data/projects.json';

function ProjectModal ({id, children }) {
    const { projectId } = useParams();
    const navigate = useNavigate();
    const [projectData, setProjectData] = useState(null);

    useEffect(() => {
        const effectiveId = id ?? projectId;
        if (!effectiveId) {
            setProjectData(null);
            return;
        }
        const foundProject = projectsData.find(p => String(p.id) === String(effectiveId));
        setProjectData(foundProject || null);
    }, [id, projectId]);

    // Ableiten der Werte allein aus projectData
    const finalTitle = projectData?.title || '';
    const finalDescription = projectData?.description || '';
    const finalImage = projectData?.image ? require(`../../images/${projectData.image}`) : null;
    const finalSlogan = projectData?.slogan || '';
    const finalPhases = projectData?.phases || '';

    return (
        <div className={styles.modalBackground}>

        <div className={styles.content}>
            <div className={styles.aboutProject}>
                <div className={styles.titleAndDescription}>
                    <h3>{finalTitle}</h3>
                    <p>{finalDescription}</p>
                </div>
                <div className={styles.phasesAndClose}>
                    {finalPhases && (
                            <p className={styles.phases}>{finalPhases}</p>
                        )}
                    <button className={styles.closeButton} onClick={() => navigate('/projects')} aria-label="Zurück zur Projekte-Übersicht">
                        <svg viewBox="0 0 24 24" width="20" height="20">
                            <line x1="18" y1="6" x2="6" y2="18" stroke="black" strokeWidth="2" />
                            <line x1="6" y1="6" x2="18" y2="18" stroke="black" strokeWidth="2" />
                        </svg>
                </button>
                </div>
            </div>
            <div className={styles.scrollContent}>
                <div className={styles.imageWrapper}>
                    {finalImage && (
                        <img src={finalImage} alt={finalTitle} className={styles.image} />
                    )}
                    <div className={styles.slogan}>{finalSlogan}</div>

                    <a href="#main">
                        <svg className={styles.arrow}
                            xmlns="http://www.w3.org/2000/svg"
                            width="11" height="64"
                            viewBox="0 0 11 64" fill="currentColor">
                        <path d="M5.50049 63.2632L0.736814 57.2632L4.00049 57.2632L4.00049 0.263183L7.00049 0.263183L7.00049 57.2632L10.2632 57.2632L5.50049 63.2632Z"/>
                        </svg>
                    </a>
                </div>
                <div id="main"> 
                    {children}
                </div>
            </div>
        </div>
        </div>
    )
}

export default ProjectModal;