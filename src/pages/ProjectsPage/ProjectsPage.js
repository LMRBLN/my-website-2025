import styles from "./ProjectsPage.module.css";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import ImageProjectRumble from "../../images/project_rumble.png";
import ImageProjectAlgaeKit from "../../images/project_algaekit.png";
import ImageProjectGiraffe from "../../images/project_giraffe.png";
import ImageProjectInflatablePlaypen from "../../images/project_playpen.jpg";
import ImageProjectSecurityReporting from "../../images/project_reporting.png";
import ProjectModal from "../../components/ProjectModal/ProjectModal";



function ProjectsPage() {

    return (
        <div className={styles.content}>
            <div className={styles.container} >
                <div className={styles.element}> <ProjectCard title="MIO Viewer" description="Research | Design | Testing" image={ImageProjectRumble}/></div>
                <div className={styles.element}> <ProjectCard title="Rumble" description="Idea | Design | Web Development" image={ImageProjectRumble}/></div>
                <div className={styles.element}> <ProjectCard title="Giraffe" description="Idea | Design | Web Development" image={ImageProjectGiraffe}/></div>
                <div className={styles.element}> <ProjectCard title="Security Reporting" description="Research | Design | Testing" image={ImageProjectSecurityReporting}/></div>
                <div className={styles.element}> <ProjectCard title="Algae Kit" description="Research | Design | Manufacturing | Testing" image={ImageProjectAlgaeKit}/></div>
                <div className={styles.element}> <ProjectCard title="Inflatable playpen" description="Research | Design | Manufacturing | Testing" image={ImageProjectInflatablePlaypen}/></div>
            </div>

            {/* <ProjectModal title="MIO Viewer" description="Research | Design | Testing" image={ImageProjectRumble} slogan={"How to not get lost in the tabs jungle while browsing for the best deal?"}> asdjhabsdjhasb </ProjectModal> */}
        </div>
    )

}

export default ProjectsPage;