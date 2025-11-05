import ProjectModal from "../../components/ProjectModal/ProjectModal";
import styles from "./ProjectAlgaeKitPage.module.css"
// import Booklet from "../../components/Booklet/Booklet";
import FlipBook from "../../components/Flipbook/Flipbook";
import AlgaeKitPDF from "../../data/booklet_algae_de_schriftenersetzt.pdf";


function ProjectAlgaeKitPage() {
    return (
        <div className={styles.content}>
            <ProjectModal id="algaekit">
                <section>
                    <FlipBook file={AlgaeKitPDF} />
                    <div>
                        <h4>Context</h4>
                        <p>I developed the algae experimentation kit as my master thesis in cooperation with the algae producer Roquette Klötze GmbH & Co KG, represented by Jörg Ullmann, who kindly provided most of the raw materials (eg. starter cultures) to me as well as his biology expert feedback. Besides the goal to work out a concept with real market potential, the thesis also aims to respond to the following research question: To what extent can didactic goals be achieved through an educational game and which factors have to be considered in its development? I worked on this project for 5 months.</p>
                    </div>
                    <div>
                        <h4>Idea</h4>
                        <p className="quote">The alga can be used to illustrate many sustainability topics that are relevant to the future. With the experimentation kit, children can learn about biological principles and their own role with regard to the environment and nature in a playful way at an early age. Embedded in an fantasy game story, they go through various experiments, levels and topics, taking care of the algae from cultivation to harvest.</p>
                    </div>

                </section>
            </ProjectModal>
            
        </div>
    )
}

export default ProjectAlgaeKitPage;
