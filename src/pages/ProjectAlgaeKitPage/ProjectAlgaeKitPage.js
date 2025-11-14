import ProjectModal from "../../components/ProjectModal/ProjectModal";
import styles from "./ProjectAlgaeKitPage.module.css"
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
                        <p>
                            I developed the algae experimentation kit as part of my master's thesis in collaboration with the algae producer Roquette Klötze GmbH & Co. KG, represented by Jörg Ullmann, who kindly provided most of the raw materials (e.g., starter cultures) and offered his expert biological feedback. Besides the goal of developing a concept with real market potential, the thesis also aims to address the following research question: To what extent can didactic goals be achieved through an educational game, and what factors must be considered in its development? I worked on this project for 5 months.
                        </p>
                    </div>
                    <div>
                        <h4>Idea</h4>
                        <p className="highlighted">
                            The alga can be used to illustrate various sustainability topics relevant to the future. With the experimentation kit, children can learn about biological principles and their own role in the environment in a playful way at an early age. Embedded in a fantasy game story, they undergo various experiments, levels, and topics, overseeing the cultivation and harvest of algae.
                        </p>
                    </div>
                    <div>
                        <h4>Reflection</h4>
                        <p>
                            The algae experimentation kit has great potential to be further developed into a marketable product. The following steps would include testing the kit with more persons of the target group (children aged 8-12) to gather further feedback on usability, engagement, and educational value. Additionally, refining the packaging and instructions based on user feedback would be essential. Collaborating with educational institutions or environmental organizations can also help promote and distribute the kit effectively. Additionally, further research is needed to enhance the durability of the starter culture, as this is an issue affecting production and distribution logistics, according to the toy manufacturers with whom we have been in contact.
                        </p>
                    </div>

                </section>
            </ProjectModal>
            
        </div>
    )
}

export default ProjectAlgaeKitPage;
