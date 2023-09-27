function getNeighbors(row, col, matrix) {
  const neighbors = [];

  // Check top
  if (row > 0) neighbors.push([row - 1, col]);

  // Check top right
  if (row > 0 && col < matrix[0].length - 1) neighbors.push([row - 1, col + 1]);

  // Check right
  if (col < matrix[0].length - 1) neighbors.push([row, col + 1]);

  // Check bottom right
  if (row < matrix.length - 1 && col < matrix[0].length - 1) neighbors.push([row + 1, col + 1]);

  // Check bottom
  if (row < matrix.length - 1) neighbors.push([row + 1, col]);

  // Check bottom left
  if (row < matrix.length - 1 && col > 0) neighbors.push([row + 1, col - 1]);

  // Check left
  if (col > 0) neighbors.push([row, col - 1]);

  // Check top left
  if (row > 0 && col > 0) neighbors.push([row - 1, col - 1]);

  return neighbors;
}


function countIslands(matrix) {
  const visited = new Set();
  let count = 0;

  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[0].length; col++) {
      if (matrix[row][col] === 1 && !visited.has(`${row},${col}`)) {
        count++;
        const stack = [[row, col]];
        visited.add(`${row},${col}`);

        while (stack.length > 0) {
          const [currentRow, currentCol] = stack.pop();
          const neighbors = getNeighbors(currentRow, currentCol, matrix);

          for (const neighbor of neighbors) {
            const [newRow, newCol] = neighbor;

            if (!visited.has(`${newRow},${newCol}`) && matrix[newRow][newCol] === 1) {
              stack.push([newRow, newCol]);
              visited.add(`${newRow},${newCol}`);
            }
          }
        }
      }
    }
  }

  return count; // Return the count of islands
}


// Uncomment the lines below for local testing
// const matrix = [
//                 [1,1,1,0,0],
//                 [0,1,1,0,1],
//                 [0,1,1,0,1]
//               ]

// console.log(getNeighbors(1, 1, matrix)); // [[0, 0], [0, 1], [0, 2], [1, 2], [2, 1], [2, 2]]
// console.log(getNeighbors(2,4, matrix)) // [[1,4]]

// const matrix2 = [
//                     [1,1,1,0,1],
//                     [0,0,0,0,1],
//                     [1,0,0,1,0],
//                 ]

// console.log(countIslands(matrix)) // 2
// console.log(countIslands(matrix2)); // 3

module.exports = [countIslands, getNeighbors];