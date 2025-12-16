const checkAndClear = (arr, position) => {
    let positionsToRemoveFinal = getpositionsToRemove(arr, position);
    if(positionsToRemoveFinal.length > 2) {
        clearPositions(arr, positionsToRemoveFinal);
        return true; 
    }
    return false; 
}


const getpositionsToRemove = (arr, position) => {
    let positionsToRemove = [];
    positionsToRemove.push(position);

    for (let i=0; i<positionsToRemove.length; i++) {
        let temp = positionsToRemove[i];
        let adjacents = checkAdjacent(arr, temp, positionsToRemove);
        positionsToRemove.push.apply(positionsToRemove, adjacents);
    }
    return positionsToRemove;
};


const checkAdjacent = (arr, coord, positionsToRemove) => {
    const adjacents = [];
    let x = coord[0];
    let y = coord[1];


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

    positionsToRemove.forEach(coord => { 
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