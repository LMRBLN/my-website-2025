import ProjectModal from "../../components/ProjectModal/ProjectModal";
import styles from "./ProjectMioViewerPage.module.css";
import Animation_Impfpass from "../../images/impfpass.gif";
import Animation_Medikationsplan from "../../images/medikationsplan.gif";
import Animation_Laborbefund from "../../images/laborbefund.gif"; 
import { useState, useCallback } from "react";

function ProjectMioViewerPage() {

        const [gifBustParam, setGifBustParam] = useState(0);
        const [selectedAnimation, setSelectedAnimation] = useState(Animation_Impfpass);
        const handleRestartGif = useCallback(() => {
            setGifBustParam(Date.now());
        }, []);

        const handleSelect = (animation) => {
            setSelectedAnimation(animation);
            setGifBustParam(Date.now()); // startet GIF neu beim Wechsel
        }

    return (
        <div className={styles.content}>
            <ProjectModal id="mioviewer">
                <section>
                    <img 
                        id="projectMioViewerAnimation" 
                        className={styles.image}
                        src={`${selectedAnimation}?b=${gifBustParam}`}
                        alt="Rumble project animation"
                        onClick={handleRestartGif}
                    />
                    <div className={styles.projectButtons}>
                        <button 
                            onClick={() => handleSelect(Animation_Impfpass)}
                        > <p> Impfpass </p></button>

                        <button 
                            onClick={() => handleSelect(Animation_Medikationsplan)}
                        ><p> Medikationsplan </p></button>

                        <button 
                            onClick={() => handleSelect(Animation_Laborbefund)}
                        ><p> Laborbefund </p></button>
                    </div>

                    <div>
                        <h4>Context</h4>
                        <p>At mio42, we develop MIOs (“medical information objects”), national standards for structured data sets for various medical data sets that are to be exchanged via the ePA in the future. These include topics such as medication plans, vaccination records, laboratory findings, etc. At their core, these are technical specifications that will later lead to semantically and syntactically uniform code files that can be exchanged between systems in an interoperable manner. Ultimately, the systems can and should decide for themselves how the data sets are displayed and how they are processed, but we want to create a shortcut for purely read-only systems: My task as a UX/UI designer is therefore to develop a set of display components that can be easily integrated directly into the systems, thus making the data readable in a uniform manner.</p>
                    </div>

                    <div>
                        <h4>Process</h4>
                        <p>The first step was to understand the supply processes, i.e., the touchpoints of the various people. Along this process, we could deepdive into more specific discussions with the different stakeholdes to derive their needs. E.g. in the context of the vaccination record, I understood that the vaccination card is not only used to check that all vaccinations have been completed, but also to gain an idea of the patient's background and history (were all standard vaccinations carried out regularly during childhood or only later? etc.). In an iterative process involving the end users, I hierarchized and organized the information, as well as designed, tested and evaluated possible value-added functionalities (filtering, searching, graphics).

In addition, I built up a design library to ensure a consistent look and feel across projects.</p>
                    </div>
                    <div>
                        <h4>Reflection</h4>
                        <p>One particular challenge was that I gradually worked on the various projects and built up the design library at the same time (no one had worked on it before me), so naturally this required a lot of loops. In addition, users sometimes have different views on which information is relevant due to the different software they are used to. This often led me to provide configuration options for the display (switching between display modes, showing and hiding certain fields).
It also turned out to be a crucial part of the work to feed findings back into the technical data model, which should be clearly understandable and not too complex to implement. Since the new electronic form of saving the information gives a lot more possiblities to provide details, the complexity must be countered by good differentiation of information levels in the UI. 
 </p>
                    </div>
                </section>
            </ProjectModal>
            

        </div>
    )
}

export default ProjectMioViewerPage;