import styles from "./ProjectsPage.module.css";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import projectsData from "../../data/projects.json";
import Footer from "../../components/Footer/Footer";

function ProjectsPage() {
    return (
        <div className={styles.content}>
            <div className={styles.container}>
                {projectsData.map((project) => (
                    <div key={project.id} className={styles.element}>
                        <ProjectCard 
                            title={project.title}
                            description={project.description}
                            phases={project.phases}
                            image={require(`../../images/${project.image}`)}
                            slogan={project.slogan}
                            link={project.link}
                        />
                    </div>
                ))}
            {/* <Footer/> */}
            </div>
        </div>
    )
}

export default ProjectsPage;