const checkAndClear = (arr, position) => {
    // console.log("checkAndClear is called");
    // console.log("arr is", arr);
    // console.log("position is", position);

    let positionsToRemoveFinal = getpositionsToRemove(arr, position);
    if(positionsToRemoveFinal.length > 2) {
        clearPositions(arr, positionsToRemoveFinal);
    }
}


const getpositionsToRemove = (arr, position) => {

    // console.log("getpositionsToRemove is called");

    let positionsToRemove = [];
    // console.log("pos to remove initial", positionsToRemove.length);
    positionsToRemove.push(position);
    // console.log("pos to remove initial", positionsToRemove.length);

    for (let i=0; i<positionsToRemove.length; i++) {
        let temp = positionsToRemove[i];
        let adjacents = checkAdjacent(arr, temp, positionsToRemove);
        // console.log("adjacents are", adjacents);
        positionsToRemove.push.apply(positionsToRemove, adjacents);
    }
    // console.log("positions to remove are:", positionsToRemove)
    return positionsToRemove;
};


const checkAdjacent = (arr, coord, positionsToRemove) => {

    // console.log("checkAdjacent is called");

    const adjacents = [];
    // console.log("coord are", coord)
    let x = coord[0];
    // console.log("x", x);
    let y = coord[1];
    // console.log("y", y);
    // console.log("arr[x][y]", arr[x][y-1]);


    if (arr[x][y] !== undefined) {
        if (
            y < arr[x].length-1 &&
            arr[x][y + 1] !== undefined &&
            arr[x][y] == arr[x][y + 1] &&
            checkIfStoredAlready(positionsToRemove, [x, y + 1]) == false &&
            checkIfStoredAlready(adjacents, [x, y + 1]) == false
        ) {
            adjacents.push([x, y + 1]);
        }
    
        if (
            y > 0 &&
            arr[x][y - 1] !== undefined &&
            arr[x][y] == arr[x][y - 1] &&
            checkIfStoredAlready(positionsToRemove, [x, y - 1]) == false &&
            checkIfStoredAlready(adjacents, [x, y - 1]) == false) {
            adjacents.push([x, y - 1]);
        }
    
        if (
            x < arr.length-1 &&
            arr[x + 1][y] != undefined &&
            arr[x][y] == arr[x + 1][y] &&
            checkIfStoredAlready(positionsToRemove, [x + 1, y]) == false &&
            checkIfStoredAlready(adjacents, [x + 1, y]) == false
        ) {
            adjacents.push([x + 1, y]);
        }
    
        if (
            x > 0 &&
            arr[x - 1][y] != undefined &&
            arr[x][y] == arr[x - 1][y] &&
            checkIfStoredAlready(positionsToRemove, [x - 1, y]) == false &&
            checkIfStoredAlready(adjacents, [x - 1, y]) == false
        ) {
            adjacents.push([x - 1, y]);
        }
        return adjacents;
    }
}


const checkIfStoredAlready = (coordArr, coordToCheck) => {
    let counter = 0;
    coordArr.forEach((coord) => {
        if (JSON.stringify(coord) === JSON.stringify(coordToCheck)) {
            counter++;
        }});

    if (counter > 0) {
        return true;
    } 
    else {
        return false;
    }
}

const clearPositions = (arr, positionsToRemove) => {

    positionsToRemove.forEach(coord => { // we need remove the according entries from the array
        arr[coord[0]][coord[1]] = 'remove';
      });
    for (let i = 0; i < arr.length; i++) {
        for (let j = arr[i].length-1; j >= 0; j--) {
          if (arr[i][j] == 'remove') {
            arr[i].splice(j, 1);
          }
        }
    }
}



export default checkAndClear;