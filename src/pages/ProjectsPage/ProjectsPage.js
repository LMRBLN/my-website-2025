import styles from "./ProjectsPage.module.css";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import ImageProjectRumble from "../../images/project_rumble.png";
import ImageProjectAlgaeKit from "../../images/project_algaekit.png";
import ImageProjectGiraffe from "../../images/project_giraffe.png";
import ImageProjectInflatablePlaypen from "../../images/project_playpen.jpg";
import ImageProjectSecurityReporting from "../../images/project_reporting.png";
import ImageProjectMioViewer from "../../images/project_mioviewer.png"

function ProjectsPage() {

    return (
        <div className={styles.content}>
            <div className={styles.container} >
                <div className={styles.element}> 
                    <ProjectCard 
                        title="MIO Viewer" 
                        description="standardized displaying modules for medical records"
                        phases="Research | Design | Testing" 
                        image={ImageProjectMioViewer}
                        slogan="How to not get lost in the tabs jungle while browsing for the best deal?"
                        link="/projects/mioviewer"
                    />
                </div>
                <div className={styles.element}> 
                    <ProjectCard 
                        title="Rumble" 
                        description="eventplanning tool for mobile"
                        phases="Idea | Design | Web Development" 
                        image={ImageProjectRumble}
                        slogan="How to not get lost in the tabs jungle while browsing for the best deal?"
                        link="/projects/rumble"
                    />
                </div>
                <div className={styles.element}> 
                    <ProjectCard 
                        title="Giraffe" 
                        description="web shopping assistant"
                        phases="Idea | Design | Web Development" 
                        image={ImageProjectGiraffe}
                        slogan="How to not get lost in the tabs jungle while browsing for the best deal?"
                        link="/projects/giraffe"
                    />
                </div>
                <div className={styles.element}> 
                    <ProjectCard 
                        title="Security Central" 
                        description="report creation and editing tool"
                        phases="Research | Design | Testing" 
                        image={ImageProjectSecurityReporting}
                        slogan="How to not get lost in the tabs jungle while browsing for the best deal?"
                        link="/projects/securitycentral"                    
                    />
                </div>
                <div className={styles.element}> 
                    <ProjectCard 
                        title="Algae Kit" 
                        description="hands on learning game for children"
                        phases="Research | Design | Manufacturing | Testing" 
                        image={ImageProjectAlgaeKit}
                        slogan="How to not get lost in the tabs jungle while browsing for the best deal?"
                        link="/projects/algaekit"                    
                    />
                </div>
                <div className={styles.element}> 
                    <ProjectCard 
                        title="Air Yard"
                        description="inflatable playpen to go" 
                        phases="Research | Design | Manufacturing | Testing" 
                        image={ImageProjectInflatablePlaypen}
                        slogan="How to not get lost in the tabs jungle while browsing for the best deal?"
                        link="/projects/airyard"                    
                    />
                </div>
            </div>

            {/* <ProjectModal title="MIO Viewer" description="Research | Design | Testing" image={ImageProjectRumble} slogan={"How to not get lost in the tabs jungle while browsing for the best deal?"}> asdjhabsdjhasb </ProjectModal> */}
        </div>
    )

}

export default ProjectsPage;