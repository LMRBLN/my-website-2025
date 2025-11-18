import styles from "./HomePage.module.css";
import Button from "../../components/Button/Button";

const handleClickProjects = () => {
    window.location.href = "/projects";
};

const handleClickInfo = () => {
    window.location.href = "/info";
};

const handleClickPlayground = () => {
    window.location.href = "/playground";
};


function HomePage() {

    return (
        <div className={styles.content} >
             <p className={styles.intro}>
                Hello, I am Lara.  As a product desinger and web developer, I want to bring to life ideas and concepts with practical and social benefits. Currently working in the eHealth sector, I am now looking for new opportunities.
             </p>
            <Button onClick={handleClickProjects} showIcon={true} variant="primary" text={'check out my projects'}/> 
            <Button onClick={handleClickInfo} showIcon={true} variant="secondary" text={'read about my background'}/> 
            <Button onClick={handleClickPlayground} showIcon={true} variant="secondary" text={'go play'}/> 
        </div>
    )

}

export default HomePage;