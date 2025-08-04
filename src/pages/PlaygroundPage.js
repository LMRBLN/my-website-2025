import Tetris from '../components/Tetris/Tetris'
import { useState, useEffect } from 'react';
import menu_icon_close from '../images/menu_icon_close.svg'
import { background } from '@cloudinary/url-gen/qualifiers/focusOn';
import { BackgroundColor } from '@cloudinary/url-gen/actions/background/actions/BackgroundColor';

const style = {
    gridColumn: '2 / 12',
    minHeight: '100vh',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: "center", // Horizontal zentrieren
    gap: 12,

  };

function PlaygroundPage() {
    
        useEffect(() => {
            document.body.style.overflow = "hidden";
            return () => {
                document.body.style.overflow = "auto"; // Zurücksetzen, wenn die Komponente entfernt wird
            };
        }, []);
    
    const [game, setGame] = useState(false);


        return (
            


                <div id="tetris" style={style}>
                    <Tetris/>
                    <div id="menu-icon-close-tetris" onClick={()=> setGame(false)}>
                            <img src={menu_icon_close} alt="close menu"/>
                    </div>
                </div>

        )
}

export default PlaygroundPage;