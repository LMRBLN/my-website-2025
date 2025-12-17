import styles from "./InfoPage.module.css";
import PictureLaraRockenstein from "../../images/picture_lara_rockenstein.jpg";
import Button from "../../components/Button/Button";


const handleClick = () => {
      window.open('/files/CVpublic_LaraRockenstein.pdf', '_blank');
}


function InfoPage() {


    return (
        <div className={styles.content}>
            <div className={styles.myJourney}>
                <div className={styles.imageWrapper}>
                    <img src={PictureLaraRockenstein} alt="Lara Rockenstein" />
                </div>
                <div className={styles.text}>
                    <p>
                        My journey started in engineering and product development, before I moved into industrial design to focus more strongly on human-centered thinking. What shaped my work most was learning that empathy matters more than knowledge, and that testing beats overthinking.
                    </p>
                    <p>
                        UX design felt like a natural next step — combining structure, psychology and visual communication. Working closely with engineers in the IT industry eventually led me to deepen my technical understanding through a full-stack web development bootcamp.
                    </p>
                    <p>
                        Today, I work in the context of digital health and electronic health records, aiming to apply design and technology in a purposeful, societal context. I’m now curious about new opportunities where impact and thoughtful product work matter.
                    </p>
                    <div className={styles.buttonContainer}>
                        <Button text={"Open CV as PDF"} onClick={handleClick} showIcon={true} variant="primary"/>
                    </div>

                </div>
            </div>
        </div>
    );

}

export default InfoPage;