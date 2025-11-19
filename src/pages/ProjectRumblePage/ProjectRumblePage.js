import ProjectModal from "../../components/ProjectModal/ProjectModal";
import styles from "./ProjectRumblePage.module.css";
import Animation from "../../images/project_rumble_animation.gif";
import { useState, useCallback, useEffect } from "react";

function ProjectRumblePage() {
  const [gifKey, setGifKey] = useState(0);

  const handleRestartGif = useCallback(() => {
    setGifKey((prev) => prev + 1);
  }, []);

  // Optional: Preload, damit es beim ersten Mal schneller da ist
  useEffect(() => {
    const img = new Image();
    img.src = Animation;
  }, []);

  return (
    <div className={styles.content}>
      <ProjectModal id="rumble">
        <section>
          <img
            key={gifKey} // sorgt dafür, dass das <img> neu gemountet wird
            id="projectRumbleAnimation"
            className={styles.image}
            src={Animation} // kein ?b=Date.now() mehr
            alt="Rumble project animation"
            onClick={handleRestartGif}
          />
          <div>
            <h4>Context</h4>
            <p>
              I completed this coding project as part of a 3-month coding bootcamp at Ironhack, during the final week of the three total project weeks. Together with my team partner, we chose to tackle a problem that we are familiar with from our own everyday life, and that involves an overload of groups and notifications in our messenger apps.
            </p>
          </div>
          <div>
            <h4>Idea</h4>
            <p className="highlighted">
              Say goodbye to hundreds of different group chats, exploding messages, and discussions. View and plan all your events in one place with your friends and decide on details democratically, or even plan a private poll to decide on a gift for the host.
            </p>
          </div>
          <div>
            <h4>Technologies</h4>
            <p>
              We built an SPA front end with React and a REST API back end with Express.js, MongoDB, and Mongoose to enable our users to perform all CRUD actions on the various data models. We utilized JSON Web Token (JWT) technology to authenticate users and secure the API. As a bonus, we used Google's Material UI to become familiar with component libraries.
            </p>
            <div className={styles.featuresList}>
              <div className={styles.realisedFeatures}>
                <h4>Realised Features</h4>
                <p>
                  <li> create account / log in </li>
                  <li> create event and edit details </li>
                  <li> invite other users </li>
                  <li> make other users co-hosts</li>
                  <li> accept/decline </li>
                  <li> create polls and vote </li>
                  <li> get list and calendar overview </li>
                  <li> upload picture (profile/event) </li>
                </p>
              </div>
              <div className={styles.featuresToBeAdded}>
                <h4>Features to be added</h4>
                <p>
                  <li> add friends </li>
                  <li> create friends groups </li>
                  <li> filter/search events </li>
                  <li> seed friends birthdays in calendar </li>
                  <li> create threads and add comments </li>
                  <li> send private messages </li>
                </p>
              </div>
            </div>
          </div>
          <div>
            <h4>Reflection</h4>
            <p>
              One of the biggest challenges during this project was a highly interdependent data model system that required updates and testing with every new feature added.
              Additionally, I found that using a component library did not seem to be the ideal case. Having a clear vision for the app's final design, it felt like changing the predefined component properties produced more work than if we had built and styled the components from scratch.
              Obviously, having worked on this project within a minimal timeframe, in addition to the features listed above, there is still room for improvement in the user experience. Full responsiveness is a must. Microinteractions can make the experience more dynamic and fun. And last but not least, the concept is dedicated to being developed as a native application with extra functionalities for mobile usage, such as notifications and integration with other social media platforms.
            </p>
          </div>
          <div>
            <a href="https://github.com/codingTeamLHLR/eventplanningtool_client">
              Open project on github (front end)
            </a>
            <a href="https://github.com/codingTeamLHLR/eventplanningtool_server">
              Open project on github (back end)
            </a>
          </div>
        </section>
      </ProjectModal>
    </div>
  );
}

export default ProjectRumblePage;