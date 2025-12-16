import ProjectModal from "../../components/ProjectModal/ProjectModal";
import styles from "./ProjectAirYardPage.module.css"
import FlipBook from "../../components/Flipbook/Flipbook";
import AirYardPDF from "../../data/booklet_playpen_de.pdf";

function ProjectAirYardPage() {
    return (
        <div className={styles.content}>
            <ProjectModal id="airyard">
                <section>
                    <FlipBook file={AirYardPDF} />
                    <div>
                        <h4>Context</h4>
                        <p>
                            I have realized this semester project as part of my industrial design studies in cooperation with an industry partner, the tarp manufacturer Intema GmbH & Co KG.
                        </p>
                    </div>
                    <div>
                        <h4>Idea</h4>
                        <p className="highlighted">
                            The inflatable playpen not only responds to the toddler's needs. In a world where mobility and flexibility are more and more important, it allows the parents to organize and participate in (outdoor) activities without worrying about their child's security.
                        </p>
                    </div>
                    <div>
                        <h4>Reflection</h4>
                        <p>
                            With a fully functioning prototype at hand, in future iterations, I would focus on testing with parents and toddlers to optimize the stability and the use of materials (to make the product even lighter). I see a lot of potential in additional extensions, such as play items and a sun protection module.
                        </p>
                    </div>
                </section>
            </ProjectModal>
            

        </div>
    )
}

export default ProjectAirYardPage;
