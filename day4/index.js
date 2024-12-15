const findXmas = (grid, row, col, currentLetter, direction) => {

    if (currentLetter == 'S') {
        xmasCount++;
        return true;
    }
    
    if (direction) {
        let nextLetter = getNextLetter(currentLetter);
        console.log(`got direction ${direction}, finding ${nextLetter}`)
        if (direction == 'up' && grid[row-1]?.[col] == nextLetter) {
            findXmas(grid, row-1, col, nextLetter, direction)
        } else if (direction == 'upleft' && grid[row-1]?.[col-1] == nextLetter) {
            findXmas(grid, row-1, col-1, nextLetter, direction)
        } else if (direction == 'upright' && grid[row-1]?.[col+1] == nextLetter) {
            findXmas(grid, row-1, col+1, nextLetter, direction)
        } else if (direction == 'down' && grid[row+1]?.[col] == nextLetter) {
            findXmas(grid, row+1, col, nextLetter, direction)
        } else if (direction == 'downleft' && grid[row+1]?.[col-1] == nextLetter) {
            findXmas(grid, row+1, col-1, nextLetter, direction)
        } else if (direction == 'downright' && grid[row+1]?.[col+1] == nextLetter) {
            findXmas(grid, row+1, col+1, nextLetter, direction)
        } else if (direction == 'left' && grid[row]?.[col-1] == nextLetter) {
            findXmas(grid, row, col-1, nextLetter, direction)
        } else if (direction == 'right' && grid[row]?.[col+1] == nextLetter) {
            findXmas(grid, row, col+1, nextLetter, direction)
        } else {
            return false
        }
    } else {
        console.log(`new search!`)
        const up = grid[row-1]?.[col]
        const upleft = grid[row-1]?.[col-1]
        const upright = grid[row-1]?.[col+1]
        const down = grid[row+1]?.[col]
        const downleft = grid[row+1]?.[col-1]
        const downright = grid[row+1]?.[col+1]
        const left = grid[row]?.[col-1]
        const right = grid[row]?.[col+1]
        
        nextLetter = getNextLetter(currentLetter);    
        if (up === nextLetter) {
            return findXmas(grid, row-1, col, nextLetter, 'up')
        } else if (upleft == nextLetter) {
            return findXmas(grid, row-1, col-1, nextLetter, 'upleft')
        } else if (upright == nextLetter) {
            return findXmas(grid, row-1, col+1, nextLetter, 'upright')
        } else if (down == nextLetter) {
            return findXmas(grid, row+1, col, nextLetter, 'down')
        } else if (downleft == nextLetter) {
            return findXmas(grid, row+1, col-1, nextLetter, 'downleft')
        } else if (downright == nextLetter) {
            return findXmas(grid, row+1, col+1, nextLetter, 'downright')
        } else if (left == nextLetter) {
            return findXmas(grid, row, col-1, nextLetter, 'left')
        } else if (right == nextLetter) {
            return findXmas(grid, row, col+1, nextLetter, 'right')
        } else {
            return false
        }
    }
}