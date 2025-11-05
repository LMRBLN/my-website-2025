import Tetris from '../../components/Tetris/Tetris'
import { useEffect, useState } from 'react';
import Switcher from '../../components/Switcher/Switcher';
import styles from './Playgroundpage.module.css'
import TetrisIsometric from '../../images/tetris_isometric.png';
import Button from '../../components/Button/Button';


function PlaygroundPage() {
    
        const [isSwitcherOn, setIsSwitcherOn] = useState(true);
    
        useEffect(() => {
            document.body.style.overflow = "hidden";
            return () => {
                document.body.style.overflow = "auto"; // Zurücksetzen, wenn die Komponente entfernt wird
            };
        }, []);

        const handleToggle = (isOn) => {
            setIsSwitcherOn(isOn);
          };
    
    


        return (
            
            <div className={styles.content}>

                    <div className={styles.switcherContainer}>
                        <Switcher 
                            className={styles.switcher}
                            initialState={isSwitcherOn}
                            onToggle={handleToggle}
                        />
                    </div>


                    {isSwitcherOn ? (
                        <Tetris/>
                    ) : (
                        <div className={styles.placeholderIsometric}>
                        <img src={TetrisIsometric} className={styles.tetrisImage} alt="Tetris isometric illustration" />
                        <p> coming soon! </p>
                        {/* <div className={styles.mobileControls}>
                            <Button showIcon={false} variant="secondary"  text={'left'}/>
                            <Button showIcon={false} variant="primary"  text={'drop'}/>
                            <Button showIcon={false} variant="secondary" text={'right'}/>
                        </div> */}
                        </div>
                    )}


                </div>

        )
}

export default PlaygroundPage;