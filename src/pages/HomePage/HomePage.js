import styles from "./HomePage.module.css";
import Button from "../../components/Button/Button";
import { useEffect } from "react";



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

    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "auto"; // Zurücksetzen, wenn die Komponente entfernt wird
        };
    }, []); 


    return (
        <div className={styles.content} >
             <p style={{width: "270px", paddingBottom: 20, fontSize: '14px', fontWeight: 100, lineHeight: "1.2rem"}}>
                Hello, I am Lara.  As a product desinger and web developer, I want to bring to life ideas and concepts with practical and social benefits. Currently working in the eHealth sector, I am now looking for new opportunities.
             </p>
            <Button onClick={handleClickProjects} showIcon={true} variant="primary" text={'check out my projects'}/> 
            <Button onClick={handleClickInfo} showIcon={true} variant="secondary" text={'read about my background'}/> 
            <Button onClick={handleClickPlayground} showIcon={true} variant="secondary" text={'go play'}/> 
        </div>
    )

}

export default HomePage;