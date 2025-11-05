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
                    {/* <h3 className={styles.title}> My journey </h3> */}
                    {/* <p>
                        My journey started on the technical side: during my studies of engineering sciences, I learned to acquire new fields in a short time, eg. by abstracting principles instead of memorizing details, and not being afraid of things looking complex in the beginning.
                    </p>
                    <p>
                        This is where I was involved in product development for the first time. I felt the need though to focus more on the creative and aesthetical aspects of it, so I continued my studies in Industrial Design. The most important thing I understood here was that knowledge is not the most important factor to develop a good product, but empathy is. And, that it is useful to try things out instead of thinking about them for too long.
                    </p>
                    <p>
                        Having entered a mindset of human-centered design as well as an iterative, test-based approach, the step into UX Design (and the digital world) after I finished my master, felt like a small one. Certainly, there is a little switch of focus, eg. by the fact that the concept of ergonomy refers more to perception psychology and learning as well as the fact that graphic and information design has evidently a bigger emphasis. Two things I had always been particularly interested in anyway!
                    </p>
                    <p>
                        Working as a UX Designer in the IT industry - and thus closely together with software engineers and UI developers - for one year, I decided to enroll in a 3-months full-stack web development bootcamp. I was motivated by the joy of coding but also by believing that understanding the technologies and processes better has a positive impact on my work as a digital experiences designer.
                    </p>
                    <p>
                        Aiming to use everything I had learned in a purposeful context, I started a job in the public sector in the context of digital data management within the electronic health record (elektronische Patientenakte).
                    </p>
                    <p>
                        Now, I am curious for new opportunities.
                    </p> */}
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
{/* 
            <div className={styles.skills}>
                        <div className={styles.skillList}>
                            <h2> Techstack</h2>
                            <ul>
                                <li>Javascript (ES6) </li>
                                <li>NodeJS (ES6) </li>
                                <li>Express </li>
                                <li>MongoDB </li>
                                <li>React </li>
                                <li>HTML, CSS </li>
                            </ul>
                        </div>

                        <div className={styles.skillList}>
                            <h2> Software</h2>
                            <ul>
                                <li>Figma </li>
                                <li>Adobe CS (Ps, Id, Ai, Xd, Pr) </li>
                                <li>SolidWorks (Modelling) </li>
                                <li>Keyshot (Rendering) </li>
                            </ul>
                        </div>

                        <div className={styles.skillList}>
                            <h2> Languages</h2>
                            <ul>
                                <li>German (Native) </li>
                                <li>French (Fluent)</li>
                                <li>Spanish (Fluent) </li>
                                <li>English (Fluent)</li>
                                <li>Portuguese (Basics)</li>
                                <li>German Sign Language (Basics)</li>
                            </ul>
                        </div>

            </div> */}

            {/* <div className={styles.buttonContainer}>
            <Button text={"Open CV as PDF"} onClick={handleClick} showIcon={true} variant="primary"/>
            </div> */}

            {/* <h3 className={styles.title}> My skills and experiences </h3>
            <div className={styles.skills}>
                <div className={styles.box} >
                    <div className={styles.boxProfessional}>
                        <h3> Professional </h3>

                        <div className={styles.station}>
                            <p className={styles.emplyer}>mio42 GmbH</p>
                            <p className={styles.description}>Company mandated to define national interoperability standards fpr medical data in te electorinc patie3nt record (ePA)</p>
                            <p className={styles.role}>UX/UI Designer</p>
                        </div>

                        <div className={styles.station}>
                            <p>mio42 GmbH</p>
                            <p>Company mandated to define national interoperability standards fpr medical data in te electorinc patie3nt record (ePA)</p>
                            <p>UX/UI Designer</p>
                        </div>

                    </div>
                    <div className={styles.boxProfessional}>
                        <h3> Education </h3>
                    </div>
                    <div className={styles.boxProfessional}>
                        <h3> Software & Languages </h3>
                    </div>

                </div>

            </div> */}

        </div>
    );

}

export default InfoPage;