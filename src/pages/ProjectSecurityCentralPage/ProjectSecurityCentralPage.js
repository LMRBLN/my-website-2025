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
                        <p>In this project, at Nutanix GmbH, I worked on the security related section of the companies main products: an infrastructure management software. The goal was to find out, how, from the security dashboard, people would like to export data to use it in different work contexts.</p>
                    </div>
                    <div>
                        <h4>Process</h4>
                        <p>In the first place a analysed the industry competitors, to have an idea on what is the state of the art. I could derive a first set of features and ideas, that would fulfill the different aspects of the topic: the reports to be purposeful (content level), consumable (document design level), and easy to use/create (report creation user flow / feautre integration level)</p>
                        
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
                            Then I planned a user study, where i addressed those different parts: On one hand, I wanted to find out what kind of artefacts in terms of goals, contents, addressees and formats would actually be needed. On the other hand I wanted to find out more about how a possible reporting feature could be integrated in the main dashboard and how the flow to create the report could genouinely look like. To this end, I interviewed our test persons (IT-managers from different companies) about their habits, painpoints and wishes in the area of security reporting.
                        </p>

                        <p> I made some sketches for the editor (integration), get a vague idea on how the reports could going to be displayed within the security central and how a basic editor set up could look like.
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
                            Also, I've made some initial drafts for possible document exports for a few obvious info blocks (which we already knew about from older user research), so that I could already evaluate the document structure and some ideas on the information design.
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
                        I lead the interviews within 5 sessions à 1 hour. Many statements were repeated, so I was able to cluster the emerging topics below by theme and relevance. 
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
                            Thanks to the user sessions I was also able to draw up an overview of all the required report types and the corresponding preferred formats, target persons, motivations, and communication channels. Different to what i assumed, I learned that besides those scenarios, there is no need to have a more “free” arrrangement of contents in some kind of advanced mode. Other important findings here were that users want to automize / schedule their exports and that they should be able to deactivate and activate full sections of the document and select /deselect the  severity levels, both according to the reporting context. Also, they want an overview about all exports includinng the planned /scheduled ones and be able to edit the scheduling directly from there. On my example report I got important feedback on some points that were not yet sufficiently clear in their form of presentation (eg. the monthly delta display in the history bar chart).
                        </p>

                    </div>
                    <div>
                        <h4>Reflection</h4>
                        <p>In a next step, a deeper competitors research/analysis with focus on the identified report types would be useful. Also more example reports (for every identified report type) should be created and evaluated in further user testing sessions. The editor drafts are ready for the next detailing iteration. Other areas where reporting could be useful should be identified so that a consistent experience can be created across the entire product portfolio.</p>
                    </div>
                </section>
            </ProjectModal>
        </div>
    )
}

export default ProjectSecurityCentralPage;
