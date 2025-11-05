import ProjectModal from "../../components/ProjectModal/ProjectModal";
import styles from "./ProjectRumblePage.module.css";
import Animation from "../../images/project_rumble_animation.gif" 
import { useState, useCallback } from "react";


// const handleClickGit = () => {
//     window.location.href = "/projects";
// };

function ProjectRumblePage() {
    
    const [gifBustParam, setGifBustParam] = useState(0);
    const handleRestartGif = useCallback(() => {
        setGifBustParam(Date.now());
    }, []);

    return (
        <div className={styles.content}>
            <ProjectModal id="rumble">
                <section>
                    <img 
                        id="projectRumbleAnimation" 
                        className={styles.image}
                        src={`${Animation}?b=${gifBustParam}`}
                        alt="Rumble project animation"
                        onClick={handleRestartGif}
                    />
                    <div>
                        <h4>Context</h4>
                        <p>I realized this coding project as part of a 3-months Coding Bootcamp at Ironhack and within the last out of three total project weeks. Together with my team partner Lisa Hilterhaus, we chose to tackle a problem that we know from our own everyday life and which has to do with an overload of groups and notifications in our messenger apps.</p>
                    </div>
                    <div>
                        <h4>Idea</h4>
                        <p className="quote">Say goodbye to hundreds of different group chats and exploding messages and discussions. See and plan all your events in one place with your friends and decide on details on a democratic basis or even plan a private poll for deciding on a gift for the host.</p>
                    </div>
                    <div>
                        <h4>Technologies</h4>
                        <p>The main requirements for this delivery were to have a SPA frontend built with React and a REST API backend built with ExpressJS, MongoDB and Mongoose, so that users are able to perform all CRUD actions on the different data models. JSON Web Token technology is used to authenticate the user and protect the API. As a bonus, we used Google's Material UI to get familiar with using component libraries.</p>
                    </div>
                    <div>
                        <h4>Reflection</h4>
                        <p>One of the biggest challenges during this project was a highly interdependent data model system, that needed to be updated and tested with every added feature.
                            Also, I found that using a component library seemed not to be the perfect choice in this case: Having in mind a very exact idea of how the app should look, it felt like changing the predefined component properties produced more work than if we had built and styled the components from scratch.
                            Obviously, having worked on this project in a strongly limited timeframe, besides the listed features, there is room left for improvements concerning the user experience. Full responsiveness is a must. Microinteractions can make the experience more dynamic and fun. And last but not least, the concept is dedicated to be developed as a native application with extra functionalities for mobile usage, such as notifications and integration with other social media platforms.</p>
                    </div>
                    <div>
                        {/* <Button onClick={handleClickGit} showIcon={true} variant="primary" text={'check out my projects'}/> */}
                        <a href="https://github.com/codingTeamLHLR/eventplanningtool_client">Open project on github (frontend)</a>
                        {/* <Button onClick={handleClickGit} showIcon={true} variant="primary" text={'check out my projects'}/> */}
                        <a href="https://github.com/codingTeamLHLR/eventplanningtool_server" >Open project on github (backend)</a>
                    </div>
                </section>
            </ProjectModal>

        </div>
    )
}

export default ProjectRumblePage;
