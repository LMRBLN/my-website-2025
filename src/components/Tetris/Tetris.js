import { useEffect, useState } from 'react';
import styled from 'styled-components';
import checkAndClear from '../../helpers/checkAndClear';
import keyboard from '../../images/keyboard.svg'
import './Tetris.css';
import Button from '../Button/Button';



const BOX_WIDTH = 50;
const BOX_HEIGHT = 20;

const BOX_X = 5; 
const BOX_Y = 20;

const GAME_WIDTH = BOX_X*BOX_WIDTH;
const GAME_HEIGHT = BOX_Y*BOX_HEIGHT;
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
        }

    }
    
    useEffect(() => {
        checkAndClear(boxArr, [activeBoxX,activeBoxY]);
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

        // window.location.reload(false);
        // setGameOver(false);
        // setGameIsStarted(true);
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


        <Div id="tetris">
            {/* <div>
                <button onClick={()=> setGameIsStarted(true)}> START </button>
                <button onClick={()=> setGameIsStarted(false)}> STOP </button>
            </div> */}
            

            <Timer> {parseFloat(time/1000).toFixed(2)}</Timer>
            <StartButton onClick={() => pauseHelp()}> {gameIsStarted && <> Pause / Help </> } {!gameIsStarted && gameOver && <> Play Again</>} {!gameIsStarted && !gameOver && <> Play On </>}</StartButton>

            <GameBox height={GAME_HEIGHT} width={GAME_WIDTH}>

                <Box y={activeBoxY} x={activeBoxX} color={activeBoxColor}/>


                {boxArr.map((column, xindex) => {
                    {/* console.log(xindex); */}
                    {/* console.log(column); */}
                    return (                    
                        column.map((spot, yindex) => {
                            {/* console.log(yindex); */}
                            {/* console.log(spot); */}
                            return (
                                <Box y={yindex} x={xindex} color={spot}/>
                            )
                            }
                        )
                    )
                }
                )
                }


            </GameBox>

            <MobileControls>
                <Button showIcon={false} variant="secondary" onClick={moveLeft} text={'left'}/>
                <Button showIcon={false} variant="primary" onClick={drop} text={'drop'}/>
                <Button showIcon={false} variant="secondary" onClick={moveRight} text={'right'}/>
            </MobileControls>

            {gameOver &&
                    <GameOver onClick={() => startAgain()}> Game over </GameOver>
                }

            {help &&
                <Help onClick={() => pauseHelp()}>
                    Use the arrow keys to navigate left or right. 
                    <br/>
                    Use the space key to drop a box.
                    <br/>
                    If the tower gets too high, you loose... 
                    
                    <img src={keyboard} id="keyboard"/>
                </Help>
            }


            {/* <Settings>
              <StartButton onClick={()=> setGameIsStarted(!gameIsStarted)}> Help </StartButton>
            </Settings> */}





        </Div>
    ) 
}



export default Tetris;

const Box = styled.div`
    position: absolute;
    background-color: ${(props) => props.color};
    height: ${BOX_HEIGHT}px;
    width: ${BOX_WIDTH}px;
    bottom: ${(props) => props.y * BOX_HEIGHT}px;
    left: ${(props) => props.x * BOX_WIDTH}px;
    border: 1px solid #e1e0dd;
    border-radius: 2px;
    box-sizing: border-box; 
`;

const Div = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #e1e0dd;
`

const GameBox = styled.div`
    position: relative;
    margin: auto;
    height: ${(props) => props.height}px;
    width: ${(props) => props.width}px;
    background-color: none;    
    border-bottom: 1px solid black;
`
// const StartButton = styled.button`
//     position: absolute;
//     bottom: 10%;
//     width: 130px;
//     height: 50px;
//     ${'' /* background-color: #E1E0DD; */}
//     background: rgba(225, 224, 221, 0);;
//     margin-top: 3%;
//     padding: 5px;
//     border: none;
//     border-radius: 25px;
//     outline:none;
//     text-transform: uppercase;
//     font-weight: 500;
// `

const StartButton = styled.button`
    position: absolute;
    right: 20%;  
`



  

const GameOver = styled.div`
    position: absolute;
    width: 90%;
    height: 90%;
    background: rgba(225, 224, 221, 0.8);;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 150px;
    font-family: 'Unica One', cursive;
    text-align: center;
`
const Timer = styled.div`
    position: absolute;
    left: 20%;    
`
// const Settings = styled.div`
//     position: absolute;
//     right: 15%;
//     `

const MobileControls = styled.div`
    position: absolute;
    bottom: 5%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 10px;
    `


const Help = styled.div`
    position: absolute;
    width: 80%;
    height: 80%;
    bottom: 0px;
    background: rgba(225, 224, 221, 0.8);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    `

