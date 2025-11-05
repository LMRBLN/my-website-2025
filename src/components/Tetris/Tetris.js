import { useEffect, useState } from 'react';
import checkAndClear from '../../helpers/checkAndClear';
import keyboard from '../../images/keyboard.svg'
import styles from './Tetris.module.css';
import Button from '../Button/Button';

// Audio for drop sound
const dropSound = new Audio('/files/drop-sound.wav');
// Audio for clear sound
const clearSound = new Audio('/files/clear-sound.wav');

// Constants for the setup
const ASPECT_RATIO = 2; // height:width = 2:1
const GAME_WIDTH = 100;
const GAME_HEIGHT = 200;

const BOX_X = 5; 
const BOX_Y = 20;

const COLOR_ARR = ['#B33951', '#91C7B1', '#F1F7ED', '#E3D081','#918284']
// const boxArr = [["red"],["blue"],["red"],["blue"],["red"]]
// let boxArr = Array(5).fill(0).map(row => new Array(5).fill("red"));
// let boxArr = Array(5).fill(0).map(row => new Array(1).fill("red"));
let boxArrInit = [[],[],[],[],[]];
// boxArr[0][0] = "blue";
// console.log("The whole array is:", boxArr)
// console.log("The first box is:", boxArr[0][0])



function Tetris () {

    const [boxArr, setBoxArr] = useState(boxArrInit);
    const [gameIsStarted, setGameIsStarted] = useState(true);
    
    // Responsive sizing state
    const [gameWidth, setGameWidth] = useState(GAME_WIDTH);
    const [gameHeight, setGameHeight] = useState(GAME_HEIGHT);
    const [boxWidth, setBoxWidth] = useState(GAME_WIDTH / BOX_X);
    const [boxHeight, setBoxHeight] = useState(GAME_HEIGHT / BOX_Y);
    
    // Update sizes on load and resize while keeping aspect ratio of 2:1 (height:width)
    useEffect(() => {
        const updateSizes = () => {
            const maxWidthFromViewport = window.innerWidth * 0.9;
            const maxWidthFromHeight = (window.innerHeight * 0.5) / ASPECT_RATIO;
            const width = Math.floor(Math.min(maxWidthFromViewport, maxWidthFromHeight));
            const height = Math.floor(width * ASPECT_RATIO);
            setGameWidth(width);
            setGameHeight(height);
            setBoxWidth(width / BOX_X);
            setBoxHeight(height / BOX_Y);
        };

        updateSizes();
        window.addEventListener('resize', updateSizes);
        return () => window.removeEventListener('resize', updateSizes);
    }, []);
    
    const createRandomBoxColor = () => {
        const random = Math.floor(Math.random() * COLOR_ARR.length);
        const boxColor = COLOR_ARR[random];
        return boxColor;
    }
    const initialColor = createRandomBoxColor();

    const [activeBoxColor, setActiveBoxColor] = useState(initialColor)
    const [activeBoxX, setActiveBoxX] = useState((BOX_X-1)/2);
    const [activeBoxY, setActiveBoxY] = useState(BOX_Y-1);
    const [gameOver, setGameOver] = useState(false);
    const [time, setTime] = useState(0);
    const [help, setHelp] = useState(false);


    const moveRight = () => {
        if (activeBoxX < BOX_X-1) {
            setActiveBoxX((prevState) => prevState + 1);
        }
    }
    
    const moveLeft = () => {
        if (activeBoxX >= 1) {
            setActiveBoxX((prevState) => prevState - 1);
        }
    }

    const drop = () => {
        if (Math.max(...boxArr.map((e) => e.length)) >= BOX_Y-1) {
            setGameIsStarted(false);
            console.log("Game Over!");
            setGameOver(true);
        }
        else {
            setActiveBoxY(boxArr[activeBoxX].length);
            let boxArrCopy = [...boxArr];
            boxArrCopy[activeBoxX].push(activeBoxColor);
            setBoxArr(boxArrCopy);
            setActiveBoxColor(createRandomBoxColor());
            dropSound.play();
        }
    }
    
    useEffect(() => {
        const wasCleared = checkAndClear(boxArr, [activeBoxX,activeBoxY]);
        if (wasCleared) {
            clearSound.play();
        }
        setActiveBoxX((BOX_X-1)/2);
        setActiveBoxY(BOX_Y-1);
    }, [boxArr])

    
    useEffect(() => {
        
        if(gameIsStarted) {
            
            let timeInterval;
            timeInterval = setInterval(()=>{

                setTime(prevState => (prevState+10))

                if (time%3000 === 0) {
                    if (Math.max(...boxArr.map((e) => e.length)) >= BOX_Y-1) {
                        setGameIsStarted(false);
                        console.log("Game Over!");
                        setGameOver(true);
                    }
                    else {
                        let newBoxArr = [[],[],[],[],[]];
                        for (let i=0; i<boxArr.length; i++) {
                            const newBox = createRandomBoxColor();
                            newBoxArr[i] = [newBox,...boxArr[i]];
                        }
                        setBoxArr(newBoxArr);
                    }
                }
            }, 10);
            
            return () => {
                clearInterval(timeInterval);
            }    
        }
    });


    
    useEffect(() => {
        
        const keyDownHandler = event => {
            if(gameIsStarted) {
                
                if (event.key === 'ArrowLeft') {
                    moveLeft();
                    event.preventDefault();
                }
                if (event.key === 'ArrowRight') {
                    moveRight();
                    event.preventDefault();
                }
                if (event.key === ' ')
                    drop();
                    event.preventDefault();
            }
        };

    document.addEventListener('keydown', keyDownHandler);

    return () => {
        document.removeEventListener('keydown', keyDownHandler);
      };
    });

    const startAgain = () => {
        setGameOver(false);
        setBoxArr(boxArrInit);
        setGameIsStarted(true);
        setActiveBoxColor(createRandomBoxColor());
        setActiveBoxX((BOX_X-1)/2);
        setActiveBoxY(BOX_Y-1);
        setTime(0);
        setHelp(false);
    }

    const pauseHelp = () => {

        if (gameIsStarted) {
            setGameIsStarted(false);
            setHelp(true);
        }
        else {
            if (gameOver) {
                setGameOver(false);
                setBoxArr(boxArrInit);
                setGameIsStarted(true);
                setActiveBoxColor(initialColor);
                setActiveBoxX((BOX_X-1)/2);
                setActiveBoxY(BOX_Y-1);
                setTime(0);
                setHelp(false);


                // setRender(!render);
            }
            if (help) {
                setHelp(false);
                setGameIsStarted(true);
            }
        }
    }

    
    return (
        <div className={styles.container}>
            {/* <div>
                <button onClick={()=> setGameIsStarted(true)}> START </button>
                <button onClick={()=> setGameIsStarted(false)}> STOP </button>
            </div> */}
            

            <div className={styles.timer}> {parseFloat(time/1000).toFixed(2)}</div>
            <button className={styles.startButton} onClick={() => pauseHelp()}> {gameIsStarted && <> Pause / Help </> } {!gameIsStarted && gameOver && <> Play Again</>} {!gameIsStarted && !gameOver && <>   </>}</button>

            <div className={styles.gameBox} style={{ height: gameHeight, width: gameWidth }}>

                <div
                    className={styles.box}
                    style={{
                        height: boxHeight,
                        width: boxWidth,
                        bottom: activeBoxY * boxHeight,
                        left: activeBoxX * boxWidth,
                        backgroundColor: activeBoxColor
                    }}
                />


                {boxArr.map((column, xindex) => {
                    {/* console.log(xindex); */}
                    {/* console.log(column); */}
                    return (                    
                        column.map((spot, yindex) => {
                            {/* console.log(yindex); */}
                            {/* console.log(spot); */}
                            return (
                                <div
                                    className={styles.box}
                                    style={{
                                        height: boxHeight,
                                        width: boxWidth,
                                        bottom: yindex * boxHeight,
                                        left: xindex * boxWidth,
                                        backgroundColor: spot
                                    }}
                                />
                            )
                            }
                        )
                    )
                }
                )
                }


            </div>

            <div className={styles.mobileControls}>
                <Button showIcon={false} variant="secondary" onClick={moveLeft} text={'left'}/>
                <Button showIcon={false} variant="primary" onClick={drop} text={'drop'}/>
                <Button showIcon={false} variant="secondary" onClick={moveRight} text={'right'}/>
            </div>

            {gameOver &&
                    <div className={styles.gameOver} onClick={() => startAgain()}> 
                        Game over 
                        <br/>
                        <span> Click to play again</span>
                    </div>
                }

            {help &&
                <div className={styles.help} onClick={() => pauseHelp()}>
                    Use the arrow keys or buttons to navigate left or right. 
                    <br/>
                    Use the space key or the drop button to drop a box.
                    <br/>
                    If the tower gets too high, you loose... 
                    <br/>
                    <br/>
                    Click to play on

                    <img src={keyboard} className={styles.keyboard} alt="Keyboard layout for controls"/>
                </div>
            }


            {/* <Settings>
              <StartButton onClick={()=> setGameIsStarted(!gameIsStarted)}> Help </StartButton>
            </Settings> */}

        </div>
    ) 
}



export default Tetris;
