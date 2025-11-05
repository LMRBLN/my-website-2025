import ProjectModal from "../../components/ProjectModal/ProjectModal";
import styles from "./ProjectAirYardPage.module.css"
import FlipBook from "../../components/Flipbook/Flipbook";
import AirYardPDF from "../../data/booklet_playpen_de_schriftenersetzt.pdf";
// import AirYardPDF from "../../data/booklet_algae_de_schriftenersetzt.pdf";
// PDF aus public Ordner laden
// const AirYardPDF = '/files/booklet_airyard_de_schriftenersetzt.pdf';

function ProjectAirYardPage() {
    return (
        <div className={styles.content}>
            <ProjectModal id="airyard">
                <section>
                    <FlipBook file={AirYardPDF} />
                    <div>
                        <h4>Context</h4>
                        <p>This semester project (2019/02) has been realized together with a team of 8 other students in cooperation with an industry partner, the tarp manufacturer Intema GmbH & Co KG. My role was the team lead.</p>
                    </div>
                    <div>
                        <h4>Idea</h4>
                        <p className="quote">The inflatable playpen is not only responding to the toddler's needs. In a world where mobility and flexibility are more and more important, it allows the parents to organize and participate in (outdoor) activities without worrying about their child's security.</p>
                    </div>
                </section>
            </ProjectModal>
            

        </div>
    )
}

export default ProjectAirYardPage;
