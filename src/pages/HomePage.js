import Button from "../components/Button";
import { useEffect } from "react";
import Animation from "../images/animation.gif";
import StyledButton from "../components/StyledButton";
import LaraRockenstein from "../images/lara_rockenstein.svg";


const style = {
    gridColumn: '2 / 11',
    minHeight: '100vh',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: "center", // Horizontal zentrieren
    gap: 12,
  };

const handleClick = () => {
    console.log('Button clicked!');
};



function HomePage() {

    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "auto"; // Zurücksetzen, wenn die Komponente entfernt wird
        };
    }, []);


    return (
        <div style={style}>
            <p style={{fontSize:'22px', fontWeight:100, paddingBottom: 20}}> Hello, I am Lara. As a   
            <span> <img src={Animation} alt="Animated GIF" style={{ width: "400px", height: "auto" }}/></span>with a background in engineering sciences, I want to bring to life ideas and concepts with practical and social benefits. Currently working in the eHealth sector, I am now looking for new opportunities.</p>
            
            <Button onClick={handleClick} showIcon={true} variant="primary" text={'check out my latest projects'}/> 
            <Button onClick={handleClick} showIcon={true} variant="secondary" text={'read about my story and background'}/> 
            <Button onClick={handleClick} showIcon={true} variant="secondary" text={'go play'}/> 
            <StyledButton onClick={handleClick} type={'primary'} >Styled Button</StyledButton>
            <StyledButton onClick={handleClick} >
                <h1>ich bin h1</h1>
                <p>ich bin p</p>
                <img src={LaraRockenstein} height={10} alt="Logo Lara Rockenstein"/>
                
            </StyledButton>
            
        </div>
    )

}

export default HomePage;