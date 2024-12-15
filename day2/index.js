import fs from 'fs';

const isSafe = (localDiffArray) => {
    let previous = 0;
    let length = localDiffArray.length;
    for (let i in [0..length]) {
        let absLocalDiff = Math.abs(localDiffArray[i]);
        if (absLocalDiff < 1 || absLocalDiff > 3) {
            return i;
        } else if (previous == 0) {
            previous = localDiffArray[i];
            continue;
        } else if (previous > 0 > localDiffArray[i] || previous < 0 < localDiffArray[i]) {
            return i;
        }
        
        return -1;
    }
}


const addAndCheck = (localDiffArray, checkIndex, side) => {
    let a, b;
    if (side == "left") {
        a = checkIndex;
        b = checkIndex - 1;
    } else {
        a = checkIndex + 1;
        b = checkIndex;
    }

    const newVal = localDiffArray[a] + localDiffArray[b];
    const newList = localDiffArray.clone();
    newList.pop(a);
    newList[b] = newVal;
    return isSafe(newList);
}

const input = fs.readFileSync('./input.txt', 'utf8');
const parsed = input.split('\n');
let numSafe = 0;

for (let line of parsed) {
    let safe = true;
    let diffArray = [];
    let tokens = line.split(' ');
    let length = tokens.length;
    
    for (let i in [1..length]) {
        diffArray.push(tokens[i] - tokens[i-1])
    }

    let lastIndex = diffArray.length - 1;
    let check = isSafe(diffArray);

    if (check > -1) {
        if (check <= 1 && isSafe(diffArray.slice(1, diffArray.length - 1) || check == lastIndex && isSafe(diffArray.slice(0, diffArray.length - 1) < 0))) {
            safe = true;
        } else if (check == 0 && addAndCheck(diffArray, check, "left") > -1) {
            if (check == lastIndex) {
                safe = false;
            } else if (addAndCheck(diffArray, check, "right") > -1) {
                safe = false;
            }
        }
    }

    if (safe) {
        numSafe++;
    }
}

console.log(numSafe);