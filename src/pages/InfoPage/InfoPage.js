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
                        My journey started on the technical side: during my studies of engineering sciences, I was involved in product development for the first time. 
                    </p>
                    <p>
                        I felt the need though to a more creative way or working, so I continued my studies in Industrial Design. The most important thing I understood here was that knowledge is not the most important factor to develop a good product, but empathy is. And, that it is useful to try things out instead of thinking about them for too long.
                    </p>
                    <p>
                        Having entered a mindset of human-centered design as well as an iterative, test-based approach, the step into UX Design (and the digital products world) felt like a small one. There might be differences, eg. that the concept of ergonomy refers more to perception psychology and learning or that graphic and information design are playing a more important role - both are things I had been particularly interested in anyway.
                    </p>
                    <p>
                        Working as a UX Designer in the IT industry - and closely together with software engineers - I decided to enroll in a full-stack web development bootcamp. I was motivated by the joy of coding but also by the belief that understanding the technologies and processes better has a positive impact on my work as a designer for digital experiences.
                    </p>
                    <p>
                        Aiming to use everything I had learned in a purposeful context, I started a job in the context of digital data management within the electronic health record (elektronische Patientenakte).
                    </p>
                    <p>
                        Now, I am curious for new opportunities.
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