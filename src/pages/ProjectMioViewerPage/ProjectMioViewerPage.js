import ProjectModal from "../../components/ProjectModal/ProjectModal";
import styles from "./ProjectMioViewerPage.module.css";
import Animation_Impfpass from "../../images/impfpass.gif";
import Animation_Medikationsplan from "../../images/medikationsplan.gif";
import Animation_Laborbefund from "../../images/laborbefund.gif"; 
import { IoIosFlash } from "react-icons/io";
import { IoBulbSharp } from "react-icons/io5";

import { useState, useCallback, useEffect } from "react";

function ProjectMioViewerPage() {

        const [gifBustParam, setGifBustParam] = useState(0);
        const [selectedAnimation, setSelectedAnimation] = useState(Animation_Impfpass);
        const handleRestartGif = useCallback(() => {
            setGifBustParam(Date.now());
        }, []);

        const [isLoading, setIsLoading] = useState(false);

       const handleSelect = (animation) => {
        setIsLoading(true);
        setSelectedAnimation(animation);
        };

        

        useEffect(() => {
        const animations = [
            Animation_Impfpass,
            Animation_Medikationsplan,
            Animation_Laborbefund,
        ];

        animations.forEach((src) => {
            const img = new Image();
            img.src = src;
        });
        }, []);

    return (
        <div className={styles.content}>
            <ProjectModal id="mioviewer">
                <section>
                    <img 
                        id="projectMioViewerAnimation" 
                        className={styles.image}
                        src={`${selectedAnimation}?b=${gifBustParam}`}
                        alt="Rumble project animation"
                        onLoad={() => setIsLoading(false)}
                        onClick={handleRestartGif}
                    />
                    {isLoading && <p className='loading'>Loading…</p>}

                    <div className={styles.projectButtons}>
            <button 
            onClick={() => handleSelect(Animation_Impfpass)}
            className={selectedAnimation === Animation_Impfpass ? styles.activeButton : ""}
            >
            <p>Impfpass</p>
            </button>

            <button 
            onClick={() => handleSelect(Animation_Medikationsplan)}
            className={selectedAnimation === Animation_Medikationsplan ? styles.activeButton : ""}
            >
            <p>Medikationsplan</p>
            </button>

            <button 
            onClick={() => handleSelect(Animation_Laborbefund)}
            className={selectedAnimation === Animation_Laborbefund ? styles.activeButton : ""}
            >
            <p>Laborbefund</p>
            </button>
                    </div>

                    <div>
                        <h4>Context</h4>
                        <p>
                            At mio42, we develop MIOs ("Medical Information Objects"), which are national standards for structured datasets to enable the exchange of various medical data via the electronic health record in the future. These include topics such as medication plans, vaccination records, laboratory reports, doctors' letters, and much more. At their core, these are technical specifications that will later lead to uniform code files that can be exchanged between systems in an interoperable manner. Ultimately, the systems can and should decide for themselves how the datasets are displayed and how they are processed. Still, we wanted to create a shortcut for read-only systems (and a design template for the remaining): My task as a UX/UI designer has therefore been to <strong>develop a set of display components</strong> that can be integrated directly into the systems, thus making the respective dataset consumable in a uniform and visually optimized manner.
                        </p>
                    </div>

                    <div>
                        <h4>Process</h4>
                        <p>
                            The first step was to understand the medical care processes, i.e., the touchpoints of the various care providers with the respective documents. Throughout this process, I have conducted <strong>in-depth discussions with multiple end users</strong> to gain a deeper understanding of their specific needs. For example, in the context of the vaccination record, I understood that this document is not only used to verify if all vaccinations have been completed but also to gain an idea of the patient's background and history (were all standard vaccinations carried out regularly during childhood or only later?). 
                            In an iterative process involving the end users, I hierarchized and organized the information, as well as designed, tested, and evaluated possible value-added functionalities (filtering, searching, graphical views).
                            To ensure a consistent look and feel across all MIO projects, I <strong>established a design library</strong>, which I continuously expanded and iteratively refined throughout the different projects.
                        </p>
                    </div>
                    <div>
                        <h4> <IoIosFlash /> Main Challenges</h4>
                        <ul className={styles.challengesAndDecisions}>
                            <li className={styles.challengesAndDecisions}><strong>very large and complex data structures</strong> with a level of detail that has so far had no equivalent in existing solutions (PDF, Paper)</li>
                            <li className={styles.challengesAndDecisions}>in some cases, less obvious <strong>secondary use scenarios</strong></li>
                            <li className={styles.challengesAndDecisions}><strong>diverse reading habits</strong> of the users, determined by their medical department, their respective existing solutions or their place of living (east vs. west germany)</li>
                        </ul>
                    </div>
                    <div>
                        <h4> <IoBulbSharp /> Key decisions</h4>
                        <ul className={styles.challengesAndDecisions}>
                            <li className={styles.challengesAndDecisions}><strong>individual display settings</strong>, eg. to switch on and off certain fields (from the first level)</li>
                            <li className={styles.challengesAndDecisions}><strong>graphic modes</strong>, eg. to enhance quick reception of timelines</li>
                            <li className={styles.challengesAndDecisions}>optional <strong>quick-jump-navigation</strong> long lists of results</li>
                            <li className={styles.challengesAndDecisions}><strong>quick-filters</strong> for the main use cases</li>
                            <li className={styles.challengesAndDecisions}>full-text search through the <strong>whole entry</strong> including the invisible fields</li>
                        </ul>
                    </div>
                    <div>
                        <h4>Reflection</h4>
                        <p>
                            Instead of trying to define one optimal structure, I learned that supporting multiple perspectives through adaptable interface patterns is more sustainable. This way, the design could accommodate different mental models. To presere a consistent visual language, the component library became a central tool: it evolved from a simple collection of components into a scalable system that supported new data structures without increasing design complexity.
                        </p>
                    </div>
                </section>
            </ProjectModal>

        </div>
    )
}

export default ProjectMioViewerPage;