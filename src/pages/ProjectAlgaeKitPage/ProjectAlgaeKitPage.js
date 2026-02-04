import ProjectModal from "../../components/ProjectModal/ProjectModal";
import styles from "./ProjectAlgaeKitPage.module.css"
import FlipBook from "../../components/Flipbook/Flipbook";
import AlgaeKitPDF from "../../data/booklet_algae_de.pdf";


function ProjectAlgaeKitPage() {
    return (
        <div className={styles.content}>
            <ProjectModal id="algaekit">
                <section>
                    <FlipBook file={AlgaeKitPDF} />
                    <div>
                        <h4>Context</h4>
                        <p>
                            I developed the algae experimentation kit as part of my master's thesis in collaboration with the algae producer Roquette Klötze GmbH & Co. KG, represented by Jörg Ullmann, who kindly provided most of the raw materials (e.g., starter cultures) and offered his expert biological feedback. Besides the <strong>goal of developing a concept with real market potential</strong>, the thesis also aims to address the following research question: To what extent can didactic goals be achieved through an educational game, and what factors must be considered in its development? I worked on this project for 5 months.
                        </p>
                    </div>
                    <div>
                        <h4>Idea</h4>
                        <p className="highlighted">
                            The alga can be used to illustrate various sustainability topics relevant to the future. With the experimentation kit, children can learn about biological principles and their own role in the environment in a playful way at an early age. Embedded in a fantasy game story, they undergo various experiments, levels, and topics, overseeing the cultivation and harvest of algae.
                        </p>
                    </div>

                    <div>
                        <h4>Process</h4>
                        <p>
                        First, I identified the <strong>educational potential</strong> of the topic and explored possible directions for its development. I then <strong>researched existing experiments</strong>, tested them myself, and iteratively refined them to ensure they were suitable for children, practically feasible, and closely aligned with the subject matter. I organized them to form a coherent narrative arc, ranging from planting to harvesting.
                        <br></br>       
                        Building on this, I developed a game concept and complementary mechanics that transformed the experiments into a story-driven and engaging experience, including elements such as levels, rewards, and storytelling. In parallel, I designed the concept for the physical product so that it met the requirements of both the experiments and the game concept, while remaining practical for use at home: The product was fully designed with a visual language derived from the game’s aesthetic, while carefully considering ergonomic aspects. 
                        <br></br>       

                        I then specified the technical design in sufficient detail to allow manufacturing as an injection-molded part and to accommodate all required technical components, such as the pump and lighting system.
                        <br></br>
                        Subsequently, I built and tested the prototype and, finally, developed the foundation for an accompanying guidebook.
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
