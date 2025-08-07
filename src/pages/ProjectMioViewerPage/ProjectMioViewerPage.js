import ProjectModal from "../../components/ProjectModal/ProjectModal";
import styles from "./ProjectMioViewerPage.module.css"
import ImageProjectRumble from "../../images/project_rumble.png";

function ProjectMioViewerPage() {
    return (
        <div className={styles.content}>
            <ProjectModal
                        title="MIO Viewer" 
                        description="standardized displaying modules for medical records"
                        phases="Research | Design | Testing" 
                        image={ImageProjectRumble}
                        slogan="How to not get lost in the tabs jungle while browsing for the best deal?"
            />
        </div>
    )
}

export default ProjectMioViewerPage;