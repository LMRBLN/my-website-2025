import ProjectModal from "../../components/ProjectModal/ProjectModal";
import styles from "./ProjectSecurityCentralPage.module.css"
import IdeaSketching from "../../images/securitycentral_ideasketching.png";
import Wireframes from "../../images/securitycentral_wireframes.png";
import Reports from "../../images/securitycentral_reports.png";
import Research from "../../images/securitycentral_userresearch.png";
import { useState, useCallback } from "react";

function ProjectSecurityCentralPage() {

        const [gifBustParam, setGifBustParam] = useState(0);
        const handleRestartGif = useCallback(() => {
            setGifBustParam(Date.now());
        }, []);

    return (
        <div className={styles.content}>

            <ProjectModal id="securitycentral">
                <section>
                    {/* <img 
                        id="projectRumbleAnimation" 
                        className={styles.image}
                        src={`${Animation}?b=${gifBustParam}`}
                        alt="Rumble project animation"
                        onClick={handleRestartGif}
                    /> */}
                    <div>
                        <h4>Context</h4>
                        <p>
                            Within this project at Nutanix GmbH, I worked on the security-related section of the company's main product, an infrastructure management software. The goal was to determine how people would like to export data from the security dashboard for use in various work contexts.
                        </p>
                    </div>
                    <div>
                        <h4>Process</h4>
                        <p>
                            First, I analyzed the industry's competitors to gain an understanding of the current "state of the art". I could derive a first set of features and ideas that would fulfill the different aspects of the problem: the reports to be purposeful (content level), consumable (document design level), and easy to use/create (creation flow and feature integration).
                        </p>
                        
                        <figure>
                        <img
                            id="ideaSketching" 
                            className={styles.ideaSketchingImage}
                            src={IdeaSketching}
                            alt="Sketching of first ideas"
                        />
                        <figcaption>Sketching of first ideas</figcaption>
                        </figure>

                        <p>
                            Then, I planned a user study that addressed those different aspects. On the one hand, I wanted to determine what kind of artifacts, in terms of goals, content, addressees, and formats, would actually be needed. On the other hand, I wanted to learn about how a possible reporting feature could be integrated into the main dashboard and what the workflow for creating the report could genuinely look like. To this end, I interviewed our test persons (IT managers from various companies) about their habits, pain points, and wishes in the area of security reporting.
                        </p>

                        <p> 
                            I created some sketches for the editor (integration) to gain a general idea of how the reports could be displayed within the security management section and what a basic editor setup might look like.
                        </p>
                        
                        <figure>
                        <img
                            id="wireframes" 
                            className={styles.image}
                            src={Wireframes}
                            alt="Wireframes"
                        />
                        <figcaption>First wireframes for the editor workflow integration</figcaption>
                        </figure>

                        <p>
                            Additionally, I created some initial drafts for possible document exports of a few obvious information blocks (which we already knew about from previous user research), allowing me to evaluate the document's structure and explore some ideas for information design within it.
                        </p>

                        <figure>
                        <img
                            id="reports" 
                            className={styles.reportsImage}
                            src={Reports}
                            alt="Reports"
                        />
                        <figcaption>Design for the PDF Report for one of the identified use cases (vulnerabilities) </figcaption>
                        </figure>

                        <p>
                            I led five sessions of interviews, each lasting one hour. Many statements were repeated, allowing me to cluster the emerging topics below by theme and relevance. 
                        </p>

                                                <figure>
                        <img
                            id="userResearch" 
                            className={styles.userResarchImage}
                            src={Research}
                            alt="User Research"
                        />
                        <figcaption>Clustered Results from the Interviews</figcaption>
                        </figure>

                        <p>
                            Thanks to the user sessions, I was also able to create an overview of all the required report types, their corresponding preferred formats, target persons, motivations, and communication channels. Different from what I assumed, I learned that besides those scenarios, there is no need to have a more “free” arrangement of contents in some advanced mode. Other significant findings included that users want to automate/schedule their exports and that they should be able to deactivate and activate complete sections of the document, as well as select/deselect severity levels, all according to the reporting context. Additionally, they require an overview of all exports, including planned/scheduled ones, and the ability to edit the scheduling directly from this interface. In my example report, I received critical feedback on some points that were not yet sufficiently clear in their presentation (e.g., the monthly delta display in the history bar chart).          
                        </p>

                    </div>
                    <div>
                        <h4>Reflection</h4>
                        <p>
                            At this point, we had a good overview of the types of reports required in the context of the security management platform, along with an example of a ready-to-use design for one of the reporting scenarios. Also, we have a concept of how the feature will be integrated into the platform and what the users' primary needed functionalities are.
                            In the next step, more example reports (for every identified report type) should be created and evaluated in further user testing sessions. The editor drafts are ready for the next iteration of detailing. Other areas where reporting could be useful should be identified so that a consistent experience can be created across the entire product portfolio.
                        </p>
                    </div>
                </section>
            </ProjectModal>
        </div>
    )
}

export default ProjectSecurityCentralPage;
