import ProjectModal from "../../components/ProjectModal/ProjectModal";
import styles from "./ProjectGiraffePage.module.css"
import Animation from "../../images/project_giraffe_animation.gif";
import { useState, useCallback } from "react";

function ProjectGiraffePage() {

    const [gifBustParam, setGifBustParam] = useState(0);
    const handleRestartGif = useCallback(() => {
        setGifBustParam(Date.now());
    }, []);

    return (
        <div className={styles.content}>
            <ProjectModal id="giraffe">
                 <section>
                    <img 
                        id="projectGiraffeAnimation" 
                        className={styles.image}
                        src={`${Animation}?b=${gifBustParam}`}
                        alt="Giraffe project animation"
                        onClick={handleRestartGif}
                    />
                    <div>
                        <h4>Context</h4>
                        <p>This project was the second out of three main deliverables during my 3-months Coding Bootcamp at Ironhack. I collaborated with one fellow student (Lisa Hilterhaus) and we finalized this project within one week.</p>
                    </div>

                    <div>
                        <h4>Idea</h4>
                        <p>
                            Who always stays on top of things? Giraffe is a tool that helps you to keep an overview of your shopping plans. You can see all your items of interest in one place. Just paste the link to the item and a product card is being automatically created. Save and organize your items in a list. This way you can compare items from different vendors easily and thus take more reasonable buying decisions.
                        </p>
                    </div>
                    <div>
                        <h4>Used Technologies</h4>
                        <p>
                            As required, we used Express as a foundation and Mongoose for models and database communication. A user authentification mechanism with password encryption is provided to protect the routes. The frontend is built without using any framework, but with dynamic views and handlebars.
                            As an extra step, we integrated a webscraping tool in our application to bring the core product feature (automatic card creation based on the link) to life.
                        </p>
                    </div>
                    <div>
                        <a href="https://github.com/codingTeamLHLR/shoppingtool" >Open project on github</a>
                    </div>
                </section>
            </ProjectModal>
            

        </div>
    )
}

export default ProjectGiraffePage;
