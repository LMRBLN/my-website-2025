import ProjectModal from "../../components/ProjectModal/ProjectModal";
import styles from "./ProjectGiraffePage.module.css"
import Animation from "../../images/project_giraffe_animation.gif";
import { useState, useCallback, useEffect } from "react";

function ProjectGiraffePage() {
  const [gifKey, setGifKey] = useState(0);

  const handleRestartGif = useCallback(() => {
    setGifKey((prev) => prev + 1);
  }, []);


  useEffect(() => {
    const img = new Image();
    img.src = Animation;
  }, []);

  return (
    <div className={styles.content}>
      <ProjectModal id="giraffe">
        <section>
          <img
            key={gifKey}                           // ← sorgt dafür, dass das <img> neu gemountet wird
            id="projectGiraffeAnimation"
            className={styles.image}
            src={Animation}                        // ← kein ?b=Date.now() mehr
            alt="Giraffe project animation"
            onClick={handleRestartGif}
          />
          <div>
            <h4>Context</h4>
            <p >
              This project was the second of three main deliverables during my 3-month coding boot camp at Ironhack. I collaborated with one fellow student. We worked on this project for one week.
            </p>
          </div>

          <div>
            <h4>Idea</h4>
            <p className="highlighted"> 
              Who always stays on top of things? Giraffe is a tool that helps you keep an overview of your shopping plans. You can see all your items of interest in one place. Just paste the link to the item, and a product card will be automatically created. Save and organize your items in a list. This way, you can easily compare items from different vendors and thus make more informed buying decisions.
            </p>
          </div>

          <div>
            <h4>Used Technologies</h4>
            <p>
              We used Express as a foundation and Mongoose for models and database communication. A user authentication mechanism with password encryption is provided to protect the routes. The front end is built without using any framework, but with dynamic views and handlebars.
              As an extra step, we integrated a web scraping tool into our application to bring the core product feature (automatic card creation based on the link) to life.
            </p>
            <div className={styles.featuresList}>
              <div className={styles.realisedFeatures}>
                <h4>Realised Features</h4>
                <p>
                  <li> create account / log in </li>
                  <li> add items by copy pasting the URL</li>
                  <li> (webscraping functionality)</li>
                  <li> edit information manually </li>
                  <li> save items in lists </li>
                  <li> search by words and filter by price </li>
                </p>
              </div>
              <div className={styles.featuresToBeAdded}>
                <h4>Features to be added</h4>
                <p>
                  <li> filter by more properties (eg. by shop) </li>
                  <li> reset filters</li>
                  <li> archive lists </li>
                  <li> change order of products </li>
                  <li> invite other users to lists </li>
                  <li> add products seen in local shop </li>
                  <li> (picture upload) </li>
                </p>
              </div>
            </div>
          </div>

          <div>
            <h4>Reflection</h4>
            <p>
              Besides making the web scraping work, the front end (at this point done with views and handlebars) was a big challenge because we wanted to use many stateful elements and pages (overlay modals, list tags). At this point, we needed to perform a re-render of the page with every change of a variable, which resulted in a very complex handlebars management – thankfully, frontend libraries such as React were invented!
            </p>
          </div>
          <div>
            <a href="https://github.com/codingTeamLHLR/shoppingtool">Open project on github</a>
          </div>
        </section>
      </ProjectModal>
    </div>
  );
}

export default ProjectGiraffePage;